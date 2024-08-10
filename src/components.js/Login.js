import Header from "./Header";
import { login_bg_img, user_logo } from "../utils/links";
import { useEffect, useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMesaage] = useState();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSign = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMesaage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_logo,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesaage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesaage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={login_bg_img} alt="Back-Ground Image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="py-4 w-full font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 w-full p-4 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 w-full p-4 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 w-full p-4 bg-gray-700"
        />
        <p className="text-red-700 py-2 my-2 font-bold">{errorMessage}</p>
        <button
          onClick={handleSign}
          className="my-4 p-4 bg-red-700 w-full rounded-xl"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 font-bold cursor-pointer" onClick={handleClick}>
          {isSignIn
            ? "New to Netflix? Signup Now"
            : "Already Singed Up? Please Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
