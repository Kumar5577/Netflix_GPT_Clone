import { logo_url } from "../utils/links";

const Header = () => {
  return (
    <div className="absolute w-64 bg-gradient-to-b from-black z-10">
      <img src={logo_url} alt="Netflix-logo" />
    </div>
  );
};
export default Header;
