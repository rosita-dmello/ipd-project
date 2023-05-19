import React from 'react';
import { NavBar } from '../Components/Navbar';
import BarChart from '../Components/BarChart';
import NextSteps from '../Components/NextSteps';
import { SpecialistPage } from './SpecialistPage';
import ReportPercentage from '../Components/PercentageReport';

const ResultPage = () => {
  return (
    <>
      <NavBar />
      <div className='text-center my-6'>
        <div className='font-poppins font-bold text-4xl'>Your Result</div>
        {/* <div className='text-xl'>You are a Visual Learner</div> */}
      </div>
      <div className='grid lg:grid-cols-8 gap-4 px-6'>
        <div className='col-span-4 bg-white rounded-lg shadow-lg p-2 my-2'>
          <BarChart />
        </div>
        <div className='col-span-2 p-2'>
          <ReportPercentage percentage={70} title='Quiz Result' />
        </div>
        <div className='col-span-2 p-2'>
          <ReportPercentage percentage={40} title='Handwriting Result' />
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-5 p-8'>
          <NextSteps category='low' />
        </div>
        <div className='col-span-7'>
          <SpecialistPage result={false} />
        </div>
      </div>
    </>
  );
};

export default ResultPage;
