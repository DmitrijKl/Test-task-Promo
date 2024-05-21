import { v4 as uuidv4 } from "uuid";

const createNewTodo = (inputText) => {
  return {
    text: inputText,
    id: uuidv4(),
    completed: false,
  };
};
export default createNewTodo;
