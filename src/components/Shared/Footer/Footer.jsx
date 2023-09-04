import logoWhite from "../../../assets/logo-white.svg";
import btnArrowRight from "../../../assets/btnArrowRight.svg";
import insta from "../../../assets/social-icons/insta-light.svg";
import telegram from "../../../assets/social-icons/telegram-light.svg";
import twitter from "../../../assets/social-icons/twitter-light.svg";

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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="mt-24 bg-[#191919] pt-8 text-white">
      <div className="mx-auto w-full max-w-7xl border-b border-[#454545] px-4 pb-12">
        <div className="flex items-center gap-2">
          <img src={logoWhite} alt="" className="" />{" "}
          <span className="mt-[4px] font-tarunoWide text-lg font-normal">
            Ecofuse
          </span>
        </div>

        <div className="items-center justify-between md:flex">
          <p className="mt-12 max-w-[300px] text-lg font-light md:ml-12">
            Empower Your Web3 Adventure: EcofuseAI - Where AI Meets Blockchain
            for Seamless Exploration.
          </p>

          <ul className="mt-6 space-y-2">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="text-lg opacity-90 hover:text-[#1C62C2]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex items-center gap-4 pb-2 md:mt-0 lg:gap-8">
            <a
              href="https://twitter.com/EcoFuseAI"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border border-[#fff] p-2 opacity-70 transition-all duration-200 ease-in hover:scale-105 lg:p-4"
            >
              <img
                src={telegram}
                alt="telegram"
                className="h-6 w-6 rounded-full"
              />
            </a>
            <a
              href="https://twitter.com/EcoFuseAI"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border border-[#fff] opacity-70 transition-all duration-200 ease-in hover:scale-105"
            >
              <img
                src={insta}
                alt="instagram"
                className="rounded-full lg:h-14 lg:w-14"
              />
            </a>
            <a
              href="https://twitter.com/EcoFuseAI"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border border-[#fff] p-2 opacity-70 transition-all duration-200 ease-in hover:scale-105 lg:p-4"
            >
              <img
                src={twitter}
                alt="twitter"
                className="h-6 w-6 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex py-4">
        <button
          onClick={scrollToTop}
          className="mx-auto flex items-center gap-2 border py-2 pl-3 pr-4 text-lg opacity-80"
        >
          <img src={btnArrowRight} alt="Arrow" className="-rotate-90" />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
