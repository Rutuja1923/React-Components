import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoApp() {
  const [todos, setTodos] = useState([{ task: "Sample Task", uuid: uuidv4(), isDone: false }]);
  const [newTodo, setNewTodo] = useState("");

  const handleOnChange = (event) => setNewTodo(event.target.value);

  const handleFormSubmit = (event) => event.preventDefault();

  const handleAddTask = () => {
    setTodos((prevTodos) => [...prevTodos, { task: newTodo, uuid: uuidv4() }]);
    setNewTodo("");
  };

  const handleToDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.uuid !== id));
  };

  const handleUpperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const handleMarkAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  const handleMarkAsComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.uuid === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <>
      <h2>Task-On</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add Task Here..."
          value={newTodo}
          onChange={handleOnChange}
          style={{
            width: "250px",
            border: "none",
            borderRadius: "10px",
            padding: "5px 10px",
            fontSize: "17px",
          }}
        />
        <button
          type="submit"
          style={{ padding: "5px 10px", margin: "0px 20px" }}
          onClick={handleAddTask}
        >
          Add +
        </button>
      </form>
      <br />
      <hr />
      <h3 style={{ margin: "0px" }}>Tasks To Do</h3>
      <hr />
      <ul style={{ width: "auto" }}>
        {todos.map((todo) => (
          <li key={todo.uuid}>
            <span>{todo.isDone ? <s>{todo.task}</s> : todo.task}</span>
            <button onClick={() => handleMarkAsComplete(todo.uuid)} style={{ padding: "5px 10px", margin: "0px 10px" }}>
              <i className="fa-regular fa-circle-check"></i>
            </button>
            <button onClick={() => handleToDelete(todo.uuid)} style={{ padding: "5px 10px", margin: "0px 10px" }}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleUpperCaseAll}>Upper Case All</button>
      <button onClick={handleMarkAsDoneAll}>Mark As Done All</button>
    </>
  );
}

export default ToDoApp;