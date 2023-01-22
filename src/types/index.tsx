export interface Props {
  children: React.ReactNode
}

export type GeneralCulture = {
  id: any,
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
  position:number,
  score:number,
  sendAnswer:boolean,
  categorySelected:GeneralCulture,
  sendButton: boolean,
}


