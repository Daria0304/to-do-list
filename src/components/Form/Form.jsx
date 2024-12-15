import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export const Form = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
      action=""
    >
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button>Add</Button>
    </form>
  );
};
