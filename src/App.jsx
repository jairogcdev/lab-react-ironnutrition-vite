import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsValue, setFoodsValue] = useState(foodsJson);
  const [foodsValueToDisplay, setFoodsValueToDisplay] = useState(foodsValue);

  return (
    <div className="App">
      <AddFoodForm foodsValue={foodsValue} setFoodsValue={setFoodsValue} />
      {foodsValue.map((food, index) => {
        return (
          <FoodBox
            key={index}
            index={index}
            food={food}
            foodsValue={foodsValue}
            setFoodsValue={setFoodsValue}
          />
        );
      })}
    </div>
  );
}

export default App;
