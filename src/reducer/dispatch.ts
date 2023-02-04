export function updateState(state: any, action: any) {
  switch (action.type) {
    case "general": return { ...state, general: action.payload };
    case "sport": return { ...state, sport: action.payload };
    case "animals": return { ...state, animals: action.payload };
    case "cities": return { ...state, cities: action.payload };
    case "html": return { ...state, html: action.payload };
    case "js": return { ...state, js: action.payload };
    case "css": return { ...state, css: action.payload };
    case "score": return { ...state, score: action.payload };
    case "sendButton": return { ...state, sendButton: action.payload };
    case "start":return { ...state, start: action.payload };  
    case "position": return { ...state, position: action.payload };
    case "nameCategory": return { ...state, nameCategory: action.payload };
    case 'categorySelected':
      return {...state, categorySelected: action.payload }
    case "answerSelect":
      return {
        ...state,
        score: true,
        response: action.payload,
      };
    
    case "redirectToAnswer":
      return {
        ...state,
        position: 0,
        sendButton: false,
        start: false,
        response: false,
      };
    case 'resetValues':
      return {
        ...state,
        score: true,
        start: true,
      };  
    default:
      return { ...state };
  }
}
