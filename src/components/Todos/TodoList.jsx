import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todolist() {
  const todos = useSelector((state) => state.todoSlice.todosList);
  return (
    <div>
      {!todos.length && <h2>Список задач пуст 😞</h2>}
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
export default Todolist;
