import { useEffect } from 'react';

function Timer({ dispatch, timeRemaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'timer' });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return <div className="timer">{timeRemaining}</div>;
}

export default Timer;
