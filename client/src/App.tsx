import { useState } from "react";
import "./App.css";
import Button from "./components/ButtonComponent";
import Card from "./components/CardComponent";

function App() {
  const [lightState, setLightState] = useState(true);

  const open_lights = () => {
    setLightState(!lightState);
  };

  return (
    <>
      <div className="content">
        <Button label="Open Lights" onClick={() => open_lights()}></Button>
      </div>
      <div className="content">
        <Card
          title="Show the state of the light!"
          description={lightState ? "Light is ON!" : "Light is OFF!"}
        ></Card>
      </div>
    </>
  );
}

export default App;
