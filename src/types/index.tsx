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
  sendButton: boolean;
  answerSelect: (id: string, response: boolean) => void;
  next: () => void;
  categorySelectedModal: (id: string) => void;
  resetValues: () => void;
  getInfoApi: (arg: string) => void
};

export type OneCategory = {
  id: string;
  name: string;
  clase?: string;
};