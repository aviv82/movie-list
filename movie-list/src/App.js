import "./App.css";
import { useState } from "react";
import { Data } from "./Data";
import { Title } from "./components/title/Title";
import { Header } from "./components/header/Header";

function App() {
  const [newData, setNewData] = useState({ Data });

  return (
    <div className="App">
      <Header clickHandle={setNewData} />
      <Title details={newData} />
    </div>
  );
}

export default App;
