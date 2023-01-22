import React from 'react'
import { generalCulture } from '../questions/generalCulture';
import { AppContextType, GeneralCulture, Props } from '../types';

export const AppContext = React.createContext<AppContextType | null> (null);

export function ContainerApp({ children }: Props){

  const [position, setPosition] = React.useState <number> (0);
  const [score, setScore] = React.useState <number> (0);
  const [sendAnswer, setSendAnswer] = React.useState <boolean> (false);
  const [categorySelected, setCategorySelected] = React.useState <GeneralCulture[]> (generalCulture);
  const [sendButton, setSendButton] = React.useState <boolean> (false);

  const next = () => {
    document.querySelector(".active")?.classList.remove("active");
    if (sendAnswer) {
      if (categorySelected.length - 1 === position) {
        setPosition(position);
        setSendButton(true);
      } else {
        setPosition(position + 1);
        setSendAnswer(false);
      }
    } else {
      alert("You must choose one option");
    }
  };

  const handleSelect = (replay: boolean) => {
    if (replay) {
      console.log("respueta correcta");
      setScore(score + 1);
    } else {
      console.log("respuesta incorrecta");
    }
  };

  const answerSelect = (id: string, response: boolean) => {
    document.querySelector(".active")?.classList.remove("active");
    const day: HTMLElement | null = document.getElementById(id);
    day?.classList.add("active");

    handleSelect(response);
    setSendAnswer(true);
  };


  return(
    <AppContext.Provider value={{
      position, 
      setCategorySelected,
    }}>
      {children}
    </AppContext.Provider>
  )
}




