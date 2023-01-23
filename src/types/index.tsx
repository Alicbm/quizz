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
  // time: number,
  // setTime: (n: number) => void,
  position: number;
  score: number;
  sendAnswer: boolean;
  categorySelected: GeneralCulture[];
  setCategorySelected: (category: GeneralCulture[]) => void;
  sendButton: boolean;
  answerSelect: (id: string, response: boolean) => void;
  next: () => void;
};

