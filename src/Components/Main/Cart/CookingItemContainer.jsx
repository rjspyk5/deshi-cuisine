import { CookingIteam } from "./CookingIteam";
import PropTypes from "prop-types";

export const CookingItemContainer = ({ button, cartIteams, time, calorie }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table  ">
        <thead>
          <tr className="border-none firaFont font-medium text-[#878787] text-sm">
            <th></th>
            <th className="px-1 md:px-3">Name</th>
            <th>Time</th>
            <th className="px-1 md:px-3">Calories</th>
            {button && <th className="px-1 md:px-3"></th>}
          </tr>
        </thead>
        <tbody className="bg-[#28282808]">
          {cartIteams &&
            cartIteams.map((el, iDx) => {
              return (
                <CookingIteam
                  serial={iDx + 1}
                  key={el?.id}
                  button={button}
                  item={el}
                />
              );
            })}
          {!button && (
            <tr className="border-none bg-[white] flex-none items-center font-semibold text-[#282828CC]">
              <td></td>
              <td></td>
              <td>
                Total Time =<br />
                {time} minutes
              </td>
              <td className="px-1 md:px-3">
                Total Calories =<br />
                {calorie} calories
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
CookingItemContainer.propTypes = {
  button: PropTypes.func,
  cartIteams: PropTypes.array,
  time: PropTypes.number,

  calorie: PropTypes.number,
};
