import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Butter",
    "Green vegetable",
    "Roti",
    "Meat",
    "Salad",
    "Milk",
  ];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg> {/*Here items is a prop */}
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for you health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
