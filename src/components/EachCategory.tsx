import React from "react";
import { AppContext } from "./AppContext";
import { OneCategory } from "../types";

export function EachCategory({
  id,
  name,
  clase,
}: OneCategory): JSX.Element {
  const { categorySelectedModal, nameCategory, getInfoApi } = React.useContext(AppContext);

  const callback = () => {
    categorySelectedModal(name)
    getInfoApi(id);
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
