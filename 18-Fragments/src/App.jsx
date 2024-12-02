import FoodItems from "../components/FoodItems";
import ErrorMsg from "../components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  // let foodItems = [];
  let foodItems = [ 'Butter', 'Green vegetable', 'Roti', 'Meat', 'Salad','Milk'];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
