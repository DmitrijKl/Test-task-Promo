import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { selectTodosFiltered, todosSelector } from "../../redux/selectors";
import { useEffect } from "react";
import { firstMountLocalStorage } from "../../redux/slices/todoSlice";

let firstMount = true;

function Todolist() {
  const dispatch = useDispatch();
  const filteredSlice = useSelector(selectTodosFiltered);
  const tasks = useSelector(todosSelector);

  useEffect(() => {
    if (firstMount) {
      const tasksStorage = JSON.parse(localStorage.getItem("items"));
      tasksStorage
        ? dispatch(firstMountLocalStorage(tasksStorage))
        : dispatch(firstMountLocalStorage([]));
      firstMount = false;
      return;
    }
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks, dispatch]);

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
