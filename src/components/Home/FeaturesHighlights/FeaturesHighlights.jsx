import backgroundImage from "../../../assets/Features/bg.png";
import arrowRightDown from "../../../assets/arrowRightDownWhite.svg";

const data = [
  {
    id: 1,
    title: "AI-Powered Knowledge Base",
    desc: "Real-time insights, automated blockchain updates, and coding support.",
  },
  {
    id: 2,
    title: "Web3 Explorer",
    desc: "Dive into blockchain networks, DApps, and smart contracts for a comprehensive",
  },
  {
    id: 3,
    title: "Resource Hub",
    desc: "Enhance your web3 knowledge with guides, tutorials, and resources.",
  },
  {
    id: 4,
    title: "Coding Assistance",
    desc: "Develop web3 projects with AI-driven coding support.",
  },
  {
    id: 5,
    title: "Automated Blockchain Dashboards",
    desc: "Stay updated with essential metrics and network announcements.",
  },
  {
    id: 6,
    title: "Personalized Guidance",
    desc: "Tailored assistance for users of all levels.",
  },
];

const FeaturesHighlights = () => {
  return (
    <section
      className="bg-cover bg-left-bottom md:bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="left-0 top-0 h-full w-full py-12 lg:pb-20 lg:pt-32">
        <div className="mx-auto h-full w-full max-w-7xl px-4 lg:px-8">
          {/* SECTION TITLE */}
          <div className="flex w-fit items-center gap-4 rounded-full border border-[#FFF] py-2 pl-5 pr-6">
            <img
              src={arrowRightDown}
              alt="welcome"
              className="white-arrow w-4"
            />
            <p className="text-sm font-light text-[#FFF] lg:text-xl">
              Feature Highlights
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="mt-12 grid max-w-[1200px] grid-cols-1 content-center justify-items-center gap-5 md:grid-cols-2 lg:mt-16">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex h-[253px] w-full flex-col items-center justify-center gap-6 px-7 py-11 text-center text-white  shadow-[0px_0px_1px_1px_#eaf2fb]"
              >
                <h4 className="w-11/12 text-2xl lg:text-3xl">{item.title}</h4>
                <p className="text-base text-white/70 lg:max-w-[370px] lg:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* GET STARTED BUTTON */}
          <button className="mx-auto mt-10 block rounded-sm bg-gradient-to-r from-[#ffffffcf] via-[#1C62C2]  to-[#ffffffcf] p-[1px] lg:mt-20">
            <span className="flex items-center gap-2 rounded-sm bg-[#1C62C2] py-2 pl-4 pr-3 text-base font-light text-white lg:pl-5 lg:pr-4 lg:text-lg">
              Get Started{" "}
              <img
                src={arrowRightDown}
                alt="Arrow Right"
                className="w-4 -rotate-90"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
