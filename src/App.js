import "./styles.css";
import { useState } from "react";

export default function App() {
  // const cuisines = ["chinese" , "south-indian" , "asian"];
  var ResturantRecomendation = {
    chinese: [
      { name: "China bistro", rating: "4.5/5" },
      { name: "Veggie chinese", rating: "4/5" }
    ],
    southindian: [
      { name: "Spicy venue", rating: "4/5" },
      { name: "Simply south", rating: "5/5" }
    ],
    asian: [
      { name: "Shoyu", rating: "3.5/5" },
      { name: "Haikyu", rating: "3/5" }
    ]
  };

  var cuisine = Object.keys(ResturantRecomendation);
  var [selectedCuisine, setselectedCuisine] = useState("chinese");

  function handleOnclick(name) {
    setselectedCuisine(name);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "gray", padding: "2rem 2rem" }}>
        FooD Recomendations <span>🥘</span>
      </h1>
      <h3>select a cuisine</h3>
      <div>
        {cuisine.map((name) => {
          return (
            <button
              onClick={() => handleOnclick(name)}
              style={{ margin: "1rem", padding: "1rem", borderRadius: "1rem" }}
            >
              {name}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <ul>
        {ResturantRecomendation[selectedCuisine].map((resturant) => {
          return (
            <li
              key={resturant.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid ",
                width: "70%",
                margin: "1rem 8rem",
                alignItems: "center"
              }}
            >
              <div>{resturant.name}</div>
              <div>{resturant.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
