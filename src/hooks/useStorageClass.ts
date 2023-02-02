export const useStorageClass = () => {

  const localStorageGeneral = localStorage.getItem('CLASS_V1');
  let scoreGeneral: string;

  if ( !localStorageGeneral  ) {
    localStorage.setItem('CLASS_V1', JSON.stringify("General Culture"));
    scoreGeneral = "General Culture";
  } else {
    scoreGeneral = JSON.parse(localStorageGeneral);
  }
  return { scoreGeneral };
}