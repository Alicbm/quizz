import React from "react";
// import { generalCulture } from "../questions/generalCulture";
// import { GeneralCulture } from "../types";
import { CardQuestion } from "./CardQuestion";
import { CategoriesQuestions } from "./CategoriesQuestions";
import { Chronometer } from "./Chronometer";
import { Header } from "./Header";

export const Home = () => {

  return (
    <div>
      <Header />
      <CategoriesQuestions />
      {/* <Chronometer /> */}
      <CardQuestion />
    </div>
  );
};
