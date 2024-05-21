import React, { useState } from "react";
import styles from "./FilterTodos.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  setTextFilter,
  setOnlyCompletedFilter,
} from "../../redux/slices/filterSlice";

const FilterTodos = () => {
  const [inputFilter, setInputFilter] = useState("");
  const dispatch = useDispatch();

  const handleTextFilterChange = (event) => {
    setInputFilter(event.target.value);
    dispatch(setTextFilter(event.target.value));
  };
  const handleClearInputFilter = (event) => {
    setInputFilter("");
    dispatch(setTextFilter(""));
  };
  const handleOnlyCompletedTodo = () => {
    dispatch(setOnlyCompletedFilter());
  };

  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <input
          onChange={(event) => handleTextFilterChange(event)}
          value={inputFilter}
          className={styles.text}
          type="text"
          placeholder="Фильтрация по названию задачи"
        />
        <IoCloseOutline
          onClick={(event) => handleClearInputFilter(event)}
          className={styles.iconClose}
        />
      </div>
      <div className={styles.inputCheckbox}>
        <label htmlFor="checkbox">Выполненные задачи</label>
        <input
          onChange={handleOnlyCompletedTodo}
          id="checkbox"
          type="checkbox"
        ></input>
      </div>
    </div>
  );
};

export default FilterTodos;
