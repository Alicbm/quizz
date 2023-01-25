import { AllCategories, InitialState } from "../types";

export const reducerCategories = (state: InitialState, action: AllCategories) => {
  switch (action.type) {
    case 'animals':
      return {
        ...state,
      }
  case 'cities':
      return {
        ...state,
        
      }
      case 'sports':
      return {
        ...state,
        
      }
      case 'generalculture':
      return {
        ...state,
        
      }
      case 'html':
      return {
        ...state,
        
      }
      case 'css':
      return {
        ...state,
        
      }
      case 'js':
      return {
        ...state,
        
      }
    default:
      break;
  }
}


