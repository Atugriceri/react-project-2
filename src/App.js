import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import CardComp from "./components/Card";
import CAT_LIST from "./data/cat_list";
import Footer from "./components/Footer";

export default function App() {
  const CatList = CAT_LIST.map(item => (
    <div className={`col-md-4 mb-2 mt-5`}>
      <CardComp data={item} />
    </div>
  ));
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row mx-5">{CatList}</div>
      <Footer />
    </div>
  );
}
