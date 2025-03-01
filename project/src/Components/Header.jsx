import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <section className="flex md:flex-row md:gap-24 items-center max-w-[96%] mx-auto py-4">
      <Logo />
      <Navigation />
    </section>
  );
};

// the component for the logo
const Logo = () => {
  // const navigate = useNavigate();
  return (
    <section className="flex sm:none justify-between items-center w-full">
      <div className="text-4xl flex items-center gap-2">
        <h1 className="logo-text font-bold text-red-800">MoviePlace</h1>
        <GiPopcorn className="text-red-800" />
      </div>
      <div className="text-3xl text-red-800 sm:hidden">
        <TiThMenu />
      </div>
    </section>
  );
};

export default Header;
