import arrowRightDown from "../../../assets/arrowRightDown.svg";
import logoDark from "../../../assets/logo-dark.svg";
import backgroundVector from "../../../assets/vectors/about.svg";

const About = () => {
  return (
    <section className="relative">
      <div className="mx-auto mt-32 w-full max-w-7xl px-4 lg:my-40 lg:px-8">
        {/* SECTION TITLE */}
        <div className="flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
          <img src={arrowRightDown} alt="welcome" className="w-4" />
          <p className="text-sm text-[#1C62C2] lg:text-xl">About Us</p>
        </div>

        {/* STORY OF ECOFUSE */}
        <div className="mt-12 lg:mt-24">
          <h2 className="flex items-center gap-2 text-xl font-medium text-[#191919] lg:gap-3 lg:text-3xl">
            Story of <img src={logoDark} alt="logo" className="w-8 lg:w-10" />
            <span className="pt-1 font-tarunoWide text-2xl lg:pt-2">
              Ecofuse
            </span>
          </h2>

          <p className="mt-4 text-[#666] lg:mt-8 lg:w-7/12 lg:text-2xl lg:font-light">
            Our journey began with a vision to democratize web3 exploration.
            Ecofuse was born from a passion for combining AI and blockchain,
            becoming the guardian that bridges the gap between users and the
            decentralized realm.
          </p>
        </div>

        {/* MISSION AND VISION */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-medium text-[#191919] lg:gap-3 lg:text-3xl">
            Mission and Vision
          </h2>

          <p className="mt-4 text-[#666] lg:mt-8 lg:w-7/12 lg:text-2xl lg:font-light">
            Our mission is to provide accessibility and knowledge, fostering a
            vibrant community within the web3 ecosystem. We envision Ecofuse as
            the go-to platform that empowers, informs, and safeguards the growth
            of web3.
          </p>
        </div>

        {/* VALUES */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-medium text-[#191919] lg:gap-3 lg:text-3xl">
            Values
          </h2>

          <p className="mt-4 text-[#666] lg:mt-8 lg:w-7/12 lg:text-2xl lg:font-light">
            <span className="mr-[4px] inline-flex items-center gap-2 font-bold">
              Accessibility
              <small className="text-[7px] lg:text-[10px]">&#x25CF;</small>
            </span>{" "}
            Making web3 accessible to all.
          </p>
          <p className="mt-4 text-[#666] lg:w-7/12 lg:text-2xl lg:font-light">
            <span className="mr-[4px] inline-flex items-center gap-2 font-bold">
              Responsibility
              <small className="text-[7px] lg:text-[10px]">&#x25CF;</small>
            </span>{" "}
            Promoting sustainable practices and growth.
          </p>
          <p className="mt-4 text-[#666] lg:w-7/12 lg:text-2xl lg:font-light">
            <span className="mr-[4px] inline-flex items-center gap-2 font-bold">
              Inclusivity
              <small className="text-[7px] lg:text-[10px]">&#x25CF;</small>
            </span>{" "}
            Breaking down barriers for diverse participation.
          </p>
          <p className="mt-4 text-[#666] lg:w-7/12 lg:text-2xl lg:font-light">
            <span className="mr-[4px] inline-flex items-center gap-2 font-bold">
              Community
              <small className="text-[7px] lg:text-[10px]">&#x25CF;</small>
            </span>{" "}
            Fostering collaboration and innovation.
          </p>
        </div>
      </div>

      <img
        src={backgroundVector}
        alt=""
        className="absolute -top-[330px] right-0 -z-20 w-8/12 sm:-top-[400px] sm:w-1/2 lg:top-[0%] lg:block lg:w-4/12"
      />
    </section>
  );
};

export default About;
