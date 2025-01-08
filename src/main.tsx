import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import WordleApp from "./components/WordleApp"; // Vaihdettu Menu -> WordleApp
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WordleApp />
  </StrictMode>
);
