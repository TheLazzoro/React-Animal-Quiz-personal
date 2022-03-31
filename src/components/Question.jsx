import React from "react";
import AnimalButton from "./AnimalButton";
import Image from "./Image";
import PropTypes from "prop-types";
import NextButton from "./NextButton";

const Question = ({ animals, onNext }) => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  let arr = animals.map((element) => [element["name"], element["image_link"]]);

  // hack
  if (arr.length == 0) {
    return;
  }

  // Click an answer
  const onClick = (id) => {
    const lblQuestion = document.getElementById("lblQuestion");

    if (id == randomIndex) {
      lblQuestion.innerHTML = "Correct!";
    } else {
      const name = animals[randomIndex].name;
      lblQuestion.innerHTML = `Wrong: The answer is '${name}'`;
    }

    // disable buttons
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById("btn" + i);
      btn.disabled = true;
      console.log(btn);
    }
    
    const btnNext = document.getElementById("btnNext");
    btnNext.style.display = "";
  };

  const imageUrl = animals[randomIndex]["image_link"];

  return (
    <div>
      <Image imageURL={imageUrl}></Image>
      <p>
        <label id="lblQuestion" className="fontGlobal">
          What animal is this?
        </label>
      </p>
      {animals.map((element, index) => {
        return (
          <AnimalButton
            animal={element}
            index={index}
            onClick={onClick}
          ></AnimalButton>
        );
      })}
      <p>
        <NextButton onNext={() => onNext()}></NextButton>
      </p>
    </div>
  );
};

Question.propTypes = {
  animal: PropTypes.object,
  onNext: PropTypes.func,
};

export default Question;