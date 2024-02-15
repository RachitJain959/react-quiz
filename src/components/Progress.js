function Progress({ index, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        {points}/{maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
