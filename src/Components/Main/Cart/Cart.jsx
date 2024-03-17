import { CookingItemContainer } from "./CookingItemContainer";

export const Cart = ({
  cartIteams,
  handlePrepraingButton,
  currentlyCookingCart,
  totalTime,
  totalCalorie,
}) => {
  return (
    <>
      <div className="py-8 border border-[#28282826] rounded-2xl">
        <h1 className="mx-auto text-center font-semibold text-2xl max-w-[350px] pb-3 border-b border-[#28282826]">
          Want to cook : {cartIteams?.length}
        </h1>
        {cartIteams?.length > 0 && (
          <CookingItemContainer
            button={handlePrepraingButton}
            cartIteams={cartIteams}
          />
        )}
        <h1 className="mx-auto text-center max-w-[350px] font-semibold text-2xl pb-3 pt-8 border-b border-[#28282826]">
          Currently Cooking : {currentlyCookingCart?.length}
        </h1>

        {currentlyCookingCart.length > 0 && (
          <>
            <CookingItemContainer
              time={totalTime}
              calorie={totalCalorie}
              cartIteams={currentlyCookingCart}
            />
          </>
        )}
      </div>
    </>
  );
};
