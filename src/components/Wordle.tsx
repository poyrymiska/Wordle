import { useState, useEffect } from "react";
import { NavItem } from "reactstrap";

const Wordle = () => {
  const [arvaus, setArvaus] = useState("");
  const [palaute, setPalaute] = useState<any[]>([]);
  const [voitto, setVoitto] = useState(false);

  // Aloitetaan peli backendistä
  useEffect(() => {
    const aloitaPeli = async () => {
      const vastaus = await fetch("http://127.0.0.1:5000/aloita-peli");
      await vastaus.json();
    };
    aloitaPeli();
  }, []);

  const tarkistaSana = async () => {
    if (arvaus.length !== 5) {
      alert("Sanan pitää olla 5 kirjainta pitkä!");
      return;
    }

    try {
      const vastaus = await fetch("http://127.0.0.1:5000/tarkista-arvaus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sana: arvaus }),
      });
      const data = await vastaus.json();
      setPalaute(data.palaute);
      setVoitto(data.voitto);
    } catch (error) {
      console.error("Virhe yhteydessä palvelimeen:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>ARVAA SANA</h1>
        <input
          type="text"
          value={arvaus}
          maxLength={5}
          onChange={(e) => setArvaus(e.target.value.toUpperCase())}
          placeholder="Arvaa sana"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              tarkistaSana();
            }
          }}
        />
        <button onClick={tarkistaSana}>Tarkista</button>
        <div>
          {palaute.map((item, index) => (
            <span
              key={index}
              style={{
                color:
                  item.tulos === "oikeassa"
                    ? "#2c6e49"
                    : item.tulos === "väärässä paikassa"
                      ? "#b89b00"
                      : "#6c757d",
              }}
            >
              {item.kirjain.toUpperCase() + " "}
            </span>
          ))}
        </div>
        {voitto && <h2>ONNEKSI OLKOON, SANA OLI {arvaus.toUpperCase()}</h2>}
      </div>
    </div>
  );
};

export default Wordle;
