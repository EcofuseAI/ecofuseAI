import arrowRightDown from "../../../assets/arrowRightDown.svg";
import vectorBg from "../../../assets/vectors/welcome.svg";
import circleBg from "../../../assets/vectors/circle.svg";

const Welcome = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:pb-40 lg:pb-44 lg:pt-20">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* SECTION TITLE */}
        <div className="flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
          <img src={arrowRightDown} alt="welcome" className="w-4" />
          <p className="text-sm text-[#1C62C2] lg:text-xl">
            Welcome To Ecofuse
          </p>
        </div>

        {/* SECTION TEXT */}
        <h4 className="mt-6 max-w-[258px] text-lg font-light sm:max-w-[400px] md:text-2xl lg:mt-12 lg:max-w-[676px] lg:text-[40px] lg:leading-snug">
          Your trusted companion in the web3 revolution. With advanced AI and ML
          technology, we empower you to explore, learn, and thrive in the
          decentralized ecosystem.
        </h4>

        <img
          src={circleBg}
          alt="vector"
          className="absolute bottom-[40%] right-[15%] -z-20 hidden w-36 opacity-80 md:block lg:bottom-[50%] lg:w-44"
        />
      </div>

      <img
        src={vectorBg}
        alt="vector"
        className="absolute bottom-0 right-0 -z-20"
      />
    </section>
  );
};

export default Welcome;
