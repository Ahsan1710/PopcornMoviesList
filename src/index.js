import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} color="blue" maxRating={10} />
//       <p>This movie has rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Avergae", "Good", "Best"]}
    />
    <StarRating maxRating={5} color="red" size={24} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
