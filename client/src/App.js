
import Slider from "react-slick";
import "./App.css";
import { Navbar } from "./components/Navbar";
import CustomSlider from "./components/CustomSlider";
import Image from "./components/Image";
import Panel from "./components/Pannel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <conatainer className="fixed">
      <Navbar/>
      </conatainer>
      <Panel/>
      <Image/>
      <CustomSlider/>
      <Footer/>
    </div>
  );
}

export default App;
