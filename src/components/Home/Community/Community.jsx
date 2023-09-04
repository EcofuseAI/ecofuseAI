import circles from "../../../assets/vectors/circles3.png";
import arrowRightDown from "../../../assets/arrowRightDown.svg";

const Community = () => {
  return (
    <section id="community" className="mt-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-4 md:flex-row lg:px-8">
        <div>
          {/* SECTION TITLE */}
          <div className="flex w-fit items-center gap-4 rounded-full border border-[#1c62c2] py-2 pl-5 pr-6">
            <img src={arrowRightDown} alt="welcome" className="w-4" />
            <p className="text-sm text-[#1C62C2] lg:text-xl">Community Hub</p>
          </div>

          <p className="mt-12 max-w-[580px] text-2xl font-light text-[#666] lg:text-3xl">
            Join the vibrant Ecofuse community where enthusiasts, developers,
            and learners collaborate, share knowledge, and drive innovation.
            Together, we shape the future of web3.
          </p>
        </div>

        <div>
          <img src={circles} alt="circle" className="w-full max-w-[480px]" />
        </div>
      </div>
    </section>
  );
};

export default Community;
