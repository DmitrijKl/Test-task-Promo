import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { addNewTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import createNewTodo from "../../utils/createNewTodo";

const TodoForm = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (inputTodo.trim()) {
      dispatch(addNewTodo(createNewTodo(inputTodo)));
      setInputTodo("");
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <input
          onChange={(event) => setInputTodo(event.target.value)}
          value={inputTodo}
          type="text"
          placeholder="Введите новую задачу"
        />
        <button className={styles.button}>Добавить задачу</button>
      </form>
    </div>
  );
};

export default TodoForm;
