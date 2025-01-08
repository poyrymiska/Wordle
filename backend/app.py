from flask import Flask, request, jsonify
import csv
import random
import os
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

csv_polku = os.path.join(os.path.dirname(__file__), "nykysuomensanalista2024.csv")
viisi_kirjaimiset_sanat = []

def lataa_5_kirjaimiset_sanat():
    global viisi_kirjaimiset_sanat
    try:
        with open(csv_polku, newline="", encoding="utf-8") as tiedosto:
            lukija = csv.reader(tiedosto, delimiter="\t")
            viisi_kirjaimiset_sanat = [rivi[0].strip().lower() for rivi in lukija if len(rivi[0].strip()) == 5]
    except FileNotFoundError:
        print("Tiedostoa ei löytynyt.")

lataa_5_kirjaimiset_sanat()

oikea_sana = None

@app.route("/aloita-peli", methods=["GET"])
def aloita_peli():
    global oikea_sana
    oikea_sana = random.choice(viisi_kirjaimiset_sanat)
    return jsonify({"viesti": f"Peli aloitettu! Oikea sana arvottu. " + oikea_sana})

@app.route("/tarkista-arvaus", methods=["POST"])
def tarkista_arvaus():
    global oikea_sana
    data = request.get_json()
    arvaus = data.get("sana", "").lower().strip()

    if not oikea_sana:
        return jsonify({"virhe": "Peliä ei ole aloitettu!"}), 400

    if len(arvaus) != 5:
        return jsonify({"virhe": "Sanan pitää olla 5 kirjainta pitkä"}), 400

    palaute = [{"kirjain": arvaus[i], "tulos": "väärin"} for i in range(5)]
    oikean_sanan_kirjaimet = list(oikea_sana)

    for i in range(5):
        if arvaus[i] == oikean_sanan_kirjaimet[i]:
            palaute[i]["tulos"] = "oikeassa"
            oikean_sanan_kirjaimet[i] = None

    for i in range(5):
        if palaute[i]["tulos"] == "väärin" and arvaus[i] in oikean_sanan_kirjaimet:
            palaute[i]["tulos"] = "väärässä paikassa"
            oikean_sanan_kirjaimet[oikean_sanan_kirjaimet.index(arvaus[i])] = None

    voitto = all([p["tulos"] == "oikeassa" for p in palaute])

    return jsonify({"palaute": palaute, "voitto": voitto})

if __name__ == "__main__":
    app.run(debug=True)
