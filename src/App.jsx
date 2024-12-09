import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>To do</h1>
          <h2>4 tasks</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        <ToDoItem />
        <li>
          <span>Do shopping</span>
          <button>Done</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
