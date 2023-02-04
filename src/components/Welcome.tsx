import React from "react";
import { AppContext } from "./AppContext";
import { EachCategory } from "./EachCategory";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

export const Welcome = () => {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(AppContext);

  dispatch({ type: 'position', payload: 0 })
  dispatch({ type: 'start', payload: false })

  // setPosition(0);
  // setStart(false)

  return (
    <div className="Welcome">
      <h1 className="Welcome-title">Hi there, welcome!</h1>
      <p className="Welcome-text">
        In this app you have access to 7 categories of diferent question. You
        have 2 minutes for complete each category, good luck.
      </p>
      <ul className="Welcome-list" onClick={() => navigate("/quiz")}>
        <EachCategory id="sports" name="Sports" clase="" />

        <EachCategory id="animals" name="Animals" clase="" />

        <EachCategory id="cities" name="Cities" clase="" />
        <EachCategory
          id="javascript"
          name="Javascript"
          clase=""
        />

        <EachCategory id="html" name="HTML" clase="" />

        <EachCategory id="css" name="CSS" clase="" />

        <EachCategory
          id="general-culture"        
          name="General Culture"
          clase="Welcome-list__last selected"
        />
      </ul>
    </div>
  );
};
