import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';

const initialState = {
  questions: [],

  // 'loading', 'ready', 'active', 'finished', 'error'
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };

    default:
      throw new Error('Action unknown');
  }
}

export default function App() {
  const [{ status, question }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        if (!res.ok) {
          throw new Error('Data not received');
        }
        const data = await res.json();
        dispatch({ type: 'dataReceived', payload: data });
      } catch (err) {
        dispatch({ type: 'dataFailed' });
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>{status === 'loading' && <Loader />}</Main>
    </div>
  );
}
