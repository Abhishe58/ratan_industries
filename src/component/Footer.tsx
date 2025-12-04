import "./Footer.css";
import { MdShareLocation } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footercona">
          <h1>Ratan Industries</h1>
          <p>Chemical & Industrial Powders</p>
          <a href="https://maps.app.goo.gl/zpBLSyWqMhU7RSLy7">
            <MdShareLocation style={{ fontSize: "20px" }} />
            60, Shubh Laxmi Estate, Dhanot, Kalol, Chhatral, Gandhinagar-382729,
            Gujarat, India
          </a>
        </div>
        <div className="footerconc">
          <p>Quick Link</p>
          <div className="footerminconb">
            <p>
              <Link to="/" className="footerLink">
                Home
              </Link>
            </p>
            <p>
              <Link to="/products" className="footerLink">
                Products
              </Link>
            </p>
            <p>
              <Link to="/industries" className="footerLink">
                Industries
              </Link>
            </p>
            <p>
              <Link to="/about" className="footerLink">
                About us
              </Link>
            </p>
            <p>
              <Link to="/contactus" className="footerLink">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        <div className="footerconb">
          <p>Contact</p>
          <p className="footerLink">Dharmesh Mewada (CEO)</p>
          <a href="mailto:abc@gmail.com" className="footerLink">
            abc@gmail.com
          </a>
          <a href="https://wa.me/+919173481721" className="footerLink">
            +91 9173481721
          </a>
        </div>
      </footer>
    </>
  );
}
