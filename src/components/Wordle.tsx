import { useState, useEffect } from "react";

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
    <div>
      <h1>Wordle</h1>
      <input
        type="text"
        value={arvaus}
        maxLength={5}
        onChange={(e) => setArvaus(e.target.value.toLowerCase())}
        placeholder="Arvaa sana"
        onKeyDown={(e) => {
            if(e.key === "Enter"){
                tarkistaSana();
            }
        }}
      />
      <button onClick={tarkistaSana}>Tarkista</button>
      <div>
        {palaute.map((item, index) => (
          <p key={index} style={{ color: item.tulos === "oikeassa"
            ? "#2c6e49"
            : item.tulos === "väärässä paikassa"
            ? "#b89b00"
            : "#6c757d", }}>
            {item.kirjain.toUpperCase()} - {item.tulos}
          </p>
        ))}
      </div>
      {voitto && <h2>Onneksi olkoon! Voitit pelin 🎉</h2>}
    </div>
  );
};

export default Wordle;
