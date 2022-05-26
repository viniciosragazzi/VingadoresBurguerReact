import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import spider from './medias/spider.jpg'
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [cartArr, setCartArr] = useState([])
  return (
    <div className="App pb-10  w-full min-h-screen relative bg-cover  bg-fixed bg-center"style={{ backgroundImage: `url(${spider})` }}>
     
      <BrowserRouter>
        <Header />
        {/* <img src={spider} alt="spider" className=' opacity-20 absolute'/> */}
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/menu" element={<Menu cartArr={cartArr} setCartArr={setCartArr}/>} />
          <Route path="/cart" element={<Cart  cartArr={cartArr}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
