export const useLocalStorage = (item: string) => {

  const localStorageGeneral = localStorage.getItem(item);
  // const localStorageSport = localStorage.getItem('SPORT_V1');
  // const localStorageAnimal = localStorage.getItem('ANIMAL_V1');
  // const localStorageCity = localStorage.getItem('CITY_V1');
  // const localStorageHtml = localStorage.getItem('HTML_V1');
  // const localStorageJs = localStorage.getItem('JS_V1');
  // const localStorageCss = localStorage.getItem('CSS_V1');

  let scoreGeneral: number;
  // let scoreSport;
  // let scoreAnimal;
  // let scoreCity;
  // let scoreHtml;
  // let scoreJs;
  // let scoreCss;

  if ( !localStorageGeneral  ) {
    localStorage.setItem(item, JSON.stringify(0));
    scoreGeneral = 0;
  } else {
    scoreGeneral = parseInt(JSON.parse(localStorageGeneral));
  }
  return { scoreGeneral };
}
