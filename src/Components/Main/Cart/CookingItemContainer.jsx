import { CookingIteam } from "./CookingIteam";

export const CookingItemContainer = ({ button, cartIteams }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table  ">
        {/* head */}
        <thead>
          <tr className="border-none">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            {button && <th></th>}
          </tr>
        </thead>
        <tbody className="bg-[#28282808]">
          {cartIteams &&
            cartIteams.map((el) => {
              return <CookingIteam key={el?.id} button={button} item={el} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
