import React from "react";
import { AppContextType, GeneralCulture, Props } from "../types";
import { generalCulture } from "../questions/generalCulture";
import { useNavigate } from "react-router-dom";

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export function ContainerApp({ children }: Props) {
  const navigate = useNavigate();

  const [general, setGeneral] = React.useState(0);
  const [sport, setSport] = React.useState(0);
  const [animals, setAnimals] = React.useState(0);
  const [cities, setCities] = React.useState(0);
  const [html, setHtml] = React.useState(0);
  const [js, setJs] = React.useState(0);
  const [css, setCss] = React.useState(0);

  const [start, setStart] = React.useState<boolean>(false);
  const [nameCategory, setNameCategory] =
    React.useState<string>("General Culture");
  const [position, setPosition] = React.useState<number>(0);
  const [categorySelected, setCategorySelected] =
    React.useState<GeneralCulture[]>(generalCulture);
  const [sendButton, setSendButton] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<boolean>(false);

  // para que no se envia mas de una vez la misma respuesta
  const [score, setScore] = React.useState<boolean>(true);

  const handleSelect = (replay: boolean): void => {
    if (replay && score) {
      switch (nameCategory) {
        case "General Culture":
          return setGeneral(general + 1);
        case "Sport":
          return setSport(sport + 1);
        case "Animals":
          return setAnimals(animals + 1);
        case "Cities":
          return setCities(cities + 1);
        case "Javascript":
          return setJs(js + 1);
        case "HTML":
          return setHtml(html + 1);
        default:
          return setCss(css + 1);
      }
    }
  };

  const answerSelect = (id: string, res: boolean): void => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    setScore(true);
    setResponse(res);
  };

  const next = (): void => {
    handleSelect(response);
    setScore(false);

    document.querySelector(".active")?.classList.remove("active");
    if (categorySelected.length - 2 === position) {
      setSendButton(true);
      setPosition(position + 1);
    } else {
      setPosition(position + 1);
    }
  };

  const categorySelectedModal = (
    id: string,
    category: GeneralCulture[]
  ): void => {
    position > 0
      ? alert("For choose another category you must finish this")
      : document.querySelector(".CategoriesQuestions")?.classList.add("unshow");

    setNameCategory(id);
    setCategorySelected(category);
  };

  const redirectToAnswer = () => {
    handleSelect(response);
    navigate("/results");
    setPosition(0);
    setSendButton(false);
    setStart(false);
    setResponse(false);
  };

  const resetValues = () => {
    setScore(true);
    setStart(true);

    switch (nameCategory) {
      case "General Culture":
        return setGeneral(0);
      case "Sport":
        return setSport(0);
      case "Animals":
        return setAnimals(0);
      case "Cities":
        return setCities(0);
      case "Javascript":
        return setJs(0);
      case "HTML":
        return setHtml(0);
      default:
        setCss(0);
    }
  };

  return (
    <AppContext.Provider
      value={{
        general,
        sport,
        animals,
        cities,
        html,
        js,
        css,

        start,
        setStart,
        nameCategory,
        setPosition,
        position,
        redirectToAnswer,
        categorySelected,
        sendButton,
        answerSelect,
        next,
        categorySelectedModal,
        resetValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
