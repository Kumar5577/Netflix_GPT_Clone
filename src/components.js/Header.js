import { useDispatch, useSelector } from "react-redux";
import { logo_url } from "../utils/links";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
    }).catch((error) => {
      // An error happened.
    });
    
  
    
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
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
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe called when component unmounts
    return ()=> unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo_url} alt="Netflix-logo" />
      {user &&
      <div className="flex">
        <img className="w-14 h-14 p-2" alt="User_logo" src={user.photoURL}/>
        <p className="font-bold text-white p-2 my-2">{user.displayName}</p>
        <button className="bg-red-600 text-white font-bold p-2 mx-4 my-2 rounded-lg w-15 h-10" onClick={handleSignout}>Sign out</button>
      </div>}
    </div>

  );
};
export default Header;
