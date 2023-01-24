export interface Props {
  children: JSX.Element | JSX.Element[]
}

export type GeneralCulture = {
  id: number,
  ask: string,
  optionA:{
    text: string,
    replay: boolean
  },
  optionB:{
    text: string,
    replay: boolean
  },
  optionC:{
    text: string,
    replay: boolean
  },
  optionD:{
    text: string,
    replay: boolean
  },
};

export type AppContextType = {
  start: boolean, 
  setStart: (arg: boolean) => void,
  nameCategory: string,
  position: number;
  score: number;
  sendAnswer: boolean;
  categorySelected: GeneralCulture[];
  setCategorySelected: (category: GeneralCulture[]) => void;
  sendButton: boolean;
  answerSelect: (id: string, response: boolean) => void;
  next: () => void;
  categorySelectedModal: (id: string, category: GeneralCulture[]) => void;
};

export type OneCategory = {
  id: string, 
  category: GeneralCulture[], 
  name:string,
  clase?:string,
}