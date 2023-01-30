export const useLocalStorage = (item: string) => {

  const localStorageGeneral = localStorage.getItem(item);
  let scoreGeneral: number;

  if ( !localStorageGeneral  ) {
    localStorage.setItem(item, JSON.stringify(0));
    scoreGeneral = 0;
  } else {
    scoreGeneral = parseInt(JSON.parse(localStorageGeneral));
  }
  return { scoreGeneral };
}
