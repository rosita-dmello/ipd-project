import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/Survey';
import { useState } from 'react';
import { Result } from './Pages/SubmittedPage';

export default function App() {
  const [score, setScore] = useState([]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getting-started' element={<StartPage />} />
      <Route path='/quiz' element={<QuizPage score={score} setScore={setScore} />} />
      <Route path='/survey' element={<Survey />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  );
}
