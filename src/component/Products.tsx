import Nav from "./Nav";
import "./Products.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import WhiteLactosePowder from "../assets/WhiteLactosePowder.png";
import LactoseMonohydratePowder from "../assets/LactoseMonohydratePowder.png";
import CocoaPowder from "../assets/Cocoa Powder.png";
import sls from "../assets/sls.avif";
import galatin from "../assets/galatin.png";
import cellulose from "../assets/cellulose.webp";
import PolyanionicCellulosePolymer from "../assets/PolyanionicCellulosePolymer.png";
import TitaniumDioxidePowder from "../assets/TitaniumDioxidePowder.png";
import WheyProteinPowder from "../assets/WheyProteinPowder.png";
import WireDrawingPowder from "../assets/WireDrawingPowder.png";
import CarboxymethylCellulosePowder from "../assets/CarboxymethylCellulosePowder.png";
import MagnesiumStearatePowder from "../assets/MagnesiumStearatePowder.png";
import MicrocrystallineCellulosePowder from "../assets/MicrocrystallineCellulosePowder.png";
import CroscarmelloseSodium from "../assets/CroscarmelloseSodium.png";
import XanthanGumPowder from "../assets/XanthanGumPowder.png";
import SodiumStarchGlycolatePowder from "../assets/SodiumStarchGlycolatePowder.png";
import Footer from "./Footer";
import Loading from "./Loading";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  describe: { label: string; value: string }[];
};

