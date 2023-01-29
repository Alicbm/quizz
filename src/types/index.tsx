export interface Props {
  children: JSX.Element | JSX.Element[];
}

export type GeneralCulture = {
  id: number;
  ask: string;
  optionA: {
    text: string;
    replay: boolean;
  };
  optionB: {
    text: string;
    replay: boolean;
  };
  optionC: {
    text: string;
    replay: boolean;
  };
  optionD: {
    text: string;
    replay: boolean;
  };
};

export type AppContextType = {
  general: number;
  sport: number;
  animals: number;
  cities: number;
  html: number;
  js: number;
  css: number;
  start: boolean;
  setStart: (arg: boolean) => void;
  setCtaegoryPosition: (arg: string) => void
  nameCategory: string;
  position: number;
  setPosition: (arg: number) => void;
  redirectToAnswer: () => void,
  categorySelected: GeneralCulture[];
  //setCategorySelected: (category: GeneralCulture[]) => void;
  sendButton: boolean;
  answerSelect: (id: string, response: boolean) => void;
  next: () => void;
  categorySelectedModal: (id: string, category: GeneralCulture[]) => void;
  resetValues: () => void;//response: boolean;
  getInfoApi: (arg: string) => void
};

export type ApiRest = {
  animals: GeneralCulture[];
  cities: GeneralCulture[];
  css: GeneralCulture[];
  generalCulture: GeneralCulture[];
  html: GeneralCulture[];
  javascript: GeneralCulture[];
  sports: GeneralCulture[];
}; 

export type OneCategory = {
  id: string;
  category: GeneralCulture[];
  name: string;
  clase?: string;
};
