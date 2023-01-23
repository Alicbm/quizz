import React from 'react'
import { AppContext } from './AppContext';
// import { useState } from '../hooks/useState';

export const Chronometer = () => {
  const [time, setTime] = React.useState <number>(0);
  const { next} = React.useContext(AppContext);
  // const { next, time, setTime } = useState();
  
  const ref = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    ref.current && clearInterval( ref.current )
    
    if(time < 10){  
      setTimeout(() => {
        setTime(time + 1);
      }, 1000)
    }else if(time === 10){
      setTime(0);
      next();
    }
  }, [next, setTime, time])

  // console.log(time);

  return (
    <div>Chronometer: {time}</div>
  )
}
