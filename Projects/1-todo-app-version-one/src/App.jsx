import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
