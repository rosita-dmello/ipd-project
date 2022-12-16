import React, { useState } from 'react';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import { OptionBtn } from '../Components/OptionBtn';
import robo from '../Images/robo.jpg';
import speaker from '../Images/speaker.jpg';
import { useSpeechSynthesis } from 'react-speech-kit';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const QuizPage = () => {
  const { speak } = useSpeechSynthesis();
  const [res, setRes] = useState(-1);
  const dummy = ['a', 'b', 'c', 'd'];
  return (
    <>
      <NavBar />
      <div className="mt-20">
        <div className="flex mx-36 items-center">
          <img src={robo} alt="robo-image" className="" />
          <div className="ml-10">
            <div className="font-poppins font-bold text-2xl">
              Choose which is same as
            </div>
            <div className="flex items-center mt-5">
              <img
                src={speaker}
                alt="speaker-image"
                className="w-6 h-6 mr-3 cursor-pointer"
                onClick={() => speak({ text: 'B' })}
              />
              <div className="border border-qBor rounded py-1 px-2 text-lg">
                “B”
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <CountdownCircleTimer
              isPlaying
              duration={120}
              colors={[' #37C9EF']}
              size={60}
              strokeWidth={5}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="flex my-14 mx-36 justify-center">
          {dummy.map((opt, index) => {
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
        <div className="flex justify-center">
          <Button content="Continue" />
        </div>
      </div>
    </>
  );
};
