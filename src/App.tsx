import { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";
import Tabs from "./components/tabs/Tabs";
import { dateArray } from "./data";

const initialSelectedOption = dateArray[0];

function App() {
  const [selectedDate, setSelectedDate] = useState(initialSelectedOption);

  return (
    <main>
      <Tabs selectedDate={selectedDate}>
        <Dropdown
          options={dateArray}
          onChange={setSelectedDate}
          initialSelectedOption={initialSelectedOption}
        />
      </Tabs>
    </main>
  );
}

export default App;
