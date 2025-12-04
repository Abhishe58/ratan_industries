import Nav from "./Nav";
import "./Contactus.css";
import Footer from "./Footer";

export default function Contactus() {
  return (
    <>
      <Nav />
      <div className="contactuscontainer">
        <div className="contactuscona">
          <h1>Contact Us</h1>
          <p>
            We’re here to support your needs with fast responses, dedicated
            expertise, and reliable customer service. <br /> Whether you need
            product information, pricing, samples, or custom formulations, our
            team is ready to assist.
          </p>
          <h3>Ratan Industries</h3>
          <a href="https://maps.app.goo.gl/zpBLSyWqMhU7RSLy7" className="plink">
            60, Shubh Laxmi Estate, Dhanot, Kalol, Chhatral, Gandhinagar-382729,
            Gujarat, India
          </a>
          <a href="mailto:abc@gmail.com" className="plink">
            abc@gmail.com
          </a>
          <a href="https://wa.me/+919173481721" className="plink">
            +91 9173481721
          </a>
        </div>
        <div className="contactusconb">
          <div className="formContainer">
            <input type="text" placeholder="Name" className="inputField" />
            <input type="email" placeholder="Email" className="inputField" />
            <input
              type="number"
              placeholder="Phone Number"
              className="inputField"
            />
            <textarea
              name=""
              id=""
              placeholder="Message.."
              className="textDescribe"
            ></textarea>
            <button className="SendBut">Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
