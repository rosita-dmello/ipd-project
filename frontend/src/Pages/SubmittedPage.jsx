import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import { Loader } from '../Components/Loader';

export const Result = ({ score, surveyScore }) => {
  const [res, setRes] = useState('Res');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const language =
      (score[0] + score[1] + score[2] + score[3] + score[4] + score[5] + score[7]) / 7;
    const memory = (score[1] + score[8]) / 2;
    const speed = 0.4;
    const visual = (score[0] + score[2] + score[3] + score[6]) / 4;
    const audio = (score[6] + score[9]) / 2;
    const survey = surveyScore.reduce((a, b) => a + b, 0) / 80;
    const data = {
      language,
      memory,
      speed,
      visual,
      audio,
      survey
    };
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        console.log(resData);
        setRes(resData);
        setLoading(false);
        console.log(resData.response.body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <Loader show={loading} />
      {loading ? null : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-poppins font-bold text-4xl'>Your Result</div>
            <div className='text-xl'>{res}</div>
          </div>
        </div>
      )}
    </>
  );
};
