
import Slider from "react-slick";
import "./App.css";
import { Navbar } from "./components/Navbar";
import CustomSlider from "./components/CustomSlider";
import Image from "./components/Image";
import Panel from "./components/Pannel";
import Footer from "./components/Footer";
import MobileSlider from "./components/MobileSlider";
import ProductDetail from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      
      <conatainer className="fixed">
      <Navbar/>
      </conatainer>
      <Panel/>
      <Image/>
      <CustomSlider/>
      <conatainer className="bg-white max-w-full ">
      <MobileSlider/>
      </conatainer>
    
      <Footer/>
    </div>
  );
}

export default App;
