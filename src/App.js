import Card from "./UI/Card";
import Header from "./components/Header/Header";
import TodoForm from "./components/Todos/TodoForm";
import Todolist from "./components/Todos/TodoList";
import "./scss/app.scss";

function App() {
  return (
    <div>
      <Header />
      <Card>
        <TodoForm></TodoForm>
        <Todolist />
      </Card>
    </div>
  );
}

export default App;
