import React from "react";
import { EachCategory } from "./EachCategory";
import { generalCulture } from "../questions/generalCulture";
import { sport } from "../questions/sport";
import { animals } from "../questions/animals";
import { cities } from "../questions/cities";
import { javascript } from "../questions/javascript";
import { html } from "../questions/html";
import { css } from "../questions/css";
import { ContacMe } from "./ContacMe";
import "../styles/CategoryQuestions.css";


export function CategoriesQuestions() {

  return (
    <div className="CategoriesQuestions unshow">
      <div className="CategoriesQuestions-container">
        <ul className="CategoriesQuestions-container__list">
        <h2 className="CategoriesQuestion-container__title">Categories</h2>
          <EachCategory
            id='General Culture'
            category={generalCulture}
            name='General Culture'
            clase="selected"
          />
          <EachCategory 
            id='Sport'
            category={sport}
            name='Sports'
            clase=""
          />
          <EachCategory 
            id='Animals'
            category={animals}
            name='Animals'
            clase=""
          />
          <EachCategory 
            id='Cities'
            category={cities}
            name='Cities'
            clase=""
          />
          <h3 className="CategoriesQuestion-list__subtitle">Web Development</h3>
          <EachCategory 
            id='Javascript'
            category={javascript}
            name='Javascript'
            clase=""
          />
          <EachCategory 
            id='Html'
            category={html}
            name='Html'
            clase=""
          />
          <EachCategory 
            id='Css'
            category={css}
            name='Css'
            clase=""
          />
        </ul>
        <ContacMe />
      </div>
    </div>
  );
}