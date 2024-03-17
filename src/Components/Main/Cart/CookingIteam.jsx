import PropTypes from "prop-types";

export const CookingIteam = ({ button, item, serial }) => {
  const { name, time, calories } = item;
  return (
    <tr className="border-none flex-none items-center firaFont text-[#282828B2]">
      <td className="font-semibold px-1 md:px-3 text-[#282828CC]">{serial}</td>
      <td className="px-1 md:px-3">{name}</td>
      <td>{time} minutes</td>
      <td className="px-1 md:px-3">{calories} calories</td>
      {button && (
        <td className="px-1 md:px-3">
          <button
            onClick={() => button(item)}
            type="button"
            className="bg-main  text-[#150B2B] hover:transition-colors duration-300  btn-ghost font-semibold py-2 px-3 rounded-full"
          >
            Prepraing
          </button>
        </td>
      )}
    </tr>
  );
};
CookingIteam.propTypes = {
  button: PropTypes.func,
  item: PropTypes.object,
  serial: PropTypes.number,
};
