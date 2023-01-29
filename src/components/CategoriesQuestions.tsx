import React from "react";
import { EachCategory } from "./EachCategory";
// import { generalCulture } from "../questions/generalCulture";
// import { sport } from "../questions/sport";
// import { animals } from "../questions/animals";
// import { cities } from "../questions/cities";
// import { javascript } from "../questions/javascript";
// import { html } from "../questions/html";
// import { css } from "../questions/css";
import { ContacMe } from "./ContacMe";
import "../styles/CategoryQuestions.css";
import { AppContext } from "./AppContext";

export function CategoriesQuestions() {
  const { categorySelected } = React.useContext(AppContext);

  return (
    <div className="CategoriesQuestions unshow">
      <div className="CategoriesQuestions-container">
        <ul className="CategoriesQuestions-container__list">
          <h2 className="CategoriesQuestion-container__title">Categories</h2>
          <EachCategory
            id="general-culture"
            category={categorySelected}
            name="General Culture"
            clase=""
          />
          <EachCategory id="sports" category={categorySelected} name="Sports" clase="" />
          <EachCategory
            id="animals"
            category={categorySelected}
            name="Animals"
            clase=""
          />
          <EachCategory id="cities" category={categorySelected} name="Cities" clase="" />
          <h3 className="CategoriesQuestion-list__subtitle">Web Development</h3>
          <EachCategory
            id="javascript"
            category={categorySelected}
            name="Javascript"
            clase=""
          />
          <EachCategory id="html" category={categorySelected} name="HTML" clase="" />
          <EachCategory id="css" category={categorySelected} name="CSS" clase="" />
        </ul>
        <ContacMe />
      </div>
    </div>
  );
}
