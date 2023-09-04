import { Link } from "react-router-dom";
import hamburgerIcon from "../../../assets/Navbar/hamburger.svg";
import { useState } from "react";
import "./Navbar.css";

const SideNav = ({ links, logo }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.classList.add("sidebar-open");
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.classList.remove("sidebar-open");
  };
  return (
    <>
      <div className="relative flex justify-between border-b p-2">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ecofuse Logo" className="h-5" />
          <span className="pt-1 font-tarunoWide text-lg font-medium uppercase text-[#1F1A82]">
            Ecofuse
          </span>
        </Link>

        <button title="Open Menu" className="ml-auto" onClick={openSidebar}>
          <img src={hamburgerIcon} alt="Open Menu Icon" />
        </button>
        {/* Navigation */}
        <div
          className={`sidebar absolute right-0 top-0 h-[100vh] overflow-hidden bg-white px-8 py-4 ${
            isSidebarOpen ? "open" : ""
          }`}
        >
          <button
            title="Close Menu"
            className="absolute right-3 top-3 text-lg"
            onClick={closeSidebar}
          >
            &#10006;
          </button>

          <div className="flex h-full flex-col items-center justify-between gap-2">
            {/* logo */}
            <Link
              to="/"
              onClick={closeSidebar}
              className="mt-12 flex items-center gap-2"
            >
              <img src={logo} alt="Ecofuse Logo" className="h-5" />
              <span className="pt-1 font-tarunoWide text-lg font-medium uppercase text-[#1F1A82]">
                Ecofuse
              </span>
            </Link>

            {/* Menu */}
            <ul className="mt-12 space-y-4 text-center">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={closeSidebar}
                    // className={({ isActive }) =>
                    //   isActive
                    //     ? "border-b-[2px] border-[#1C62C2] text-lg text-[#1C62C2]"
                    //     : "text-lg text-[#666]"
                    // }
                    className="text-lg text-[#666] hover:border-b-[2px] hover:border-[#1C62C2] hover:text-[#1C62C2]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* CTA */}
            <a
              href="#partners"
              title="Our Services"
              className="mt-12 w-full border border-[#1C62C2] py-2 text-center text-lg text-[#245BA5] transition-all hover:bg-[#245BA5] hover:text-white"
            >
              Explore
            </a>
          </div>
        </div>
        {/* Backdrop */}
        <div
          className={`backdrop ${isSidebarOpen ? "open" : ""}`}
          onClick={closeSidebar}
        ></div>
      </div>
    </>
  );
};

export default SideNav;
