import chefSalmon from "../../../assets/img/chef-photo=one.jpg";

export const Banner = () => {
  return (
    <div
      className="hero min-h-[300px] md:min-h-[500px] bg-contain rounded-3xl"
      style={{
        backgroundImage: `url(${chefSalmon})`,
      }}
    >
      <div className=" h-full w-full bg-[black] opacity-50 rounded-3xl"></div>
      <div className="hero-content p-5 text-center text-neutral-content">
        <div className="max-w-xl md:max-w-4xl">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Unlock your culinary creativity with bespoke cooking classes
            designed to suit your taste preferences, skill level, and culinary
            aspirations.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn border-none rounded-full bg-main">
              Explore Now
            </button>
            <button className="btn rounded-full bg-transparent text-[white]">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
