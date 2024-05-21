import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.scss";

function Todo({ todo }) {
  const completedTodo = todo.completed ? styles.completedTodo : "";

  return (
    <div className={`${styles.root} ${completedTodo}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.text}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  );
}
export default Todo;
