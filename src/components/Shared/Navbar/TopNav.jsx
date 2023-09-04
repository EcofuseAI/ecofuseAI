import { Link } from "react-router-dom";

const TopNav = ({ links, logo }) => {
  return (
    <div className="flex items-center justify-between gap-2 py-3">
      {/* logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Ecofuse Logo" className="h-5" />
        <span className="pt-1 font-tarunoWide text-lg font-medium uppercase text-[#1F1A82]">
          Ecofuse
        </span>
      </Link>

      {/* Menu */}
      <ul className="flex gap-8 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
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
        className="border border-[#1C62C2] px-5 py-2 text-lg font-medium text-[#245BA5] transition-all hover:bg-[#245BA5] hover:text-white"
      >
        Explore
      </a>
    </div>
  );
};

export default TopNav;
