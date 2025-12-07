import "./Herosection.css";
import Heroseca from "../assets/cellulose-powder.jpg";
import Herosecb from "../assets/Copper-Wire-and-Powder.jpg";
import Herosecc from "../assets/croscarmellose.jpg";
import Isoa from "../assets/iso-ico.png";
import Pharmaceutical from "../assets/Pharmaceutical-Grade-Powders.png";
import FoodGrade from "../assets/Food-Grade-Chemical-Powders.png";
import Industrial from "../assets/Industrial-&-Specialty-Chemicals.png";
import Pharmaceuticalweserve from "../assets/Pharmaceutical.png";
import IndustrialAppl from "../assets/IndustrialAppl.png";
import Agriculture from "../assets/Agriculture.png";
import Food from "../assets/Food-&-Beverage.png";
import Icob from "../assets/icob.png";
import Icoc from "../assets/icoc.png";
import Icod from "../assets/icod.png";
import Icoe from "../assets/icoe.png";
import Qualitycompliance from "../assets/qualitycompliance.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { FiSlack } from "react-icons/fi";

export default function Herosection() {
  const [himg, setHimg] = useState(Heroseca);

  const [isload, setIsload] = useState(true);

  useEffect(() => {
    // List all images used in your component
    const imagesToLoad = [
      Heroseca,
      Herosecb,
      Herosecc,
      Isoa,
      Icob,
      Icoc,
      Icod,
      Icoe,
      Pharmaceutical,
      FoodGrade,
      Industrial,
      Pharmaceuticalweserve,
      IndustrialAppl,
      Agriculture,
      Food,
      Qualitycompliance,
    ];

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
          <div className="Herosection">
            <div className="Herosubcona">
              <h1>
                High-Quality Chemical & Industrial Powders. Trusted Worldwide.
              </h1>
              <p>
                Delivering reliable, precision-engineered chemicals for
                pharmaceutical, food, and industrial applications — backed by
                strict quality control and dependable logistics. Our products
                meet international standards and support customers from R&D
                through large-scale production.
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
            <div className="Herosubconb">
              <img src={himg} alt="" className="HerosecImg" />
              <div className="ImgsContainer">
                <img
                  src={Heroseca}
                  alt=""
                  className="HerosecsubImga"
                  onClick={() => setHimg(Heroseca)}
                />
                <img
                  src={Herosecb}
                  alt=""
                  className="HerosecsubImgb"
                  onClick={() => setHimg(Herosecb)}
                />
                <img
                  src={Herosecc}
                  alt=""
                  className="HerosecsubImgc"
                  onClick={() => setHimg(Herosecc)}
                />
              </div>
            </div>
          </div>
          <div className="IcoSection">
            <div className="IcoBox">
              <img
                src={Isoa}
                alt="ISO 9001:2015 Certified"
                className="IcoImg"
              />
              <p>ISO 9001:2015 Certified</p>
            </div>
            <div className="IcoBox">
              <img
                src={Icob}
                alt="ISO 9001:2015 Certified"
                className="IcoImg"
              />

              <p>GMP-Compliant Manufacturing</p>
            </div>
            <div className="IcoBox">
              <img
                src={Icoc}
                alt="ISO 9001:2015 Certified"
                className="IcoImg"
              />

              <p>In-House Testing & QC Labs</p>
            </div>
            <div className="IcoBox">
              <img
                src={Icod}
                alt="ISO 9001:2015 Certified"
                className="IcoImg"
              />

              <p>Consistent Batch Quality</p>
            </div>
            <div className="IcoBox">
              <img
                src={Icoe}
                alt="ISO 9001:2015 Certified"
                className="IcoImg"
              />

              <p>Fast Global Delivery</p>
            </div>
          </div>
          <div className="scrollContainerxyz">
            <div className="scrollCotainer">
              <p className="scrollP">Cellullose</p>
              <p>
                <p className="xc">
                  <FiSlack className="scrollIco" />
                </p>
              </p>
              <p className="scrollP">Lactose</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Manufacturing</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Pharmaceutical</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Formulations</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Chemicals</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Purity</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Trusted</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Testing</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Quality</p>

              <p className="scrollP">Cellullose</p>
              <p>
                <p className="xc">
                  <FiSlack className="scrollIco" />
                </p>
              </p>
              <p className="scrollP">Lactose</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Manufacturing</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Pharmaceutical</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Formulations</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Chemicals</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Purity</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Trusted</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Testing</p>
              <p className="xc">
                <FiSlack className="scrollIco" />
              </p>
              <p className="scrollP">Quality</p>
            </div>
          </div>
          <div className="FeatureProductSect">
            <h1>Featured Products</h1>
            <p>
              Selected solutions from our portfolio — engineered for purity,
              performance and regulatory compliance. Each product is supported
              with technical documentation and batch traceability.
            </p>
            <div className="FpContainer">
              <div className="FpBox">
                <img src={Pharmaceutical} alt="" className="ProductImg" />
                <div className="FpBod">
                  <p>
                    High-purity excipients and ingredients meeting global
                    pharmacopeia standards.
                  </p>
                  <div className="FpBodySub">
                    <p>
                      <Link to="/contactus" className="CtaBut">
                        Request Sample
                      </Link>
                    </p>
                    <p>
                      <Link to="/products" className="CtaButb">
                        View Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="FpBox">
                <img src={FoodGrade} alt="" className="ProductImg" />
                <div className="FpBod">
                  <p>
                    Safe, certified additives and functional powders for food
                    processing.
                  </p>
                  <div className="FpBodySub">
                    <p>
                      <Link to="/contactus" className="CtaBut">
                        Request Sample
                      </Link>
                    </p>
                    <p>
                      <Link to="/products" className="CtaButb">
                        View Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="FpBox">
                <img src={Industrial} alt="" className="ProductImg" />

                <div className="FpBod">
                  <p>
                    High-performance powders designed for coatings, adhesives,
                    and manufacturing.
                  </p>
                  <div className="FpBodySub">
                    <p>
                      <Link to="/contactus" className="CtaBut">
                        Request Sample
                      </Link>
                    </p>
                    <p>
                      <Link to="/products" className="CtaButb">
                        View Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="IndustriesweserveSection">
            <h1>Industries We Serve — Trusted Across Sectors</h1>
            <p>
              We support a broad range of industries with specialized powders
              and formulations. Our technical team partners with you to select
              the right materials and ensure regulatory compliance.
            </p>
            <div className="InwsContainer">
              <div className="InwsBox">
                <img
                  src={Pharmaceuticalweserve}
                  alt="Pharmaceutical"
                  className="InwsImg"
                />
                <h3>Pharmaceutical</h3>
                <p>Excipients, binders and fillers for drug formulations.</p>
              </div>
              <div className="InwsBox">
                <img src={Food} alt="Pharmaceutical" className="InwsImg" />
                <h3>Food & Beverage</h3>
                <p>Safe additives, stabilizers and functional ingredients.</p>
              </div>

              <div className="InwsBox">
                <img
                  src={IndustrialAppl}
                  alt="Pharmaceutical"
                  className="InwsImg"
                />
                <h3>Industrial Applications</h3>
                <p>Coatings, lubricants, polymers and cleaning agents.</p>
              </div>
              <div className="InwsBox">
                <img
                  src={Agriculture}
                  alt="Pharmaceutical"
                  className="InwsImg"
                />
                <h3>Agriculture</h3>
                <p>Fertilizer components and agrochemical powders.</p>
              </div>
            </div>
          </div>
          <div className="qualitySection">
            <div className="qualityBoxa">
              <img
                src={Qualitycompliance}
                alt="Quality & Compliance"
                className="QualitycomplianceImg"
              />
            </div>
            <div className="qualityBoxb">
              <h1>Quality & Compliance</h1>
              <p>
                Our manufacturing follows strict quality processes, advanced
                testing, and international regulatory standards. Every product
                is tested for purity, consistency, and safety. We maintain
                complete documentation and traceability for every batch.
              </p>
              <div className="qualityBox">
                <p className="qualityminBox">
                  ISO 9001:2015 Quality Management System
                </p>
                <p className="qualityminBox">GMP-Compliant Production</p>
                <p className="qualityminBox">Advanced QC Laboratory</p>
                <p className="qualityminBox">
                  SDS, TDS & COA documentation provided
                </p>
                <p className="qualityminBox">
                  Batch Traceability — Timestamps & Lot IDs
                </p>
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
