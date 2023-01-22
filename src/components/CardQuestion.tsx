import { GeneralCulture } from "../types";
import { useNavigate } from 'react-router-dom';

export function CardQuestion(props:any) {
  const navigate = useNavigate();

  const eachQuestion: GeneralCulture = props.categorySelected[props.position];
  const a = eachQuestion.optionA;
  const b = eachQuestion.optionB;
  const c = eachQuestion.optionC;
  const d = eachQuestion.optionD;
  
  const sendAsnwer = () => {
    navigate('/results')
  }

  return (
    <div className="App">
      <h2>{eachQuestion.ask}</h2>
      <p id="one" onClick={() => props.answerSelect("one", a.replay)}>
        {a.text}
      </p>
      <p id="two" onClick={() => props.answerSelect("two", b.replay)}>
        {b.text}
      </p>
      <p id="three" onClick={() => props.answerSelect("three", c.replay)}>
        {c.text}
      </p>
      <p id="four" onClick={() => props.answerSelect("four", d.replay)}>
        {d.text}
      </p>
      {
        !props.sendButton ? 
        <button onClick={props.next}>Next</button>
        :<button onClick={sendAsnwer}>Send</button>
      }
    </div>
  );
}
