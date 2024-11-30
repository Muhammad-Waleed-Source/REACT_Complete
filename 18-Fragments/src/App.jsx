import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [];
  // let foodItems = [ 'Daal', 'Green vegetable', 'Roti', 'Meat', 'Salad','Milk'];

  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>

      {/* {emptyMessage}  */}
      {/* Another method is */}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}

      <ul className="list-group">
        {foodItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}

export default App;
