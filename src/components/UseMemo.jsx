import { useMemo, useState } from "react";

const calculation = (num) => {
  console.log("calculate");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }

  return num;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const resultCalculation = useMemo(() => calculation(count), [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = ({ newTodo }) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div>
      <h1>UseMemo</h1>

      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <h3>Result: {resultCalculation}</h3>

      <p>
        Todos:{" "}
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))}
      </p>
      <button onClick={() => addTodo({ newTodo: "Learning" })}>Add Todo</button>
    </div>
  );
};

export default UseMemo;
