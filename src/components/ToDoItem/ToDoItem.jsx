import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";

export const ToDoItem = ({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) => {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Done</Button>}
      <Button onClick={onDeleteButtonClick}>Delete</Button>
    </li>
  );
};
