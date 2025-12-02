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
import { useState } from "react";

export default function Herosection() {
  const [himg, setHimg] = useState(Heroseca);
  return (
    <>
      <Nav />
      <div className="Herosection">
        <div className="Herosubcona">
          <h1>
            High-Quality Chemical & Industrial Powders. Trusted Worldwide.
          </h1>
          <p>
            Delivering reliable, precision-engineered chemicals for
            pharmaceutical, food, and industrial applications — backed by strict
            quality control and dependable logistics. Our products meet
            international standards and support customers from R&D through
            large-scale production.
          </p>
          <div className="Hubconx">
            <p className="CtaBut">Request a Quote</p>
            <p className="CtaButb">Explore Products</p>
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
          <img src={Isoa} alt="ISO 9001:2015 Certified" className="IcoImg" />
          <p>ISO 9001:2015 Certified</p>
        </div>
        <div className="IcoBox">
          <img src={Icob} alt="ISO 9001:2015 Certified" className="IcoImg" />

          <p>GMP-Compliant Manufacturing</p>
        </div>
        <div className="IcoBox">
          <img src={Icoc} alt="ISO 9001:2015 Certified" className="IcoImg" />

          <p>In-House Testing & QC Labs</p>
        </div>
        <div className="IcoBox">
          <img src={Icod} alt="ISO 9001:2015 Certified" className="IcoImg" />

          <p>Consistent Batch Quality</p>
        </div>
        <div className="IcoBox">
          <img src={Icoe} alt="ISO 9001:2015 Certified" className="IcoImg" />

          <p>Fast Global Delivery</p>
        </div>
      </div>
      <div className="FeatureProductSect">
        <h1>Featured Products</h1>
        <p>
          Selected solutions from our portfolio — engineered for purity,
          performance and regulatory compliance. Each product is supported with
          technical documentation and batch traceability.
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
                <p className="CtaBut">Request Sample</p>
                <p className="CtaButb">View Details</p>
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
                <p className="CtaBut">Request Sample</p>
                <p className="CtaButb">View Details</p>
              </div>
            </div>
          </div>

          <div className="FpBox">
            <img src={Industrial} alt="" className="ProductImg" />

            <div className="FpBod">
              <p>
                High-performance powders designed for coatings, adhesives, and
                manufacturing.
              </p>
              <div className="FpBodySub">
                <p className="CtaBut">Request Sample</p>
                <p className="CtaButb">View Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="IndustriesweserveSection">
        <h1>Industries We Serve — Trusted Across Sectors</h1>
        <p>
          We support a broad range of industries with specialized powders and
          formulations. Our technical team partners with you to select the right
          materials and ensure regulatory compliance.
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
            <img src={Agriculture} alt="Pharmaceutical" className="InwsImg" />
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
            testing, and international regulatory standards. Every product is
            tested for purity, consistency, and safety. We maintain complete
            documentation and traceability for every batch.
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
    </>
  );
}
