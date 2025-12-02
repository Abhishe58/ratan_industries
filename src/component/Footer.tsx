import "./Footer.css";
import { MdShareLocation } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footercona">
          <h1>Ratan Industries</h1>
          <p>Chemical & Industrial Powders</p>
          <a href="">
            <MdShareLocation style={{ fontSize: "20px" }} />
            60, Shubh Laxmi Estate, Dhanot, Kalol, Chhatral, Gandhinagar-382729,
            Gujarat, India
          </a>
        </div>
        <div className="footerconc">
          <p>Quick Link</p>
          <div className="footerminconb">
            <a href="" className="footerLink">
              Home
            </a>
            <a href="" className="footerLink">
              Product
            </a>
            <a href="" className="footerLink">
              Industries
            </a>
            <a href="" className="footerLink">
              About Us
            </a>
            <a href="" className="footerLink">
              Blogs
            </a>
            <a href="" className="footerLink">
              Contact Us
            </a>
            <a href="" className="footerLink">
              Request a Quote
            </a>
          </div>
        </div>
        <div className="footerconb">
          <p>Contact</p>
          <p className="footerLink">Dharmesh Mewada (CEO)</p>
          <a className="footerLink">abc@gmail.com</a>
          <a className="footerLink">+9100000000</a>
        </div>
      </footer>
    </>
  );
}
