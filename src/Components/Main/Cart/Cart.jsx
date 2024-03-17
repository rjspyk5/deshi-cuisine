import { CookingItemContainer } from "./CookingItemContainer";

export const Cart = ({ cartIteams }) => {
  return (
    <>
      <div className="py-8 border">
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Want to cook
        </h1>
        {cartIteams?.length > 0 && (
          <CookingItemContainer cartIteams={cartIteams} />
        )}
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Currently Cooking
        </h1>
        <CookingItemContainer button={false} />
        <div className="grid grid-cols-2">
          <div className="col-start-2 flex gap-5">
            <h1>Total Time</h1>
            <h1>Total Calorie</h1>
          </div>
        </div>
      </div>
    </>
  );
};
