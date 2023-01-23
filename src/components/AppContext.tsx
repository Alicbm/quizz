import React from 'react'
import { AppContextType, GeneralCulture, Props } from '../types';
import { generalCulture } from '../questions/generalCulture';

export const AppContext = React.createContext<AppContextType> ({} as AppContextType);

export function ContainerApp({ children }: Props){
  const [nameCategory, setNameCategory] = React.useState <string> ('General Culture');
  const [position, setPosition] = React.useState <number> (0);
  const [score, setScore] = React.useState <number> (0);
  const [sendAnswer, setSendAnswer] = React.useState <boolean> (false);
  const [categorySelected, setCategorySelected] = React.useState <GeneralCulture[]> (generalCulture);
  const [sendButton, setSendButton] = React.useState <boolean> (false);


  const next = (): void => {
    document.querySelector(".active")?.classList.remove("active");
      if (categorySelected.length - 1 === position) {
        setPosition(position);
        setSendButton(true);
      } else {
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

  const unShowModal = (category: GeneralCulture[]) => {
    setCategorySelected(category);
    // document.querySelector(".CategoriesQuestions")?.classList.add("unshow");
  };

  const chooseCategory = (category: GeneralCulture[]) => {
    position > 0
      ? alert("For choose another category you must finish this")
      : unShowModal(category);
  };

  const categorySelectedModal = (id: string, category: GeneralCulture[]): void => {
    document.querySelector(".selected")?.classList.remove("selected");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("selected");

    setNameCategory(id);
    chooseCategory(category);
  };

  return(
    <AppContext.Provider value={{
      nameCategory, 
      position, 
      score,
      sendAnswer,
      categorySelected,
      setCategorySelected,
      sendButton,
      answerSelect,
      next,
      categorySelectedModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}




