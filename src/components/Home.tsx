import React from "react";
import { generalCulture } from "../questions/generalCulture";
import { GeneralCulture } from "../types";
import { CardQuestion } from "./CardQuestion";
import { CategoriesQuestions } from "./CategoriesQuestions";

export const Home = () => {

  return (
    <div>
      <CategoriesQuestions />
      <CardQuestion
        next={next}
        answerSelect={answerSelect}
        position={position}
        sendButton={sendButton}
        categorySelected={categorySelected}
      />
    </div>
  );
};
