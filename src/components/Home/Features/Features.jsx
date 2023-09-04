import arrowRightDown from "../../../assets/arrowRightDown.svg";
import dots from "../../../assets/vectors/dots.svg";
import web3 from "../../../assets/Features-Icons/chip.png";
import ai from "../../../assets/Features-Icons/artificial-intelligence.png";
import resource from "../../../assets/Features-Icons/resource.png";
import coding from "../../../assets/Features-Icons/html.png";
import blockchain from "../../../assets/Features-Icons/blockchain.png";
import personalize from "../../../assets/Features-Icons/user.png";

const data = [
  {
    id: 1,
    title: "AI-Powered Security",
    icon: web3,
    desc: "Elevate security with our AI-driven web3 auditor, providing real-time smart contract analysis and blockchain threat detection.",
  },
  {
    id: 2,
    title: "AI-Powered Knowledge Base",
    icon: ai,
    desc: "Ecofuse's advanced AI/ML algorithm, the Language and Learning Model (LLM), serves as your real-time knowledge base. Access accurate and up-to-date insights, coding support, and automated blockchain updates.",
  },
  {
    id: 3,
    title: "Resource Hub",
    icon: resource,
    desc: "Expand your web3 knowledge with our diverse collection of resources, guides, and tutorials. Stay up-to-date with the latest trends and enhance your skills to thrive in the evolving decentralized landscape.",
  },
  {
    id: 4,
    title: "Coding Support",
    icon: coding,
    desc: "Developers, empower your web3 projects with AI/ML-powered coding assistance. Overcome coding challenges, receive real-time solutions, and create with confidence.",
  },
  {
    id: 5,
    title: "Automated Blockchain Dashboards",
    icon: blockchain,
    desc: "Stay informed with automated dashboards providing essential metrics, transaction volumes, and blockchain network updates. Gain insights into the heart of web3 operations.",
  },
  {
    id: 6,
    title: "Personalized Assistance",
    icon: personalize,
    desc: "Whether you're a novice or an expert, Ecofuse offers personalized guidance and support tailored to your experience level. Navigate the complexities of the decentralized world with confidence.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto mt-20 w-full max-w-7xl px-4 lg:mb-48 lg:mt-40 lg:px-8">
        {/* SECTION TITLE */}
        <div className="flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
          <img src={arrowRightDown} alt="welcome" className="w-4" />
          <p className="text-sm text-[#1C62C2] lg:text-xl">Features</p>
        </div>

        {/* FEATURES LIST */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="border-[rgba(28, 98, 194, 0.30)] overflow-hidden border bg-white px-6 py-8 shadow"
            >
              <div className="flex items-center justify-center gap-3">
                {/* img */}
                <img
                  src={item.icon}
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-[#d9d9d9] lg:h-14 lg:w-14"
                ></img>
                {/* title */}
                <h3 className="text-xl text-[#1c62c2] lg:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-6 line-clamp-3 text-center text-base text-[#666] md:line-clamp-none lg:text-lg">
                {item.desc}
              </p>
              <div className="flex">
                <button
                  title="Our Services"
                  className="ml-auto mt-8 border border-[#1C62C2] px-5 py-2 text-lg font-medium text-[#245BA5] transition-all hover:bg-[#245BA5] hover:text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={dots}
        alt="vector"
        className="absolute -bottom-[12%] left-0 -z-20 hidden lg:block"
      />
      <img
        src={dots}
        alt="vector"
        className="absolute right-0 top-[12%] -z-20 hidden lg:block"
      />
    </section>
  );
};

export default Features;
