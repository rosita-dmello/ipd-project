import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/SurveyPage';
import { useState } from 'react';
import { Result } from './Pages/SubmittedPage';

export default function App() {
  const [score, setScore] = useState([]);
  const [surveyScore, setSurveyScore] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getting-started' element={<StartPage />} />
      <Route path='/quiz' element={<QuizPage score={score} setScore={setScore} />} />
      <Route
        path='/survey'
        element={<Survey surveyScore={surveyScore} setSurveyScore={setSurveyScore} />}
      />
      <Route path='/result' element={<Result score={score} surveyScore={surveyScore} />} />
    </Routes>
  );
}
