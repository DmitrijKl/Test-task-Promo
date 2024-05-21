import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../../redux/slices/todoSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const completedTodo = todo.completed ? styles.completedTodo : "";

  return (
    <div className={`${styles.root} ${completedTodo}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.text}>{todo.text}</div>
      <div className={styles.Icons}>
        <RiDeleteBin2Line
          onClick={() => dispatch(deleteTodo(todo.id))}
          className={styles.deleteIcon}
        />
        <FaCheck
          onClick={() => dispatch(toggleCompleted(todo.id))}
          className={styles.checkIcon}
        />
      </div>
    </div>
  );
}
export default Todo;
