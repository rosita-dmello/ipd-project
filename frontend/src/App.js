import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
