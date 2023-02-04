import React from "react";
import { AppContext } from "./AppContext";
import { OneCategory } from "../types";

export function EachCategory({
  id,
  name,
  clase,
}: OneCategory): JSX.Element {
  const { categorySelectedModal, state, getInfoApi, dispatch } = React.useContext(AppContext);

  const callback = () => {
    categorySelectedModal(name)
    getInfoApi(id);
    dispatch({ type: 'start', payload: false })

    // setStart(false)
  }
  
  return (
    <li
      id={id}
      className={name === state.nameCategory ? clase + "selected" : clase}
      onClick={callback}
    >
      {name}
    </li>
  );
}
