import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Nomatch from "./Components/Nomatch/Nomatch";
import Team from "./Components/Team/Team";
import Teamdetails from "./Components/Teamdetails/Teamdetails";
import Teams from "./Components/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/home' element={<Home />} />
            {/* <Route path="/home" element={<Teams />}> */}
            <Route path={"/teamid/:teamId"} element={<Teamdetails/>} />
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Nomatch />} />
        </Routes>
  </Router>
    </div>
  );
}

export default App;
