import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/Navbar";
import BarChart from "../Components/BarChart";
import NextSteps from "../Components/NextSteps";
import { SpecialistPage } from "./SpecialistPage";
import ReportPercentage from "../Components/PercentageReport";
import { Loader } from "../Components/Loader";
import axios from "axios";

const ResultPage = ({
  score,
  surveyScore,
  setScore,
  setSurveyScore,
  files,
  setFiles,
  newFile,
}) => {
  const [res, setRes] = useState("Res");
  const [scores, setScores] = useState({});

  const [handRes, setHandRes] = useState({
    message: "Res",
    probability: "Res",
  });
  const [loading, setLoading] = useState(true);
  const decidePercentage = (msg) => {
    if (msg.includes("High")) {
      return 90;
    } else if (msg.includes("Moderate")) {
      return 60;
    } else {
      return 30;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // calculate the percentage values for each

    const language =
      (score[0] +
        score[1] +
        score[2] +
        score[3] +
        score[4] +
        score[5] +
        score[7]) /
      7;

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
      survey,
    };
    setScores(data);

    console.log(data);
    console.log(newFile);

    const fetchData = async () => {
      try {
        setLoading(true);

        const responseQuiz = await fetch(
          "http://localhost:8000/scores/result",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const formData = new FormData();
        formData.append("file", newFile);

        const handResponse = await axios.post(
          "http://localhost:8000/handwriting/result",
          formData
        );
        console.log(handResponse);

        setScore([]);
        setSurveyScore([]);
        const resData = await responseQuiz.json();
        console.log(resData);
        setRes(resData);
        // console.log(resData.responseQuiz.body);

        // Handwriting
        setFiles([]);
        setHandRes(handResponse.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="text-center my-6">
        <div className="font-poppins font-bold text-4xl">Your Result</div>
        {/* <div className='text-xl'>You are a Visual Learner</div> */}
      </div>
      <Loader show={loading} />

      {loading ? null : (
        <>
          <div className="grid lg:grid-cols-8 gap-4 px-6">
            <div className="col-span-4 bg-white rounded-lg shadow-lg p-2 my-2">
              <BarChart scores={scores} />
            </div>
            <div className="col-span-2 p-2">
              <ReportPercentage
                percentage={decidePercentage(res)}
                title="Quiz Result"
                message={res}
              />

              {/* <div>{res}</div> */}
            </div>
            <div className="col-span-2 p-2">
              <ReportPercentage
                percentage={decidePercentage(handRes.message)}
                title="Handwriting Result"
                message={handRes.message}
              />

              {/* <div className="text-xl">
                {handRes.message && handRes.message}
              </div>
              <div className="text-xl">
                {handRes.probability && handRes.probability}
              </div> */}
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5 p-8 flex justify-center">
              <NextSteps category="low" />
            </div>
            <div className="col-span-12 lg:col-span-7 max-sm:flex max-sm:justify-center">
              <SpecialistPage result={false} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResultPage;
