import heroBg from "../../../assets/Hero/heroBg.png";
import logoWhite from "../../../assets/logo-white.svg";
import btnArrowRight from "../../../assets/btnArrowRight.svg";

const Hero = () => {
  return (
    <section className="relative max-h-[668px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={heroBg}
        alt=""
        className="min-h-[320px] w-full object-cover object-center"
      />

      <div className="absolute left-0 top-0 h-full w-full">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-end gap-10 px-4 pb-12 text-center text-white lg:items-start lg:justify-center lg:gap-4 lg:px-8 lg:pb-0 lg:text-start">
          <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:items-start">
            <h1 className="text-3xl font-medium md:text-[48px] md:leading-snug xl:text-[58px]">
              Unleash the Power of <br /> Web3 with{" "}
              <img
                src={logoWhite}
                alt=""
                className="mb-8 ml-1 hidden w-[80px] lg:inline"
              />{" "}
              <span className="hidden font-tarunoWide text-[50px] font-normal lg:inline">
                Ecofuse
              </span>
            </h1>
            <div className="flex items-center gap-2 lg:hidden">
              <img src={logoWhite} alt="" />
              <h1 className="mt-1 font-tarunoWide text-2xl font-normal">
                Ecofuse
              </h1>
            </div>
          </div>
          <p className="hidden max-w-lg text-lg text-[#F4F3F3] lg:block">
            Your Pathway to Decentralized Possibilities with Ecofuse. AI-Powered
            Guidance for Navigating the Decentralized Realm.
          </p>

          {/* button */}
          <a
            href="#partners"
            className="rounded-sm bg-gradient-to-br from-[#ffffffcf] via-[#668fdd]  to-[#ffffffcf] p-[0.7px] lg:mt-12"
          >
            <span className="flex items-center gap-2 rounded-sm bg-gradient-to-br from-[#3662B2] to-[#dd2d62c1] py-2 pl-4 pr-3 text-sm font-light lg:pl-5 lg:pr-4 lg:text-lg">
              Explore{" "}
              <img src={btnArrowRight} alt="Arrow Right" className="w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
