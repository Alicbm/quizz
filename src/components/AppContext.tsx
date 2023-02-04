import React from "react";
import { AppContextType, Props } from "../types";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useStorageCategory } from "../hooks/useStorageCategory";
import { useStorageClass } from "../hooks/useStorageClass";
import { updateState } from "../reducer/dispatch";

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export function ContainerApp({ children }: Props) {
  const navigate = useNavigate();

  // Local Storage
  const categoryStorage = useStorageCategory();
  const classStorage = useStorageClass();

  const generalStorage = useLocalStorage("GENERAL_V1");
  const sportStorage = useLocalStorage("SPORT_V1");
  const animalsStorage = useLocalStorage("ANIMAL_V1");
  const citiesStorage = useLocalStorage("CITY_V1");
  const htmlStorage = useLocalStorage("HTML_V1");
  const jsStorage = useLocalStorage("JS_V1");
  const cssStorage = useLocalStorage("CSS_V1");

  const initialState = {
    general: generalStorage.scoreGeneral,
    sport: sportStorage.scoreGeneral,
    animals: animalsStorage.scoreGeneral,
    cities: citiesStorage.scoreGeneral,
    html: htmlStorage.scoreGeneral,
    js: jsStorage.scoreGeneral,
    css: cssStorage.scoreGeneral,

    nameCategory: classStorage.scoreGeneral,
    categorySelected: categoryStorage.scoreGeneral,
    categoryPosition: "general-culture",
    position: 0,

    score: true,
    start: false,
    sendButton: false,
    response: false,
  };

  const [state, dispatch] = React.useReducer(updateState, initialState);

  const handleSelect = (replay: boolean): void => {
    if (replay && state.score) {
      switch (state.nameCategory) {
        case "General Culture":
          dispatch({ type: "general", payload: state.general + 1 });
          localStorage.setItem("GENERAL_V1", JSON.stringify(state.general + 1));
          break;
        case "Sports":
          dispatch({ type: "sport", payload: state.sport + 1 });
          localStorage.setItem("SPORT_V1", JSON.stringify(state.sport + 1));
          break;
        case "Animals":
          dispatch({ type: "animals", payload: state.animals + 1 });
          localStorage.setItem("ANIMAL_V1", JSON.stringify(state.animals + 1));
          break;
        case "Cities":
          dispatch({ type: "cities", payload: state.cities + 1 });
          localStorage.setItem("CITY_V1", JSON.stringify(state.cities + 1));
          break;
        case "Javascript":
          dispatch({ type: "js", payload: state.js + 1 });
          localStorage.setItem("JS_V1", JSON.stringify(state.js + 1));
          break;
        case "HTML":
          dispatch({ type: "html", payload: state.html + 1 });
          localStorage.setItem("HTML_V1", JSON.stringify(state.html + 1));
          break;
        default:
          dispatch({ type: "css", payload: state.css + 1 });
          localStorage.setItem("CSS_V1", JSON.stringify(state.css + 1));
          break;
      }
    }
  };

  const answerSelect = (id: string, res: boolean): void => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    dispatch({ type: "answerSelect", payload: res });
  };

  const next = (): void => {
    handleSelect(state.response);
    dispatch({ type: "score", payload: false });

    document.querySelector(".active")?.classList.remove("active");
    if (state.categorySelected.length - 2 === state.position) {
      dispatch({ type: "sendButton", payload: true });
      dispatch({ type: "position", payload: state.position + 1 });
    } else {
      dispatch({ type: "position", payload: state.position + 1 });
    }
  };

  const categorySelectedModal = (name: string): void => {
    state.position > 0
      ? alert("For choose another category you must finish this")
      : document.querySelector(".CategoriesQuestions")?.classList.add("unshow");

    localStorage.setItem("CLASS_V1", JSON.stringify(name));
    dispatch({ type: "nameCategory", payload: name });
  };

  const redirectToAnswer = () => {
    handleSelect(state.response);
    navigate("/results");

    dispatch({ type: "redirectToAnswer" });
  };

  const resetValues = () => {
    dispatch({ type: "resetValues" });

    switch (state.nameCategory) {
      case "General Culture":
        dispatch({ type: "general", payload: 0 });
        localStorage.setItem("GENERAL_V1", JSON.stringify(0));
        break;
      case "Sport":
        dispatch({ type: "sport", payload: 0 });
        localStorage.setItem("SPORT_V1", JSON.stringify(0));
        break;
      case "Animals":
        dispatch({ type: "animals", payload: 0 });
        localStorage.setItem("ANIMAL_V1", JSON.stringify(0));
        break;
      case "Cities":
        dispatch({ type: "cities", payload: 0 });
        localStorage.setItem("CITY_V1", JSON.stringify(0));
        break;
      case "Javascript":
        dispatch({ type: "js", payload: 0 });
        localStorage.setItem("JS_V1", JSON.stringify(0));
        break;
      case "HTML":
        dispatch({ type: "html", payload: 0 });
        localStorage.setItem("HTML_V1", JSON.stringify(0));
        break;
      default:
        dispatch({ type: "css", payload: 0 });
        localStorage.setItem("CSS_V1", JSON.stringify(0));
    }
  };

  const getInfoApi = async (category: string = state.categoryPosition) => {
    const info = await getCategories(category);
    localStorage.setItem("CATEGORY_V1", JSON.stringify(info));

    dispatch({ type: "categorySelected", payload: info });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        redirectToAnswer,
        answerSelect,
        next,
        categorySelectedModal,
        resetValues,
        getInfoApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
