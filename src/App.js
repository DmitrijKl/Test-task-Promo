import Card from "./UI/Card";
import FilterTodos from "./components/Filter/FilterTodos";
import Header from "./components/Header/Header";
import TodoForm from "./components/Todos/TodoForm";
import Todolist from "./components/Todos/TodoList";
import "./scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card>
          <FilterTodos />
        </Card>
        <Card>
          <TodoForm></TodoForm>
          <Todolist />
        </Card>
      </div>
    </>
  );
}

export default App;
