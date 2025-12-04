import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Herosection from "./component/Herosection";
import Aboutus from "./component/Aboutus";
import Industries from "./component/Industries";
import Products from "./component/Products";
import Contactus from "./component/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Herosection />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/industries" element={<Industries />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
