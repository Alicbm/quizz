import React from "react";
import { AppContext } from "./AppContext";
import { OneCategory } from "../types";

export function EachCategory({id, category, name, clase}:OneCategory):JSX.Element {
  const { categorySelectedModal, nameCategory } = React.useContext(AppContext);

  return (
    <li
      id={id}
      className={id === nameCategory ? clase + 'selected' : clase }
      onClick={() => categorySelectedModal(id, category)}
    >
      {name}
    </li>
  );
}
