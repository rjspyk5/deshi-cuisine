import chefYellow from "../../../assets/img/chef-photo-yellow.jpg";
import chefSalmon from "../../../assets/img/chef-photo=one.jpg";

export const Banner = () => {
  return (
    <div
      className="hero min-h-[480px] rounded-3xl"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
