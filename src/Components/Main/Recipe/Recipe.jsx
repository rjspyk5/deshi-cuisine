import { useEffect, useState } from "react";
import { RecipeHeading } from "./RecipeHeading";
import { ItemCard } from "./ItemCard/ItemCard";
import { Cart } from "../Cart/Cart";

export const Recipe = () => {
  const [recipeData, setrecipeData] = useState([]);
  useEffect(() => {
    const f = async () => {
      const promisedData = await fetch("data.json");
      const actualData = await promisedData.json();
      setrecipeData([...actualData]);
    };
    f();
  }, []);
  const [cartIteams, setcartIteams] = useState([]);
  const handleWantToCook = (itemDetails) => {
    if (!cartIteams.find((el) => el.id === itemDetails.id)) {
      setcartIteams([...cartIteams, itemDetails]);
    }
  };
  const [totalTimeForCook, settotalTimeForCook] = useState(0);
  const [totalCalorieGain, settotalCalorieGain] = useState(0);
  const [currentlyCookingCart, setcurrentlyCookingCart] = useState([]);
  const handlePrepraingButton = (iteam) => {
    const updateCartIteams = cartIteams.filter((el) => el.id !== iteam.id);
    setcartIteams([...updateCartIteams]);
    setcurrentlyCookingCart([...currentlyCookingCart, iteam]);
    settotalCalorieGain(totalCalorieGain + parseInt(iteam.calories));
    settotalTimeForCook(totalTimeForCook + parseInt(iteam.time));
  };
  return (
    <div>
      <RecipeHeading></RecipeHeading>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipeData &&
            recipeData.map((el) => (
              <ItemCard
                handleClick={handleWantToCook}
                singleData={el}
                key={el.id}
              />
            ))}
        </div>
        <div className="order-1 lg:col-span-4 lg:order-2 ">
          <Cart
            totalTime={totalTimeForCook}
            totalCalorie={totalCalorieGain}
            handlePrepraingButton={handlePrepraingButton}
            currentlyCookingCart={currentlyCookingCart}
            cartIteams={cartIteams}
          ></Cart>
        </div>
      </div>
    </div>
  );
};
