import { useQuiz } from '../context/QuizContext';

function FinishScreen() {
  const { points, maxPoints, highScore, dispatch } = useQuiz();

  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest Score: {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
