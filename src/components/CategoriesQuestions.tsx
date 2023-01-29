import React from "react";
import { EachCategory } from "./EachCategory";
import { ContacMe } from "./ContacMe";
import "../styles/CategoryQuestions.css";

export function CategoriesQuestions() {

  return (
    <div className="CategoriesQuestions unshow">
      <div className="CategoriesQuestions-container">
        <ul className="CategoriesQuestions-container__list">
          <h2 className="CategoriesQuestion-container__title">Categories</h2>
          <EachCategory
            id="general-culture"
            name="General Culture"
            clase=""
          />
          <EachCategory id="sports" name="Sports" clase="" />
          <EachCategory
            id="animals"
            name="Animals"
            clase=""
          />
          <EachCategory id="cities" name="Cities" clase="" />
          <h3 className="CategoriesQuestion-list__subtitle">Web Development</h3>
          <EachCategory
            id="javascript"
            name="Javascript"
            clase=""
          />
          <EachCategory id="html" name="HTML" clase="" />
          <EachCategory id="css" name="CSS" clase="" />
        </ul>
        <ContacMe />
      </div>
    </div>
  );
}
