import React from "react";
import { AppContextType, GeneralCulture } from "../types";
import { generalCulture } from "../questions/generalCulture";

export const useState = (): AppContextType => {
  const [time, setTime] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(0);
  const [score, setScore] = React.useState<number>(0);
  const [sendAnswer, setSendAnswer] = React.useState<boolean>(false);
  const [categorySelected, setCategorySelected] = React.useState <GeneralCulture[]> (generalCulture);
  const [sendButton, setSendButton] = React.useState<boolean>(false);

  // const changeCategory = (category: GeneralCulture[]) =>
  //   setCategorySelected(category);

  const next = (): void => {
    document.querySelector(".active")?.classList.remove("active");
    if (categorySelected.length - 1 === position) {
      setPosition(position);
      setSendButton(true);
    } else {
      setTime(0);
      setPosition(position + 1);
      setSendAnswer(false);
    }
  };

  const handleSelect = (replay: boolean): void => {
    if (replay) {
      console.log("respueta correcta");
      setScore(score + 1);
    } else {
      console.log("respuesta incorrecta");
    }
  };

  const answerSelect = (id: string, response: boolean): void => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    handleSelect(response);
    setSendAnswer(true);
  };

  return {
    // time,
    // setTime,
    position,
    score,
    sendAnswer,
    categorySelected,
    setCategorySelected,
    sendButton,
    answerSelect,
    next,
  };
};
