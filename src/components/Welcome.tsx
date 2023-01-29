import React from "react";
import { AppContext } from "./AppContext";
import { sport } from "../questions/sport";
import { EachCategory } from "./EachCategory";
import { animals } from "../questions/animals";
import { cities } from "../questions/cities";
import { javascript } from "../questions/javascript";
import { html } from "../questions/html";
import { css } from "../questions/css";
import { generalCulture } from "../questions/generalCulture";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

export const Welcome = () => {
  const navigate = useNavigate();
  const { setPosition, setStart } = React.useContext(AppContext);

  setPosition(0);
  setStart(false)

  // React.useEffect(() => {
  //   getInfoApi()
  // }, [])

  return (
    <div className="Welcome">
      <h1 className="Welcome-title">Hi there, welcome!</h1>
      <p className="Welcome-text">
        In this app you have access to 7 categories of diferent question. You
        have 2 minutes for complete each category, good luck.
      </p>
      <ul className="Welcome-list" onClick={() => navigate("/quiz")}>
        <EachCategory id="sports" category={sport} name="Sports" clase="" />

        <EachCategory id="animals" category={animals} name="Animals" clase="" />

        <EachCategory id="cities" category={cities} name="Cities" clase="" />
        <EachCategory
          id="javascript"
          category={javascript}
          name="Javascript"
          clase=""
        />

        <EachCategory id="html" category={html} name="HTML" clase="" />

        <EachCategory id="css" category={css} name="CSS" clase="" />

        <EachCategory
          id="general-culture"
          category={generalCulture}
          name="General Culture"
          clase="Welcome-list__last selected"
        />
      </ul>
    </div>
  );
};
