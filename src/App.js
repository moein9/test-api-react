import "./App.css";
import { Cards } from "./components/cards/cards";

function App() {
  return (

    <div style={{backgroundColor:"black",display:"grid"}} className="App">
      <h1>countries</h1>
      <Cards />
    </div>
  );
}

export default App;
