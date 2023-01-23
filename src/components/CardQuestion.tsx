import React from "react";
import { useNavigate } from 'react-router-dom';
// import { useState } from "../hooks/useState";
import { AppContext } from "./AppContext";
import { GeneralCulture } from "../types";

export function CardQuestion() {
  const navigate = useNavigate();
  
  const 
    { 
      position, 
      categorySelected, 
      answerSelect,
      next,
      sendButton,
    } = React.useContext(AppContext);

    // const 
    // { 
    //   position, 
    //   categorySelected, 
    //   answerSelect,
    //   next,
    //   sendButton,
    // } = useState();

    
    const eachQuestion: GeneralCulture = categorySelected[position];
    const a = eachQuestion.optionA;
    const b = eachQuestion.optionB;
    const c = eachQuestion.optionC;
    const d = eachQuestion.optionD;
    
    const redirectToAnswer = () => {
      navigate('/results')
    }

  return (
    <div className="App">
      <h2>{eachQuestion.ask}</h2>
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
      {
        !sendButton ? 
        <button onClick={next}>Next</button>
        :<button onClick={redirectToAnswer}>Send</button>
      }
    </div>
  );
}
