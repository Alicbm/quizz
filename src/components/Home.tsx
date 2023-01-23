import React from "react";
import { Header } from "./Header";
import { CardQuestion } from "./CardQuestion";
import { CategoriesQuestions } from "./CategoriesQuestions";
import { Chronometer } from "./Chronometer";
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Home-main">
        <CategoriesQuestions />
        <Chronometer />
        <CardQuestion />
      </div>
      <p className="Home-created">Created by Alic Barandica 🖐🏾.</p>
    </div>
  );
};
