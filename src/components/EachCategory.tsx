import React from "react";
import { AppContext } from "./AppContext";
import { OneCategory } from "../types";

export function EachCategory({
  id,
  category,
  name,
  clase,
}: OneCategory): JSX.Element {
  const { categorySelectedModal, nameCategory, getInfoApi } = React.useContext(AppContext);

  const callback = () => {
    categorySelectedModal(name, category)
    getInfoApi(id);
    // console.log(id);
    
    // setCtaegoryPosition(id)
  }
  
  return (
    <li
      id={id}
      className={name === nameCategory ? clase + "selected" : clase}
      onClick={callback}
    >
      {name}
    </li>
  );
}
