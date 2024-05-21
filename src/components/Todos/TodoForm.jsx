import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { addNewTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import createNewTodo from "../../utils/createNewTodo";
import { IoCloseOutline } from "react-icons/io5";

const TodoForm = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [isInputError, setIsInputErrot] = useState("");

  const dispatch = useDispatch();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (inputTodo.trim()) {
      dispatch(addNewTodo(createNewTodo(inputTodo)));
      setInputTodo("");
    } else {
      setIsInputErrot(true);
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <div
          onFocus={() => setIsInputErrot("")}
          className={`${styles.input} ${isInputError ? styles.inputError : ""}`}
        >
          <input
            onChange={(event) => {
              setInputTodo(event.target.value);
              setIsInputErrot("");
            }}
            value={inputTodo}
            type="text"
            placeholder="Введите новую задачу"
          />
          <IoCloseOutline
            onClick={() => setInputTodo("")}
            className={styles.iconClose}
          />
        </div>
        <button className={styles.button}>Добавить задачу</button>
      </form>
      <p className={isInputError && styles.inputError}>
        Поле заполнено не корректно
      </p>
    </div>
  );
};

export default TodoForm;
