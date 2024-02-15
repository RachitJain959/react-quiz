function FinishScreen({ points, maxPoints, highScore }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest Score: {highScore})</p>
    </>
  );
}

export default FinishScreen;
