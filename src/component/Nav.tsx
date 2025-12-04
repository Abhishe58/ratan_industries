import "./Nav.css";
import Logo from "../assets/logo.png";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <p>
            <Link to="/" className="Navlink">
              Home
            </Link>
          </p>
          <p>
            <Link to="/products" className="Navlink">
              Products
            </Link>
          </p>
          <p>
            <Link to="/industries" className="Navlink">
              Industries
            </Link>
          </p>
          <p>
            <Link to="/about" className="Navlink">
              About us
            </Link>
          </p>
          <p>
            <Link to="/contactus" className="Navlink">
              Contact Us
            </Link>
          </p>
          <p>
            <Link to="/contactus" className="CtaBut">
              Request a Quote
            </Link>
          </p>
          <p>
            <Link to="/products" className="CtaButb">
              Explore Products
            </Link>
          </p>
        </nav>
        <p className="navIco" onClick={() => setSta(!sta)}>
          <FiAlignRight />
        </p>
      </div>
    </>
  );
}
