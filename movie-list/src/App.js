import "./App.css";
import { Data } from "./Data";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="App">
      <Title details={Data} />
    </div>
  );
}

export default App;
