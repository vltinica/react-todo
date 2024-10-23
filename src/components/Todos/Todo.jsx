<<<<<<< HEAD
import React from "react";
import styles from "./Todo.module.css"

const Todo = ({ todo }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
};

export default Todo;
=======
import React from 'react'

const Todo = ({todo}) => {
  return (
    <h3>{todo}</h3>
  )
}

export default Todo
>>>>>>> 8106405e0b357d1fa32d7947b5e5a4b9ad825bf2
