import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import boy from '../Images/boy.jpg';

export const StartPage = () => {
  const [quiz, setQuiz] = useState(localStorage.getItem('quiz'));
  const [survey, setSurvey] = useState(localStorage.getItem('survey'));
  return (
    <>
      <NavBar />
      <div className="md:text-center">
        <div className="mt-8 md:mt-20 font-poppins font-bold text-lg md:text-2xl tracking-wider">
          Signs and Symptoms of Dyslexia{' '}
        </div>
        <div className="mt-1">and Determining When Academic</div>
        <div className="mt-1">Intervention is Necessary</div>
        <img
          src={boy}
          alt="dyslexic boy"
          className="my-8 bg-black h-64 w-80 mx-auto"
        />
        <div className="flex justify-center">
          <Link to="/quiz">
            <Button content="Quiz" quiz={quiz} />
          </Link>
          <Link to="/survey" className="ml-5">
            <Button content="Survey" quiz={survey} />
          </Link>
          <Link to="/handwritten" className="ml-5">
            <Button content="Handwritten" />
          </Link>
        </div>
      </div>
    </>
  );
};
