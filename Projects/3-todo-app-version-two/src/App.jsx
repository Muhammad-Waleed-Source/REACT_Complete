import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go to College",
      date: "4/10/2023",
    },
    {
      name: "Buy Beef",
      date: "09/03/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
