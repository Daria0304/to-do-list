import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form className={styles.form} action="">
      Form
      <input className={styles.input} type="" />
      <Button
        onClick={() => {
          alert("I was clicked!");
        }}
      >
        Add
      </Button>
    </form>
  );
};
