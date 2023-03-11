import BakeryNavBar from "./components/BakeryNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";
import OneItem from "./components/OneItem";
import Made from "./Pages/Made";
import Offers from "./Pages/Offers";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
 <BrowserRouter>
 <BakeryNavBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/shop'} element={<Shop/>}/>
      <Route path={"/oneitem"} element={<OneItem/>}/>
      <Route path={"MadeBakery"} element={<Made/>}/>
      <Route path={"/offers"} element={<Offers/>}/>
      <Route path={"/cart"} element={<Cart/>}/>
     </Routes>
    <Footer/>
    </BrowserRouter>

 </>  );
}

export default App;
