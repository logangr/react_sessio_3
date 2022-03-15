import "./App.css";
import Person from "./components/Person";
import Trasto from "./components/Trasto";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <Person name="Juanito" eyeColor="blue" age="23"></Person>
        <Person name="Pepito" eyeColor="blue"></Person>
        <Person eyeColor="green" age="23"></Person>
        <Person />
      </div>

      <div>
        <Trasto />
      </div>

      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
