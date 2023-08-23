import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* import App2 from "./App copy.js"; */
import "./index.css";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* function OcijeniFilm() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>Ovaj film ocijenili se ocjenom {movieRating} od 10.</p>
    </div>
  );
} */
