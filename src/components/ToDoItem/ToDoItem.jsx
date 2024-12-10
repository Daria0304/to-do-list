import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";

export const ToDoItem = ({ name, done }) => {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button>Done</Button>}
      <Button>Delete</Button>
    </li>
  );
};
