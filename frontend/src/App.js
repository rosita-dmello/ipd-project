import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/SurveyPage';
import { useState } from 'react';
import { Result } from './Pages/SubmittedPage';
import { SpecialistPage } from './Pages/SpecialistPage';
import { SignUp } from './Pages/SignupPage';
import { Login } from './Pages/LoginPage';
import { HandwrittingPage } from './Pages/HandwrittingPage';
import { HandwritingResult } from './Pages/HandwritingSubmittedPage';
import ResultPage from './Pages/ResultPage';

export default function App() {
  const [score, setScore] = useState([]);
  const [surveyScore, setSurveyScore] = useState([]);
  const [files, setFiles] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getting-started' element={<StartPage />} />
      <Route path='/quiz' element={<QuizPage score={score} setScore={setScore} />} />
      <Route
        path='/survey'
        element={<Survey surveyScore={surveyScore} setSurveyScore={setSurveyScore} />}
      />
      <Route
        path='/result'
        element={
          <ResultPage
            score={score}
            setScore={setScore}
            surveyScore={surveyScore}
            setSurveyScore={setSurveyScore}
            files={files}
            setFiles={setFiles}
          />
        }
        // element={<Result score={score} setScore={setScore} surveyScore={surveyScore} setSurveyScore={setSurveyScore} />}
      />
      <Route path='/specialist' element={<SpecialistPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/handwritten' element={<HandwrittingPage files={files} setFiles={setFiles} />} />
      <Route
        path='/handwriting-result'
        element={<HandwritingResult files={files} setFiles={setFiles} />}
      />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  );
}
