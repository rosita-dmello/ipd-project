import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/Survey';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getting-started" element={<StartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
}
