import Dropdown from "./components/dropdown/Dropdown";
import { dateArray } from "./data";

const dateOptions = dateArray.map((date) => date.replace(/-/g, " "));

function App() {
  return (
    <main>
      <Dropdown options={dateOptions} />
    </main>
  );
}

export default App;
