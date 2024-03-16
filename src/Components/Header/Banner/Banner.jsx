import chefYellow from "../../../assets/img/chef-photo-yellow.jpg";
import chefSalmon from "../../../assets/img/chef-photo=one.jpg";

export const Banner = () => {
  return (
    <div className="relative ">
      <div className="h-full w-full rounded-3xl bg-black opacity-55 absolute"></div>
      <img
        className="w-full rounded-3xl max-h-[500px] "
        src={chefYellow}
        alt=""
      />
    </div>
  );
};
