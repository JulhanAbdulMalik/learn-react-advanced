import { memo, useState } from "react";

const TodoList = memo(({ todos }) => {
  console.log("render todo list");

  return (
    <>
      {todos.map((todo, index) => (
        <p key={`${todo}-${index}`}>{todo}</p>
      ))}
    </>
  );
});

const Counter = memo(({ count }) => {
  console.log("render counter");

  return <p>Counter: {count}</p>;
});

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Cooking", "Sleeping"]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = ({ newTodo }) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div>
      <h1>Memo</h1>

      <TodoList todos={todos} />
      <button onClick={() => addTodo({ newTodo: "Learning" })}>Add Todo</button>

      <Counter count={count} />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Memo;
