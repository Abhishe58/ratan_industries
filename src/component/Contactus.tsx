import Nav from "./Nav";
import "./Contactus.css";
import Footer from "./Footer";
import { useEffect, useState, useRef } from "react";
import Loading from "./Loading";
import emailjs from "emailjs-com";

export default function Contactus() {
  const [isload, setIsload] = useState(true);

  useEffect(() => {
    // This page has no images — add a small delay to prevent flicker
    const timer = setTimeout(() => {
      setIsload(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qg0eiyo",
        "template_2h0kvrg",
        form.current,
        "neIh2Mt_gfywarO83"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );

    e.target.reset();
  };
  return (
    <>
      {isload && (
        <div style={styles.loadingcontainer}>
          <Loading />
        </div>
      )}
      {!isload && (
        <div style={styles.content}>
          <Nav />
          <div className="contactuscontainer">
            <div className="contactuscona">
              <h1>Contact Us</h1>
              <p>
                We’re here to support your needs with fast responses, dedicated
                expertise, and reliable customer service. <br /> Whether you
                need product information, pricing, samples, or custom
                formulations, our team is ready to assist.
              </p>
              <h3>Ratan Industries</h3>
              <a
                href="https://maps.app.goo.gl/zpBLSyWqMhU7RSLy7"
                className="plink"
              >
                60, Shubh Laxmi Estate, Dhanot, Kalol, Chhatral,
                Gandhinagar-382729, Gujarat, India
              </a>
              <a href="mailto:abc@gmail.com" className="plink">
                abc@gmail.com
              </a>
              <a href="https://wa.me/+919173481721" className="plink">
                +91 9173481721
              </a>
            </div>
            <div className="contactusconb">
              <form ref={form} onSubmit={sendEmail} className="formContainer">
                <input
                  type="text"
                  placeholder="Name"
                  className="inputField"
                  name="user_name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="inputField"
                  name="user_email"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="inputField"
                  name="user_phonenumber"
                />
                <textarea
                  placeholder="Message.."
                  className="textDescribe"
                  name="user_message"
                ></textarea>
                <button className="SendBut" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
const styles = {
  loadingcontainer: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  content: {
    opacity: 1,
  },
};
