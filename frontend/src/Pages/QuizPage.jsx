import React, { useEffect, useState } from 'react';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import { OptionBtn } from '../Components/OptionBtn';
import robo from '../Images/robo.jpg';
import speaker from '../Images/speaker.jpg';
import { useSpeechSynthesis } from 'react-speech-kit';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import Data from '../Data/quizQuestions.json';
import { Navigate, useNavigate } from 'react-router-dom';

export const QuizPage = ({ score, setScore }) => {
  const { speak } = useSpeechSynthesis();
  const [res, setRes] = useState(-1);
  const [count, setCount] = useState(0);
  console.log('images' in Object.keys(Data[score.length + 1]));
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="mt-20">
        <div className="flex mx-36 items-center">
          <img src={robo} alt="robo-image" className="" />
          <div className="ml-10">
            <div className="font-poppins font-bold text-2xl">
              <img
                src={speaker}
                alt="speaker-image"
                className="w-6 h-6 mr-3 cursor-pointer inline-block"
                onClick={() =>
                  speak({
                    text:
                      'voice' in Data[score.length + 1]
                        ? Data[score.length + 1].voice
                        : Data[score.length + 1].question,
                  })
                }
              />
              {Data[score.length + 1].question}
            </div>
            <div className="flex justify-center items-center mt-5">
              {/* <div className='border border-qBor rounded py-1 px-2 text-lg'>“B”</div> */}
              {'images' in Data[score.length + 1]
                ? Data[score.length + 1].images.map((img, index) => {
                    return (
                      <img
                        src={require(`../Images/Quiz1/${img}`)}
                        className="border border-qBor rounded py-1 px-2 w-52 h-52 mx-8"
                        alt="letter B"
                      />
                    );
                  })
                : null}
            </div>
          </div>
          <div className="ml-auto">
            <div
              className={`border-btn rounded-full border-4 ${
                count > 9 ? 'px-4 py-3' : 'px-4 py-2'
              } `}
            >
              {count}
            </div>
            {/* <CountdownCircleTimer
              isPlaying
              duration={300}
              colors={[' #37C9EF']}
              size={60}
              strokeWidth={5}>
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer> */}
          </div>
        </div>
        <div className="flex my-14 mx-36 justify-center">
          {Data[score.length + 1].options.map((opt, index) => {
            return (
              <div key={index} className="mr-20">
                <button
                  className={`${
                    res == index ? 'bg-blue-200' : 'bg-optBg'
                  } border-bor border-b-2 rounded-lg text-label font-poppins 
                  ${opt.length < 5 ? 'px-20' : 'px-5'}  
                  py-3 hover:shadow-lg`}
                  onClick={() => {
                    setRes(index);
                  }}
                >
                  {opt}
                </button>
              </div>
            );
          })}
        </div>
        <div
          className="flex justify-center"
          onClick={() => {
            setScore([
              ...score,
              Data[score.length + 1].options[res] ===
              Data[score.length + 1].answer
                ? 1
                : 0,
            ]);
            if (score.length === 9) {
              localStorage.setItem('quiz', 'true');
              navigate('/getting-started');
            } else {
              setRes(-1);
            }
            setCount(0);
          }}
        >
          <Button content="Continue" />
        </div>
      </div>
    </>
  );
};
