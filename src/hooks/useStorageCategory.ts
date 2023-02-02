import { GeneralCulture } from "../types";

export const useStorageCategory = () => {

  const localStorageGeneral = localStorage.getItem('CATEGORY_V1');
  let scoreGeneral: GeneralCulture[];

  if ( !localStorageGeneral  ) {
    localStorage.setItem('CATEGORY_V1', JSON.stringify([]));
    scoreGeneral = [];
  } else {
    scoreGeneral = JSON.parse(localStorageGeneral);
  }
  return { scoreGeneral };
}