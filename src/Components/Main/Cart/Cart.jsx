import { CookingItem } from "./CookingItem";

export const Cart = () => {
  return (
    <>
      <div className="py-8 border">
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Want to cook
        </h1>
        <CookingItem button={true} />
        <h1 className="mx-auto text-center max-w-[350px] border-b">
          Want to cook
        </h1>
        <CookingItem button={false} />
      </div>
    </>
  );
};
