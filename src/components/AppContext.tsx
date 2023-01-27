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
    else if(!replay){
      switch (nameCategory) {
        case "General Culture":
          setGeneral(general);
          break;
        case "Sport":
          setSport(sport);
          break;
        case "Animals":
          setAnimals(animals);
          break;
        case "Cities":
          setCities(cities);
          break;
        case "Javascript":
          setJs(js);
          break;
        case "HTML":
          setHtml(html);
          break;
        default:
          setCss(css);
          break;
      }
    }
  };

  const answerSelect = (id: string, res: boolean): void => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    setScore(true);
    setResponse(res)
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
    handleSelect(response);
    setScore(false);

    navigate("/results");
    setPosition(0);
    setSendButton(false);
    setStart(false);
    setResponse(false)
  };

  const resetValues = () => {
    setScore(true)
    setStart(true)

    switch (nameCategory) {
      case "General Culture":
        setGeneral(0);
        break;
      case "Sport":
        setSport(0);
        break;
      case "Animals":
        setAnimals(0);
        break;
      case "Cities":
        setCities(0);
        break;
      case "Javascript":
        setJs(0);
        break;
      case "HTML":
        setHtml(0);
        break;
      default:
        setCss(0);
    }
  }
    

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
        setCategorySelected,
        sendButton,
        answerSelect,
        next,
        categorySelectedModal,
        resetValues,
        setResponse,
        response,
        handleSelect,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
