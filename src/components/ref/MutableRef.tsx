import { useState, useRef, useEffect } from "react";

export const Mutable = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);
  // That's for mutable Object
  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Hooktimer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer </button>
    </div>
  );
};
