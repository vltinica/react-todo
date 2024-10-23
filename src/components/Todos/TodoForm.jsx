import React from "react";
import { useState } from "react";

<<<<<<< HEAD
import styles from "./TodoForm.module.css";


=======
>>>>>>> 8106405e0b357d1fa32d7947b5e5a4b9ad825bf2
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
<<<<<<< HEAD
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input 
=======
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
>>>>>>> 8106405e0b357d1fa32d7947b5e5a4b9ad825bf2
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
