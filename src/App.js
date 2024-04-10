import FoodList from "./components/FoodList/FoodList";
import items from "./mock.json";

const App = (props) => {
  return (
    <div>
      <FoodList items={items} />
    </div>
  );
};

export default App;
