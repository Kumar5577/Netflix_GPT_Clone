import { useDispatch, useSelector } from "react-redux";
import { logo_url } from "../utils/links";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = ()=>{
    dispatch(removeUser());
    navigate("/");
  }
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
