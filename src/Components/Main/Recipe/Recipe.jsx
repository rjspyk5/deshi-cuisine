import { useEffect, useState } from "react";
import { RecipeHeading } from "./RecipeHeading";
import { ItemCard } from "./ItemCard/ItemCard";

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

  return (
    <div>
      <RecipeHeading></RecipeHeading>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="lg:col-span-6 order-2 lg:order-1">h</div>
        <div className="order-1 lg:order-2"> </div>
      </div>
    </div>
  );
};
