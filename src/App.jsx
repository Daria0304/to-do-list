import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { getSubheading } from "./utils/getSubheading";

const App = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const todos = [
    {
      name: "Do shopping",
      done: false,
      id: 1,
    },
    {
      name: "Learn React",
      done: true,
      id: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>To do</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  );
};

export default App;
