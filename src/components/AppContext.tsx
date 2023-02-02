import React from "react";
import { AppContextType, GeneralCulture, Props } from "../types";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useStorageCategory } from "../hooks/useStorageCategory";
import { useStorageClass } from "../hooks/useStorageClass";

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export function ContainerApp({ children }: Props) {

  // Local Storage
  const categoryStorage = useStorageCategory();
  const classStorage = useStorageClass();
  
  const generalStorage = useLocalStorage ('GENERAL_V1');
  const sportStorage = useLocalStorage('SPORT_V1');
  const animalsStorage = useLocalStorage('ANIMAL_V1');
  const citiesStorage = useLocalStorage('CITY_V1');
  const htmlStorage = useLocalStorage('HTML_V1');
  const jsStorage = useLocalStorage('JS_V1');
  const cssStorage = useLocalStorage('CSS_V1');

  const navigate = useNavigate();

  const [general, setGeneral] = React.useState <number> (generalStorage.scoreGeneral);
  const [sport, setSport] = React.useState <number> (sportStorage.scoreGeneral);
  const [animals, setAnimals] = React.useState <number> (animalsStorage.scoreGeneral);
  const [cities, setCities] = React.useState <number> (citiesStorage.scoreGeneral);
  const [html, setHtml] = React.useState <number> (htmlStorage.scoreGeneral);
  const [js, setJs] = React.useState <number> (jsStorage.scoreGeneral);
  const [css, setCss] = React.useState <number> (cssStorage.scoreGeneral);

  const [start, setStart] = React.useState<boolean>(false);
  const [categoryPosition, setCtaegoryPosition] = React.useState<string>('general-culture');
  const [nameCategory, setNameCategory] = React.useState<string>(classStorage.scoreGeneral);
  const [position, setPosition] = React.useState<number>(0);
  const [categorySelected, setCategorySelected] = React.useState<GeneralCulture[]>(categoryStorage.scoreGeneral);
  const [sendButton, setSendButton] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<boolean>(false);

  // para que no se envia mas de una vez la misma respuesta
  const [score, setScore] = React.useState<boolean>(true);

  const handleSelect = (replay: boolean): void => {
    if (replay && score) {
      switch (nameCategory) {
        case "General Culture":
          setGeneral(general + 1);
          localStorage.setItem('GENERAL_V1', JSON.stringify(general + 1))
          break;
        case "Sports":
          setSport(sport + 1);
          localStorage.setItem('SPORT_V1', JSON.stringify(sport + 1))
          break;
        case "Animals":
          setAnimals(animals + 1);
          localStorage.setItem('ANIMAL_V1', JSON.stringify(animals + 1))
          break;
        case "Cities":
          setCities(cities + 1);
          localStorage.setItem('CITY_V1', JSON.stringify(cities + 1))
          break;
        case "Javascript":
          setJs(js + 1);
          localStorage.setItem('JS_V1', JSON.stringify(js + 1))
          break;
        case "HTML":
          setHtml(html + 1);
          localStorage.setItem('HTML_V1', JSON.stringify(html + 1))
          break;
        default:
          setCss(css + 1);
          localStorage.setItem('CSS_V1', JSON.stringify(css + 1))
          break;
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
    name: string,
  ): void => {
    position > 0
      ? alert("For choose another category you must finish this")
      : document.querySelector(".CategoriesQuestions")?.classList.add("unshow");

    localStorage.setItem('CLASS_V1', JSON.stringify(name))  
    setNameCategory(name);
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
        setGeneral(0);
        localStorage.setItem('GENERAL_V1', JSON.stringify(0))
        break;
      case "Sport":
        setSport(0);
        localStorage.setItem('SPORT_V1', JSON.stringify(0))
        break;
      case "Animals":
        setAnimals(0);
        localStorage.setItem('ANIMAL_V1', JSON.stringify(0))
        break;
      case "Cities":
        setCities(0);
        localStorage.setItem('CITY_V1', JSON.stringify(0))
        break;
      case "Javascript":
        setJs(0);
        localStorage.setItem('JS_V1', JSON.stringify(0))
        break;
      case "HTML":
        setHtml(0);
        localStorage.setItem('HTML_V1', JSON.stringify(0))
        break;
      default:
        setCss(0);
        localStorage.setItem('CSS_V1', JSON.stringify(0))
    }
  };

  const getInfoApi = async (category: string = categoryPosition) => {
    const info = await getCategories(category);
    localStorage.setItem('CATEGORY_V1', JSON.stringify(info))
    setCategorySelected(info);
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
        setCtaegoryPosition,
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
        getInfoApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
