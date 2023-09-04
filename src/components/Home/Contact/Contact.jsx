import arrowRightDown from "../../../assets/arrowRightDown.svg";
import arrowRightDownWhite from "../../../assets/arrowRightDownWhite.svg";
import vectorBg from "../../../assets/vectors/welcome.svg";
import circleBg from "../../../assets/vectors/circle.svg";
import insta from "../../../assets/social-icons/insta.svg";
import telegram from "../../../assets/social-icons/telegram.svg";
import twitter from "../../../assets/social-icons/twitter.svg";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="relative mx-auto mt-32 w-full max-w-7xl overflow-hidden px-4 lg:px-8">
        {/* SECTION TITLE */}
        <div className="flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
          <img src={arrowRightDown} alt="welcome" className="w-4" />
          <p className="text-sm text-[#1C62C2] lg:text-xl">Contact Us</p>
        </div>
        <p className="mt-8 max-w-[560px] text-2xl font-light text-[#666] lg:text-3xl">
          Have questions, suggestions, or feedback? Reach out to us using the
          form below. We&apos;re here to assist you on your web3 journey.
        </p>

        {/* CONTACT US BUTTON */}

        <a
          href="https://twitter.com/EcoFuseAI"
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex w-fit items-center gap-3 bg-[#1C62C2] py-2  pl-4 pr-3 text-base font-light text-white transition-all duration-200 ease-in hover:gap-4 hover:shadow-lg lg:pl-5 lg:pr-4 lg:text-lg"
        >
          Contact Us{" "}
          <img
            src={arrowRightDownWhite}
            alt="Arrow Right"
            className="w-3 -rotate-45"
          />
        </a>

        {/* SECTION TITLE */}
        <div className="mt-28 flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
          <img src={arrowRightDown} alt="welcome" className="w-4" />
          <p className="text-sm text-[#1C62C2] lg:text-xl">Social Media</p>
        </div>

        <p className="mt-8 max-w-[560px] text-2xl font-light text-[#666] lg:text-3xl">
          Connect with us on social media for the latest updates, discussions,
          and community interactions.
        </p>

        <div className="mt-20 flex items-center gap-4 pb-2 lg:gap-8">
          <a
            href="https://twitter.com/EcoFuseAI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full border border-[#1C62C2] p-2 opacity-70 transition-all duration-200 ease-in hover:scale-105 lg:p-4"
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
            className="rounded-full transition-all duration-200 ease-in hover:scale-105"
          >
            <img
              src={insta}
              alt="instagram"
              className="w-[42px] rounded-full lg:w-14"
            />
          </a>
          <a
            href="https://twitter.com/EcoFuseAI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full border border-[#1C62C2] p-2 opacity-70 transition-all duration-200 ease-in hover:scale-105 lg:p-4"
          >
            <img src={twitter} alt="twitter" className="h-6 w-6 rounded-full" />
          </a>
        </div>

        <img
          src={circleBg}
          alt="vector"
          className="absolute -right-10 bottom-[50%] -z-20  w-36 opacity-80 md:bottom-[58%] md:right-[16%]  lg:bottom-[75%] lg:right-[15%] lg:w-44"
        />
        <img
          src={circleBg}
          alt="vector"
          className="absolute bottom-[45%] right-[26%] -z-20 w-14 md:bottom-[50%] md:right-[28%] lg:bottom-[68%] lg:right-[26%]"
        />
      </div>

      <img
        src={vectorBg}
        alt="vector"
        className="absolute -bottom-24 right-0 -z-20 lg:-bottom-40"
      />
    </section>
  );
};

export default Contact;
