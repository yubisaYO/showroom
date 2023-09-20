import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperCar from "./components/SuperCar";
import { Col, Container, Row, Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>

      <div className="supercar">
        <SuperCar />
      </div>
    </div>
  );
}

export default App;
