import backgroundImage from "../../../assets/Features/bg.png";
import arrowRightDown from "../../../assets/arrowRightDownWhite.svg";
import btnArrowRight from "../../../assets/btnArrowRight.svg";
import optimismLogo from "../../../assets/Ecosystem-Partners/optimism.svg";
import akashLogo from "../../../assets/Ecosystem-Partners/akash-logo-primary.svg";

const data = [
  {
    id: 1,
    title: "Optimism",
    logo: optimismLogo,
    path: "https://optimism.ecofuse.ai/",
    desc: "AI-Powered Guardian to Optimism Blockchain. Explore, Learn, and Engage in the Optimistic Web3 Realm with Confidence.",
  },
  {
    id: 2,
    title: "Akash Network",
    logo: akashLogo,
    path: "https://akashecofuse.streamlit.app/",
    desc: "Navigating the Akash Network. Your Friendly Companion for Exploring, Learning, and Participating in the Akash Network Space.",
  },
];

const EcosystemPartners = () => {
  return (
    <section
      id="partners"
      className="bg-cover bg-left-bottom md:bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="left-0 top-0 h-full w-full pb-10 pt-14 lg:pb-28 lg:pt-20">
        <div className="mx-auto h-full w-full max-w-7xl overflow-hidden lg:px-8">
          {/* SECTION TITLE */}
          <div className="mx-4 flex w-fit items-center gap-4 rounded-full border border-[#FFF] py-2 pl-5 pr-6">
            <img
              src={arrowRightDown}
              alt="welcome"
              className="white-arrow w-4"
            />
            <p className="text-sm font-light text-[#FFF] lg:text-xl">
              Ecosystem Partners
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-12 overflow-hidden lg:mt-16">
            <div className="flex w-full items-center gap-5 overflow-auto px-4 pb-8 md:justify-center">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="m-1 flex h-[300px] min-w-[80vw] flex-col items-center justify-center gap-6 px-6 pb-8 pt-10 text-center text-white shadow-[0px_0px_1px_1px_#eaf2fb] md:h-[400px]  md:w-full md:min-w-0"
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-w-[40%]"
                  />

                  <p className="text-base text-white/70 lg:max-w-[370px] lg:text-lg">
                    {item.desc}
                  </p>

                  {/* button */}
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 w-full rounded-sm bg-gradient-to-br from-[#ffffffcf] via-[#668fdd] to-[#ffffffcf]  p-[1px] md:mt-6 md:w-fit"
                  >
                    <span className="flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-to-br from-[#3662B2] to-[#dd2d62c1] py-2 pl-5 pr-4 text-sm font-light lg:pl-6 lg:pr-5 lg:text-lg">
                      Try Demo
                      <img
                        src={btnArrowRight}
                        alt="Arrow Right"
                        className="w-4"
                      />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPartners;
