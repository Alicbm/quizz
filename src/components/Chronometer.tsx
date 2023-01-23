import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { RxLapTimer } from 'react-icons/rx'
import '../styles/Chronometer.css'

export const Chronometer = () => {
  const { nameCategory } = React.useContext(AppContext);
  const [min, setMine] = React.useState<number>(1);
  const [seg, setSeg] = React.useState<number>(60);

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (seg === 0 && min === 0) {
  //     navigate("/results");
  //   } else if (seg !== 0) {
  //     setTimeout(() => {
  //       setSeg(seg - 1);
  //     }, 1000);
  //   } else if (seg === 0) {
  //     setMine(min - 1);
  //     setSeg(60);
  //     setTimeout(() => {
  //       setSeg(seg - 1);
  //     }, 1000);
  //   }
  // }, [min, navigate, seg]);

  return (
    <div className="Chronometer">
      <div className="Chronometer-category">
        <p>{nameCategory}</p>
      </div>
      {seg <= 9 ? (
        <p className="Chronometer-time">
          <RxLapTimer /> 0{min}:0{seg}
        </p>
      ) : (
        <p className="Chronometer-time">
          <RxLapTimer /> 0{min}:{seg}
        </p>
      )}
    </div>
  );
};
