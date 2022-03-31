import React, { useState, useEffect, useRef } from "react";
import Question from "./components/Question";

export default function App() {
  const URL = "https://zoo-animal-api.herokuapp.com/animals/rand/4";
  const [animals, setAnimals] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
  };

  useEffect(async () => {
    const animals = await getData();
    setAnimals(animals);
  }, []);

  const onNext = async () => {
    const image = document.getElementById("imageToDisplay");
    const btnNext = document.getElementById("btnNext");
    const label = document.getElementById("lblQuestion");
    image.src = '';
    btnNext.style.display = "none";
    label.innerHTML = "What animal is this?";

    // enable buttons
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById("btn" + i);
      btn.disabled = false;
      console.log(btn);
    }

    const animals = await getData();
    setAnimals(animals);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Question animals={animals} onNext={onNext} />
      </header>
    </div>
  );
}
