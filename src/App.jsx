import { useId } from "react";
import UseMemo from "./UseMemo";

const Input = ({ label = "default" }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-${label}`}>Nama Lengkap </label>
      <input type="text" id={`${id}-${label}`} />
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Input label="firstname" />
      <Input />
      <Input />

      <UseMemo />
    </>
  );
}

export default App;
