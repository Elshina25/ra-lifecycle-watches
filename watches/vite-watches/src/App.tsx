import "./App.css";
import { useState } from "react";
import ClockWidget from "./components/ClockWidget/ClockWidget";
import { IClockProps } from "./models/IClockProps";
import Clocks from "./components/Clocks/Clocks";
import { v4 } from "uuid";

function App() {
  const [clocks, setClocks] = useState([
    {
      id: v4(),
      name: "Moscow",
      timezone: 3,
    },
    {
      id: v4(),
      name: "London",
      timezone: 1,
    },
  ]);

  const addClock = (newClock: Omit<IClockProps, "id">) => {
    const clock = {
      ...newClock,
      id: v4(),
    };
    setClocks([...clocks, clock]);
  };

  const deleteClock = (id: string) => {
    setClocks((clocks) => clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="container">
      <h2>World clocks</h2>
      <ClockWidget addClock={addClock} />
      <Clocks clocks={clocks} onDelete={deleteClock} />
    </div>
  );
}

export default App;
