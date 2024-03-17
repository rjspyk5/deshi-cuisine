import PropTypes from "prop-types";

export const ItemCard = ({ singleData, handleClick }) => {
  const { name, description, ingredients, time, calories, img, id } =
    singleData;
  return (
    <div className="card card-compact  border-[#28282833] border bg-base-100 s p-6 space-y-6 firaFont">
      <figure>
        <img
          className="rounded-2xl h-[250px]  lg:h-[160px] w-full"
          src={img}
          alt="not available"
        />
      </figure>
      <div>
        {/* title */}
        <div className="space-y-4 pb-4 border-b border-[#2828281A]">
          <h1 className="font-semibold text-xl lexendFont">{name}</h1>
          <h6 className="text-[#878787] ">{description}</h6>
        </div>
        {/* ingredients */}
        <div className="space-y-4 pb-4 pt-6 border-b border-[#2828281A]">
          <h1 className="font-semibold text-lg lexendFont">
            Ingredients : {ingredients.length}
          </h1>
          <ul className="space-y-4 list-disc ps-4 text-[#878787]">
            {ingredients.map((el, iDx) => (
              <li key={iDx}>{el}</li>
            ))}
          </ul>
        </div>
        {/* time */}
        <div className="py-6 flex items-center gap-4 text-[#282828CC]">
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {time} minutes
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_34_2)">
                <path
                  d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
                  stroke="#282828CC"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_2">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {calories} calories
          </p>
        </div>

        {/* time end */}
        {/* Cook button */}
        <button
          onClick={() => handleClick({ name, time, calories, id })}
          type="button"
          className="bg-main  text-[#150B2B] hover:transition-colors duration-300  btn-ghost font-semibold py-2 px-4 rounded-full"
        >
          Want to cook
        </button>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  singleData: PropTypes.object,
  handleClick: PropTypes.func,
};
