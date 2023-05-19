import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import { Loader } from '../Components/Loader';
import { SpecialistPage } from './SpecialistPage';

export const HandwritingResult = ({ files, setFiles }) => {
  const [res, setRes] = useState('Res');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(files);

    const fetchData = async () => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', files[0].originalFile.file);

        const response = await fetch('http://localhost:8000/handwriting/result', {
          method: 'POST',
          // ! Remove this line if not working
          headers: {
            'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
          },
          body: formData
        });
        const resData = await response.json();
        setFiles([]);
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
        <div className='mt-5 flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-poppins font-bold text-4xl'>Your Result</div>
            <div className='text-xl'>{res.message && res.message}</div>
            <div className='text-xl'>{res.probability && res.probability}</div>
          </div>
        </div>
      )}
      <SpecialistPage result='true' resultHandwritten={res.probability || 1} />
    </>
  );
};
