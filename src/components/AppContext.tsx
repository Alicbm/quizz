import React from 'react'
import { AppContextType, GeneralCulture, Props } from '../types';
import { generalCulture } from '../questions/generalCulture';

export const AppContext = React.createContext<AppContextType> ({} as AppContextType);

export function ContainerApp({ children }: Props){

  // const [time, setTime] = React.useState <number>(0);
  const [position, setPosition] = React.useState <number> (0);
  const [score, setScore] = React.useState <number> (0);
  const [sendAnswer, setSendAnswer] = React.useState <boolean> (false);
  const [categorySelected, setCategorySelected] = React.useState <GeneralCulture[]> (generalCulture);
  const [sendButton, setSendButton] = React.useState <boolean> (false);

  // const changeCategory = (category: GeneralCulture[]) => setCategorySelected(category);

  const next = (): void => {
    document.querySelector(".active")?.classList.remove("active");
    // if (sendAnswer) {
      if (categorySelected.length - 1 === position) {
        setPosition(position);
        setSendButton(true);
      } else {
        // setTime(0)
        setPosition(position + 1);
        setSendAnswer(false);
      }
    // } else {
    //   alert("You must choose one option");
    // }
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

  
  return(
    <AppContext.Provider value={{
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
    }}>
      {children}
    </AppContext.Provider>
  )
}




