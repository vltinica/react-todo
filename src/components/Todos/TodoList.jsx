import React from "react";
import Todo from "./Todo";

<<<<<<< HEAD
import styles from "./TodoList.module.css"

const TodoList = ({todos}) => {
  return (
    <div className={styles.todoListContainer }>
=======
const TodoList = ({todos}) => {
  return (
    <div>
>>>>>>> 8106405e0b357d1fa32d7947b5e5a4b9ad825bf2
      {todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
    </div>
  );
};

export default TodoList;
