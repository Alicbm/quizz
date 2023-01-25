import React from "react";
import { AppContextType, GeneralCulture, Props } from "../types";
import { generalCulture } from "../questions/generalCulture";
import { useNavigate } from "react-router-dom";
// import { reducerCategories } from "../reducer/reducer";

// const INITIAL_STATE: InitialState = {
//   generalculture: 0,
//   sport: 0,
//   animals: 0,
//   cities: 0,
//   html: 0,
//   js: 0,
//   css: 0,
// };

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
  // const [score, setScore] = React.useState<number>(0);
  const [sendAnswer, setSendAnswer] = React.useState<boolean>(false);
  const [categorySelected, setCategorySelected] =
    React.useState<GeneralCulture[]>(generalCulture);
  const [sendButton, setSendButton] = React.useState<boolean>(false);

  const next = (): void => {
    document.querySelector(".active")?.classList.remove("active");
    if (categorySelected.length - 1 === position) {
      setSendButton(true);
      setPosition(position);
    } else {
      setPosition(position + 1);
      setSendAnswer(false);
    }
  };

  const handleSelect = (replay: boolean): void => {
    if (replay) {
      switch (nameCategory) {
        case "General Culture":
          setGeneral(general + 1);
          break;
        case "Sport":
          setSport(sport + 1);
          break;
        case "Animals":
          setAnimals(animals + 1);
          break;
        case "Cities":
          setCities(cities + 1);
          break;
        case "Javascript":
          setJs(js + 1);
          break;
        case "HTML":
          setHtml(html + 1);
          break;
        default:
          setCss(css + 1);
          break;
      }
    }
  };

  const answerSelect = (id: string, response: boolean): void => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    handleSelect(response);
    setSendAnswer(true);
  };

  const unShowModal = (category: GeneralCulture[]) => {
    setCategorySelected(category);
    document.querySelector(".CategoriesQuestions")?.classList.add("unshow");
  };

  const chooseCategory = (category: GeneralCulture[]) => {
    position > 0
      ? alert("For choose another category you must finish this")
      : unShowModal(category);
  };

  const categorySelectedModal = (
    id: string,
    category: GeneralCulture[]
  ): void => {
    document.querySelector(".selected")?.classList.remove("selected");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("selected");

    setNameCategory(id);
    chooseCategory(category);
  };

  const redirectToAnswer = () => {
    navigate("/results");
    setPosition(0);
    setSendButton(false);
    setStart(false);
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
        position,
        redirectToAnswer,
        // setPosition,
        // score,
        sendAnswer,
        categorySelected,
        setCategorySelected,
        sendButton,
        answerSelect,
        next,
        categorySelectedModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
