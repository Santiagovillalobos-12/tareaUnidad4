import React from "react";
import "./App.css";
//components
import Header from "./components/header/header";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
//images
import Portada from "../src/img/portada.jpg";
import Celulares from "../src/img/celulares.jpg";
import Drones from "../src/img/drones.jpg";
import Sonido from "../src/img/sonido.jpg";
import Video from "../src/img/video.jpg";
import Perifericos from "../src/img/perifericos.jpg";
 
import Maps from "./components/googlemaps/Maps";

function App() {
  const itemsCards = [
    { title: "Celulares", image: Celulares },
    { title: "Drones", image: Drones },
    { title: "Sonido", image: Sonido },
    { title: "Video", image: Video },
    { title: "Perifericos", image: Perifericos },
  ];

  return (
    <div className="App">
      <Header />
      <section className="containerBoxesCategories">
        <h1>!Bienvenido a tu portal de tecnologia¡</h1>
        <div className="containerSlider">
          <img src={Portada} alt=""></img>
        </div>

        <section className="FormAdd">
          <h3>Publicar</h3>
          <div>
            <input type="text"></input>
            <button>Buscar</button>
          </div>
        </section>

        {itemsCards.map((item, idx) => (
          <Card titulo={item.title} image={item.image} key={idx}></Card>
        ))}
      </section>
      <div className="main-wrapper">
        <Maps/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
