import React from "react";
import { ApiRest, AppContextType, GeneralCulture, Props } from "../types";
import { generalCulture } from "../questions/generalCulture";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api";

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
  const [categoryPosition, setCtaegoryPosition] = React.useState<string>('animals');
  const [nameCategory, setNameCategory] =
    React.useState<string>("General Culture");
  const [position, setPosition] = React.useState<number>(0);
  const [categorySelected, setCategorySelected] = React.useState<GeneralCulture[]>([]);
  const [sendButton, setSendButton] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<boolean>(false);

  // para que no se envia mas de una vez la misma respuesta
  const [score, setScore] = React.useState<boolean>(true);

  const handleSelect = (replay: boolean): void => {
    if (replay && score) {
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
    category: GeneralCulture[]
  ): void => {
    position > 0
      ? alert("For choose another category you must finish this")
      : document.querySelector(".CategoriesQuestions")?.classList.add("unshow");

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

  const getInfoApi = async (category: string) => {
    const info = await getCategories(category);
    setCategorySelected(info);
  };

  // console.log(categorySelected);

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
