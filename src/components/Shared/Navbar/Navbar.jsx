import SideNav from "./SideNav";

// custom css
import "./Navbar.css";

// assets
import logo from "../../../assets/logo.svg";
import TopNav from "./TopNav";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Community",
    path: "#community",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <header>
      <div className="mx-auto hidden max-w-7xl px-10 lg:block">
        <TopNav links={links} logo={logo} />
      </div>
      <div className="lg:hidden">
        <SideNav links={links} logo={logo} />
      </div>
    </header>
  );
};

export default Navbar;
