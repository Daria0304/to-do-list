import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { getSubheading } from "./utils/getSubheading";

const todoList = [
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

const App = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState(todoList);

  const addItem = (newTodoName) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodoName,
        done: false,
        id: prevTodos.length > 0 ? prevTodos.at(-1).id + 1 : 0,
      },
    ]);
    setIsFormShown(false);
  };

  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const finishItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          done: true,
        };
      })
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>To do</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button onClick={setIsFormShown(true)} className={styles.button}>
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
