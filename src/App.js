import { useState } from "react";
import FoodList from "./components/FoodList/FoodList";
import items from "./mock.json";

const App = (props) => {
  // 정렬 기능
  const [order, setOrder] = useState("createdAt");
  const handleNewestOrder = () => setOrder("createdAt");
  const handleCalorieOrder = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 정렬된 아이템

  return (
    <div>
      <button onClick={handleNewestOrder}>최신순</button>
      <button onClick={handleCalorieOrder}>칼로리순</button>
      <FoodList items={sortedItems} />
    </div>
  );
};

export default App;
