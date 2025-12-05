import { useEffect, useState } from "react";
import Nav from "./Nav";
import "./Industries.css";
import PharmaceuticalSolutions from "../assets/PharmaceuticalSolutions.png";
import FoodInd from "../assets/FoodInd.png";
import specialchemicalInd from "../assets/specialchemicalInd.png";
import Footer from "./Footer";
import Loading from "./Loading";

export default function Industries() {
  const [isload, setIsload] = useState(true);

  useEffect(() => {
    // List of images used in this component
    const imagesToLoad = [PharmaceuticalSolutions, FoodInd, specialchemicalInd];

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
          <div className="IndustriesHeroSection">
            <h1>Industries We Serve</h1>
            <p>
              Delivering high‑quality, industry‑ready chemical solutions across
              global sectors.
            </p>
          </div>
          <div className="Keyindustriessection">
            <h1>Key Industries</h1>
            <p>
              We deliver high‑purity, compliant, and performance‑driven chemical
              products tailored for diverse global industries.
            </p>
            <div className="industryapllContainer">
              <div className="industryappBox">
                <img
                  src={PharmaceuticalSolutions}
                  alt="Pharmaceutical Solutions"
                  className="industriesImg"
                />
                <div className="industryDes">
                  <h2>Pharmaceutical Solutions</h2>
                  <p>
                    High‑purity ingredients, API intermediates, and
                    regulatory‑grade chemical solutions for pharma
                    manufacturing.
                  </p>
                </div>
              </div>
              <div className="industryappBox">
                <img
                  src={FoodInd}
                  alt="Pharmaceutical Solutions"
                  className="industriesImg"
                />
                <div className="industryDes">
                  <h2>Food & Beverage Ingredients</h2>
                  <p>
                    Food‑grade additives, preservatives, stabilizers, and
                    compliant ingredients for safe production.
                  </p>
                </div>
              </div>
              <div className="industryappBox">
                <img
                  src={specialchemicalInd}
                  alt="Pharmaceutical Solutions"
                  className="industriesImg"
                />
                <div className="industryDes">
                  <h2>Industrial & Specialty Chemicals</h2>
                  <p>
                    Performance chemicals for coatings, polymers, electronics,
                    cleaning, and specialty industrial uses.
                  </p>
                </div>
              </div>
              <div className="industryappBox">
                <img
                  src={PharmaceuticalSolutions}
                  alt="Pharmaceutical Solutions"
                  className="industriesImg"
                />
                <div className="industryDes">
                  <h2>Pharmaceutical Solutions</h2>
                  <p>
                    High‑purity ingredients, API intermediates, and
                    regulatory‑grade chemical solutions for pharma
                    manufacturing.
                  </p>
                </div>
              </div>
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
    position: "fixed" as const, // tells TS this exact string is valid
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
