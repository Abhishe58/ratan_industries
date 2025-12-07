import Nav from "./Nav";
import "./Aboutus.css";
import Aboutherosec from "../assets/Aboutherosec.png";
import aboutstory from "../assets/aboutstory.avif";
import krishna from "../assets/krishna.jpg";
import { FiSquare } from "react-icons/fi";
import { SiTarget } from "react-icons/si";
import { GiGooeyEyedSun } from "react-icons/gi";
import { FaScaleBalanced } from "react-icons/fa6";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Logo from "../assets/logo.png";

export default function Aboutus() {
  const [isload, setIsload] = useState(true);

  useEffect(() => {
    // all images used in this component
    const imagesToLoad = [Aboutherosec, aboutstory, krishna];

    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setIsload(false);
        }
      };
    });
  }, []);
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
          <div className="Aboutherosection">
            <div className="heroseccona">
              <h1>About Us</h1>
              <p>
                Driven by innovation, quality, and a commitment to excellence in
                chemical manufacturing.
              </p>
              <div className="Hubconx">
                <p className="CtaBut">Meet the Team</p>
                <p className="CtaButb">Certification</p>
              </div>
            </div>
            <div className="heroseccona">
              <img
                src={Aboutherosec}
                alt="AbOur Commitment to Qualityou"
                className="HeroImg"
              />
              <h2>Our Commitment to Quality</h2>
              <p>
                We combine modern manufacturing, in-house testing, and stringent
                process controls to deliver products our customers rely on.
              </p>
            </div>
          </div>
          <div className="Storysectiton">
            <div className="storycona">
              <h1>Our Story</h1>
              <p>
                We began with a mission to deliver reliable, high-quality
                chemical and industrial powders to businesses across
                pharmaceutical, food, and industrial sectors. Over the years, we
                have expanded our capabilities, upgraded our manufacturing
                technologies, and built a strong reputation for consistency,
                technical expertise, and customer-first service.
                <br />
                Our approach blends scientific rigour with operational
                excellence — from R&D to scale-up — ensuring our partners
                receive safe, compliant, and high-performance materials.
              </p>
            </div>
            <div className="storyconb">
              <img src={aboutstory} alt="" className="storyImg" />
            </div>
          </div>
          <div className="Ourjourysection">
            <h1>Our Journey</h1>
            <p>Milestones that shaped our growth and capabilities.</p>
            <div className="ourseccontainer">
              <div className="oursecbox">
                <FiSquare className="squa" />
                <div className="oursecminbox">
                  <h3>Founded</h3>
                  <p>
                    Establishment of core manufacturing facility with a focus on
                    safety and quality.
                  </p>
                </div>
              </div>
              <div className="oursecbox">
                <FiSquare className="squa" />
                <div className="oursecminbox">
                  <h3>Expansion</h3>
                  <p>
                    Increased product portfolio and QC capabilities to serve
                    wider industries.
                  </p>
                </div>
              </div>
              <div className="oursecbox">
                <FiSquare className="squa" />
                <div className="oursecminbox">
                  <h3>Quality Upgrade</h3>
                  <p>
                    Achieved ISO certification and aligned processes with GMP
                    standards.
                  </p>
                </div>
              </div>
              <div className="oursecbox">
                <FiSquare className="squa" />
                <div className="oursecminbox">
                  <h3>Global Reach</h3>
                  <p>
                    Growth in exports, logistics partnerships, and international
                    clientele.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Visionsection">
            <h1>Mission, Vision & Values</h1>
            <p>
              Our guiding principles define how we operate, innovate, and
              partner with customers.
            </p>
            <div className="visoncont">
              <div className="visonBox">
                <h3>
                  <SiTarget />
                  Mission
                </h3>
                <p>
                  Deliver high-quality, compliant, and reliable chemical
                  products that support safe and efficient industrial processes.
                </p>
              </div>
              <div className="visonBox">
                <h3>
                  <GiGooeyEyedSun />
                  Vision
                </h3>
                <p>
                  To become a global leader in innovative and sustainable
                  chemical manufacturing.
                </p>
              </div>
              <div className="visonBox">
                <h3>
                  <FaScaleBalanced />
                  Values
                </h3>
                <p>
                  Quality, Customer-Centricity, Integrity, Innovation,
                  Sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="Leadersection">
            <h1>Our Leadership</h1>
            <p>
              Experienced leadership driving quality, safety and continuous
              improvement.
            </p>
            <div className="LEadercontainer">
              <img src={Logo} alt="" className="LeaderImg" />
              <h2>Dharmash Mevada — CEO</h2>
              <p>
                Experienced in chemical manufacturing, quality assurance, and
                operational excellence.
              </p>
            </div>
          </div>
          <div className="Exploreproductsection">
            <h1>Explore Our Products or Get in Touch</h1>
            <p>
              Our technical sales team can provide specification sheets,
              samples, and custom formulation guidance.
            </p>
            <div className="Hubconx">
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