export default function Products() {
  const [isload, setIsload] = useState(true);

  useEffect(() => {
    const imageUrls = [
      WhiteLactosePowder,
      LactoseMonohydratePowder,
      CocoaPowder,
      sls,
      galatin,
      cellulose,
      PolyanionicCellulosePolymer,
      TitaniumDioxidePowder,
      WheyProteinPowder,
      WireDrawingPowder,
      CarboxymethylCellulosePowder,
      MagnesiumStearatePowder,
      MicrocrystallineCellulosePowder,
      CroscarmelloseSodium,
      XanthanGumPowder,
      SodiumStarchGlycolatePowder,
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          setIsload(false);
        }
      };
    });
  }, []);
  const products = [
    {
      id: 1,
      name: "White Lactose Powder",
      image: WhiteLactosePowder,
      price: "160/kg",
      describe: [
        { label: "Packaging Size", value: "25 kg" },
        { label: "Form", value: "Powder" },
        {
          label: "Usage/Application",
          value: "Food And Pharmaceutical Industries",
        },
        { label: "Color", value: "White" },
        {
          label: "Composition",
          value: "Minimum 99.2% Lactose and <0.3% Minerals and Protein",
        },
        { label: "Molecular Formula", value: "C12H22O11" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 2,
      name: "Lactose Monohydrate Powder",
      image: LactoseMonohydratePowder,
      price: "160/kg",
      describe: [
        { label: "Packaging Size", value: "25 kg" },
        { label: "Usage/Application", value: "Dairy Product" },
      ],
    },
    {
      id: 3,
      name: "Dark Cocoa Powder",
      image: CocoaPowder,
      price: "400/kg",
      describe: [
        { label: "Form", value: "Powder" },
        { label: "Flavor", value: "Cocoa" },
        { label: "Shelf Life", value: "24 Months" },
        { label: "Eggless", value: "Yes" },
        {
          label: "Usage/Application",
          value: "Bakery, Beverage, Coating, Ice Cream, Confectionery",
        },
        { label: "Color", value: "Brown" },
      ],
    },
    {
      id: 4,
      name: "Alkalized Cocoa Powder",
      image: CocoaPowder,
      price: "400/kg",
      describe: [
        { label: "Storage Instruction", value: "Time Limit" },
        { label: "Packaging Size", value: "25 kg" },
      ],
    },
    {
      id: 5,
      name: "Sodium Lauryl Sulphate",
      image: sls,
      price: "360/kg",
      describe: [
        { label: "Packaging Size", value: "20kg" },
        { label: "Purity", value: "99% Pure" },
        { label: "Grade Standard", value: "Industrial Grade" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Physical State", value: "Powder" },
      ],
    },
    {
      id: 6,
      name: "Gelatin",
      image: galatin,
      price: "610/kg",
      describe: [{ label: "Packaging Size", value: "50kg" }],
    },
    {
      id: 7,
      name: "Alpha Cellulose Powder",
      image: cellulose,
      price: "80/kg",
      describe: [
        { label: "Form", value: "Powder" },
        { label: "Usages", value: "Supports overall health and nutrition" },
        { label: "Color", value: "White" },
        { label: "Product Shelf Life", value: "5 Year" },
        { label: "Molecular Formula", value: "C14H26O11" },
      ],
    },
    {
      id: 8,
      name: "Polyanionic Cellulose Polymer",
      image: PolyanionicCellulosePolymer,
      price: "130/kg",
      describe: [
        { label: "Form", value: "Powder" },
        {
          label: "Usages",
          value: "Maintains viscosity and stability in drilling fluids",
        },
        { label: "Physical State", value: "Powder" },
        { label: "Grade Standard", value: "Technical Grade" },
        { label: "Molecular Formula", value: "(C6H10O5)n" },
        { label: "Packaging Type", value: "25 kg" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 9,
      name: "Titanium Dioxide Powder",
      image: TitaniumDioxidePowder,
      price: "220/kg",
      describe: [
        { label: "Form", value: "Powder" },
        {
          label: "Usages",
          value: "Paper, Ceramics, Rubber, Paints, Inks, Cosmetics",
        },
        { label: "Physical State", value: "Powder" },
        { label: "Color", value: "White" },
        { label: "Molecular Formula", value: "TiO2" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 10,
      name: "Whey Protein Powder",
      image: WheyProteinPowder,
      price: "900/kg",
      describe: [
        { label: "Pack Size", value: "1 Kg" },
        { label: "Usages", value: "Supports muscle growth and recovery" },
        { label: "Flavour", value: "Vanilla" },
        { label: "Diet Type", value: "Vegetarian" },
        { label: "Form", value: "Powder" },
        { label: "Color", value: "White" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 11,
      name: "Wire Drawing Powder",
      image: WireDrawingPowder,
      price: "60/kg",
      describe: [{ label: "Pack Size", value: "50 Kg" }],
    },
    {
      id: 12,
      name: "Carboxymethyl Cellulose Powder",
      image: CarboxymethylCellulosePowder,
      price: "150/kg",
      describe: [
        { label: "Usage", value: "Hand Creams and Lotions" },
        { label: "Color", value: "White" },
        { label: "Form", value: "Powder" },
        { label: "Molecular Formula", value: "C8H15NaO8" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 13,
      name: "Magnesium Stearate Powder",
      image: MagnesiumStearatePowder,
      price: "190/kg",
      describe: [
        { label: "Usage", value: "Prevents capsule ingredients from sticking" },
        { label: "Color", value: "White" },
        { label: "Form", value: "Powder" },
        { label: "Molecular Formula", value: "C36H70MgO4" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 14,
      name: "Microcrystalline Cellulose Powder",
      image: MicrocrystallineCellulosePowder,
      price: "135/kg",
      describe: [
        { label: "Usage", value: "Anti-caking, emulsifier, fat substitute" },
        { label: "Color", value: "White" },
        { label: "Purity", value: "99%" },
        { label: "Molecular Formula", value: "(C6H10O5)n" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 15,
      name: "Croscarmellose Sodium",
      image: CroscarmelloseSodium,
      price: "500/kg",
      describe: [
        { label: "Usage", value: "Pharma disintegrant" },
        { label: "Color", value: "White" },
        { label: "Form", value: "Powder" },
        { label: "Purity", value: "99%" },
        { label: "Molecular Formula", value: "C8H16NaO8" },
        { label: "Shelf Life", value: "5 Year" },
      ],
    },
    {
      id: 16,
      name: "Xanthan Gum Powder",
      image: XanthanGumPowder,
      price: "320/kg",
      describe: [
        { label: "Color", value: "Golden White" },
        { label: "Packaging Type", value: "HDPE Bag" },
        { label: "Form", value: "Powder" },
        { label: "Packaging Size", value: "25 Kg" },
      ],
    },
    {
      id: 17,
      name: "Sodium Starch Glycolate Powder",
      image: SodiumStarchGlycolatePowder,
      price: "130/kg",
      describe: [
        { label: "Color", value: "White" },
        { label: "Usage", value: "Disintegrant in tablets/capsules" },
        { label: "Form", value: "Powder" },
        { label: "Molecular Formula", value: "(C2H4O3)x-(Na)x" },
      ],
    },
  ];

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  // 📌 Live typing suggestion
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setQuery("");
      setSuggestions([]);
      setShowSuggestions(false);
      setHasSearched(false);
      return;
    }

    const matched = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matched);
    setShowSuggestions(true);
  };

  // 📌 When user clicks on suggestion
  const handleSuggestionClick = (product: Product) => {
    setQuery(product.name);
    setFilteredProducts([product]);
    setShowSuggestions(false);
    setHasSearched(true); // show results
  };

  // 📌 Search button click
  const handleSearchClick = () => {
    const matched = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(matched);
    setShowSuggestions(false);
    setHasSearched(true); // show results
  };

  return (
    <>
      {isload && (
        <div style={styles.loadingcontainer}>
          <Loading />
        </div>
      )}

      {!isload && (
        <>
          <Nav />
          <div className="ProductHerosection">
            <div className="heroconxa">
              <h1>High-Performance Chemical Solutions</h1>
              <p>
                Engineered for reliability, purity, and industry-grade
                performance.
              </p>
              <div className="searchContainer">
                <div className="searchBoxa">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="productInput"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                  />

                  <button className="SearchBut" onClick={handleSearchClick}>
                    <FaSearch className="Searchcon" />
                  </button>
                </div>
                <div className="searchBoxb">
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="suggestionBox">
                      {suggestions.map((product: Product) => (
                        <li
                          key={product.id}
                          className="suggestionItem"
                          onClick={() => handleSuggestionClick(product)}
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            {hasSearched && (
              <>
                <div className="productContainerx">
                  {filteredProducts.length > 0 ? (
                    <>
                      {filteredProducts.map((item: Product) => (
                        <div className="productBox" key={item.id}>
                          <div className="productImg">
                            <img src={item.image} className="ProductImage" />
                          </div>

                          <div className="prductBody">
                            <h1>{item.name}</h1>
                            <p className="productPrice">₹ {item.price}</p>

                            <div className="productDetail">
                              {item.describe.map((desc, index) => (
                                <p key={index}>
                                  {desc.label}: {desc.value}
                                </p>
                              ))}
                            </div>

                            <a>
                              <Link to="/contactus" className="InquiryButton">
                                Inquiry Now
                              </Link>
                            </a>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No products found</p>
                  )}
                </div>
              </>
            )}
<<<<<<< HEAD
            
=======
>>>>>>> fc83f114e447d3d2093ea4aa8bb3d2c1b4303d7d
          </div>
          <h2 className="prodio">Products</h2>
          <div className="productContainer">
            {products.map((item: Product) => (
              <div className="productBox">
                <div className="productImg">
                  <img src={item.image} className="ProductImage" />
                </div>
                <div className="prductBody">
                  <h1>{item.name}</h1>
                  <p className="productPrice">₹ {item.price}</p>
                  <div className="productDetail">
                    {item.describe.map((desc, index) => (
                      <p key={index}>
                        {desc.label}: {desc.value}
                      </p>
                    ))}
                  </div>
                  <a>
                    <Link to="/contactus" className="InquiryButton">
                      Inquiry Now
                    </Link>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
const styles = {
<<<<<<< HEAD
  loadingcontainer: {
    position: "fixed",
=======
   loadingcontainer: {
    position: "fixed" as const, // tells TS this exact string is valid
>>>>>>> fc83f114e447d3d2093ea4aa8bb3d2c1b4303d7d
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
};
