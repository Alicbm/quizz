import React from "react";
import { AppContext } from "./AppContext";
import { GeneralCulture } from "../types";
import { MdDoubleArrow } from "react-icons/md";
import "../styles/CardQuestion.css";

export function CardQuestion() {
  const {
    position,
    categorySelected,
    answerSelect,
    next,
    sendButton,
    redirectToAnswer,
  } = React.useContext(AppContext);

  const eachQuestion: GeneralCulture = categorySelected[position];
  
  const a = eachQuestion.optionA;
  const b = eachQuestion.optionB;
  const c = eachQuestion.optionC;
  const d = eachQuestion.optionD;

  return (
    <div className="CardQuestion">
      <h2 className="CardQuestion-question">{eachQuestion.ask}</h2>
      <p id="one" onClick={() => answerSelect("one", a.replay)}>
        {a.text}
      </p>
      <p id="two" onClick={() => answerSelect("two", b.replay)}>
        {b.text}
      </p>
      <p id="three" onClick={() => answerSelect("three", c.replay)}>
        {c.text}
      </p>
      <p id="four" onClick={() => answerSelect("four", d.replay)}>
        {d.text}
      </p>
      {!sendButton ? (
        <button className="CardQuestion-btn__next" onClick={next}>
          Next <MdDoubleArrow />
        </button>
      ) : (
        <button className="CardQuestion-btn__send" onClick={redirectToAnswer}>
          Send
        </button>
      )}
    </div>
  );
}
