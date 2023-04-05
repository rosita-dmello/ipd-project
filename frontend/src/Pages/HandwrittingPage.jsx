import React, { useState } from 'react';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton } from 'react-uploader';
import { NavBar } from '../Components/Navbar';

const uploader = Uploader({ apiKey: 'free' });
const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: '#37C9EF',
    },
  },
};

const MyUploadButton = ({ setFiles }) => (
  <UploadButton
    uploader={uploader}
    options={uploaderOptions}
    onComplete={setFiles}
  >
    {({ onClick }) => <button onClick={onClick}>Upload Here</button>}
  </UploadButton>
);

const MyUploadedFiles = ({ files }) =>
  files.map((file) => {
    // Tip: save 'filePath' to your DB (not 'fileUrl').
    const filePath = file.filePath;
    const fileUrl = uploader.url(filePath, 'thumbnail'); // "raw" for un-transformed file.

    return (
      <p key={fileUrl}>
        <img src={fileUrl} className=""></img>
        {/* <a href={fileUrl} target="_blank">
          {fileUrl}
        </a> */}
      </p>
    );
  });

export const HandwrittingPage = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <NavBar />
      <div className="py-3 px-5 text-white font-semibold text-lg mt-20 bg-btn rounded-md w-max mx-auto">
        <MyUploadButton setFiles={setFiles} />
      </div>
      {files.length && (
        <>
          <div className="mt-10 w-max mx-auto text-center">
            <MyUploadedFiles files={files} />
          </div>
        </>
      )}
    </>
  );
};
