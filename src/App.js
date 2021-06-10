import "./App.css";
import Timer from "./Timer";
import Meme from "./Meme";
import SmallTimer from "./SmallTimer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Timer} />
        <Route exact path="/smalltimer" component={SmallTimer} />
        <Route exact path="/meme" component={Meme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
