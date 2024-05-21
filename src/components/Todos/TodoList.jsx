import { useSelector } from "react-redux";
import Todo from "./Todo";
import { selectTodosFiltered } from "../../redux/selectors";

function Todolist() {
  const filteredSlice = useSelector(selectTodosFiltered);

  return (
    <div>
      {!filteredSlice.length && <h2>Список задач пуст 😞</h2>}
      {filteredSlice?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
export default Todolist;
