import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  return (
   
      <div className="main_container">
        <Display></Display>
        <Buttons></Buttons>
      </div>
  );
}

export default App;
