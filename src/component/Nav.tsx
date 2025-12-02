import "./Nav.css";
import Logo from "../assets/logo.png";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

export default function Nav() {
  const [sta, setSta] = useState(true);
  return (
    <>
      <div className="Navcontainer">
        <div className="NavxCon">
          <img src={Logo} alt="Ratan Industries" className="logo" />
          <div className="Navsuba">
            <h1>Ratan Industries</h1>
            <p>Chemical & Industrial Powders</p>
          </div>
        </div>

        <nav className={sta ? "cnav" : "onav"}>
          <p className="Navlink">Home</p>
          <p className="Navlink">Product</p>
          <p className="Navlink">Industries</p>
          <p className="Navlink">About Us</p>
          <p className="Navlink">Blogs</p>
          <p className="Navlink">Contact Us</p>
          <p className="CtaBut">Request a Quote</p>
          <p className="CtaButb">Explore Products</p>
        </nav>
        <p className="navIco" onClick={() => setSta(!sta)}>
          <FiAlignRight />
        </p>
      </div>
    </>
  );
}
