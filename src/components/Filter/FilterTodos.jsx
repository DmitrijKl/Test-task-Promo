import React from "react";
import styles from "./FilterTodos.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { completedFilter } from "../../redux/selectors";
import { textFilter } from "../../redux/selectors";
import {
  setTextFilter,
  setOnlyCompletedFilter,
  resetAllFilters,
} from "../../redux/slices/filterSlice";

const FilterTodos = () => {
  const dispatch = useDispatch();
  const onlyCompletedFilter = useSelector(completedFilter);
  const textFilterInput = useSelector(textFilter);

  const handleTextFilterChange = (event) => {
    dispatch(setTextFilter(event.target.value));
  };

  const handleClearInputFilter = (event) => {
    dispatch(setTextFilter(""));
  };

  const handleOnlyCompletedTodo = () => {
    dispatch(setOnlyCompletedFilter());
  };

  const handleResetAllFilters = () => {
    dispatch(resetAllFilters());
  };

  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <input
          onChange={(event) => handleTextFilterChange(event)}
          value={textFilterInput}
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
          checked={onlyCompletedFilter}
          onChange={handleOnlyCompletedTodo}
          id="checkbox"
          type="checkbox"
        ></input>
      </div>
      <button onClick={handleResetAllFilters} className={styles.reset}>
        Сброс фильтров
      </button>
    </div>
  );
};

export default FilterTodos;
