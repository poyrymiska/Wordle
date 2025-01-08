import { useState } from "react";
import Menu from "./Menu";
import Wordle from "./Wordle";

const WordleApp = () => {
  const [peliKaynnissa, setPeliKaynnissa] = useState(false);

  const aloitaPeli = () => {
    setPeliKaynnissa(true);
  };

  return (
    <div className="app-container">
      {peliKaynnissa ? <Wordle /> : <Menu aloitaPeli={aloitaPeli} />}
    </div>
  );
};

export default WordleApp;
