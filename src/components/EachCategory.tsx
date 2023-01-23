import React from "react";
import { AppContext } from "./AppContext";
import { OneCategory } from "../types";

export function EachCategory({id, category, name, clase}:OneCategory):JSX.Element {
  const { categorySelectedModal } = React.useContext(AppContext);

  return (
    <li
      id={id}
      className={clase}
      onClick={() => categorySelectedModal(id, category)}
    >
      {name}
    </li>
  );
}
