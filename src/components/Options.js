import { useQuiz } from '../context/QuizContext';

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${
              answer === index
                ? answer === question.correctOption
                  ? 'answer correct'
                  : 'answer wrong'
                : ''
            } ${
              hasAnswered
                ? index !== question.correctOption
                  ? 'other'
                  : 'correct'
                : ''
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
