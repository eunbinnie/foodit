import { useState } from "react";
import FoodList from "./components/FoodList/FoodList";
import { getFoods } from "./api";

const App = (props) => {
  // 정렬 기능
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const handleNewestOrder = () => setOrder("createdAt");
  const handleCalorieOrder = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 정렬된 아이템

  // 아이템 삭제
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };

  return (
    <div>
      <button onClick={handleNewestOrder}>최신순</button>
      <button onClick={handleCalorieOrder}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
};

export default App;
