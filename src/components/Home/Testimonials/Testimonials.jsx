import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import arrowRightDown from "../../../assets/arrowRightDownWhite.svg";
import backgroundImage from "../../../assets/Features/bg.png";
import greg from "../../../assets/Testimonials/greg.jpeg";
import ecofuse from "../../../assets/Testimonials/ecofuse.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Greg Osuri",
    desc: "Founder at Akash Network",
    path: "https://twitter.com/akashnet_",
    img: greg,
    text: "EcofuseAI Simplified the Deployment on @akashnet_ - Mind-Blowing Experience! Try It 👇",
    text_path: "https://twitter.com/gregosuri/status/1694817467565027339?s=20",
  },
  {
    id: 2,
    name: "EcofuseAI",
    desc: "Web3 Guardian",
    path: "https://twitter.com/EcoFuseAI",
    img: ecofuse,
    text: "The automated AI/ML powered coding support has been a game-changer for my blockchain projects. Thanks EcofuseAI!",
    text_path: "https://twitter.com/EcoFuseAI",
  },
];

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Testimonials = () => {
  return (
    <section
      className="mt-24 bg-cover bg-left-bottom md:bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto flex h-[622px] w-full max-w-7xl  flex-col items-center justify-center gap-10 px-4 py-4 lg:px-8">
        <div className="w-full">
          {/* SECTION TITLE */}
          <div className="flex w-fit items-center gap-4 rounded-full border border-[#FFF] py-2 pl-5 pr-6">
            <img
              src={arrowRightDown}
              alt="welcome"
              className="white-arrow w-4"
            />
            <p className="text-sm font-light text-[#FFF] lg:text-xl">
              Testimonials
            </p>
          </div>
        </div>
        {/* TESTIMONIALS */}
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          style={{
            height: "60%",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex w-10/12 flex-col items-center justify-center text-white"
            >
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt="User"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm px-2"
                >
                  <h4 className="text-2xl font-medium lg:text-3xl">
                    {item.name}
                  </h4>
                  <p className="text-sm lg:text-lg">{item.desc}</p>
                </a>
              </div>

              <a
                href={item.text_path}
                target="_blank"
                rel="noreferrer"
                className="mt-12 rounded p-2 text-center text-2xl font-light lg:text-4xl"
              >
                {item.text}
              </a>
            </div>
          ))}
        </AutoplaySlider>
      </div>
    </section>
  );
};

export default Testimonials;
