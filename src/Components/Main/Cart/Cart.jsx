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
      <div className="py-8 border">
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Want to cook {cartIteams?.length}
        </h1>
        {cartIteams?.length > 0 && (
          <CookingItemContainer
            button={handlePrepraingButton}
            cartIteams={cartIteams}
          />
        )}
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Currently Cooking {currentlyCookingCart?.length}
        </h1>

        {currentlyCookingCart.length > 0 && (
          <>
            <CookingItemContainer cartIteams={currentlyCookingCart} />
            <div className="grid grid-cols-2">
              <div className="col-start-2 flex gap-5">
                <h1>Total Time {totalTime}</h1>
                <h1>Total Calorie {totalCalorie}</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
