import React, { useEffect, useState } from "react";
import RopstenBanner from "./components/RopstenBanner";
import { ethers } from "ethers";
import contractABI from "./utils/survey-abi.json";
import ModalNoAnswers from "./components/ModalNoAnswers";
import AccountBalance from "./sections/AccountBalance";
import StartSurveySection from "./sections/StartSurvey";
import SurveySection from "./sections/Survey";
import SurveyOverview from "./sections/SurveyOverview";
import SnackbarsSection from "./sections/Snackbars";
import FooterSection from "./sections/Footer";
import { getSurvey } from "./services/survey";
import { ONE_QUIZ, CONTRACT_ADDRESS } from "./utils/constants";
import "./App.css";

const loadSurvey = async (setSurvey) => {
  const quiz = await getSurvey();
  setSurvey(quiz);
};

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [surveyId, setSurveyId] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([null]);
  const [isOpenSurvey, setIsOpenSurvey] = useState(false);
  const [isRopsten, setIsRopsten] = useState(true);
  const [showSurveyOverview, setShowSurveyOverview] = useState(false);
  const [showModalNoAnswers, setShowModalNoAnswers] = useState(false);
  const [showSuccesSubmit, setShowSuccesSubmit] = useState(false);
  const [showErrorSubmit, setShowErrorSubmit] = useState(false);
  const [isSubmittingSurvey, setIsSubmittingSurvey] = useState(false);

  const updateQUIZBalance = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const surveyContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      signer
    );
    let balance = await surveyContract.balanceOf(currentAccount);
    setBalance(parseInt(balance, 10) / ONE_QUIZ);
  };

  const submitSurvey = async () => {
    const surveyAnswers = selectedAnswers.filter((answer) => answer != null);
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const surveyContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractABI,
          signer
        );

        const submit = await surveyContract.submit(surveyId, surveyAnswers, {
          gasLimit: 300000,
        });
        setIsSubmittingSurvey(true);
        console.log("Submitting...", submit.hash);

        await submit.wait();
        setIsSubmittingSurvey(false);
        setShowSurveyOverview(false);
        setShowSuccesSubmit(true);
        updateQUIZBalance(currentAccount);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setIsSubmittingSurvey(false);
      setShowErrorSubmit(true);
      console.log(error);
    }
  };

  const setSurvey = (survey) => {
    const { questions, id } = survey;
    setQuiz(questions);
    setSurveyId(id);
  };

  const onSurveyStart = () => setSelectedAnswers([null]);

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.getNetwork().then((net) => setIsRopsten(net.name === "ropsten"));
    }
    loadSurvey(setSurvey);
  }, []);

  // eslint-disable-next-line
  useEffect(() => updateQUIZBalance(currentAccount), [currentAccount]);

  return (
    <div>
      <AccountBalance account={currentAccount} balance={balance} />
      <RopstenBanner isRopsten={isRopsten} setIsRopsten={setIsRopsten} />
      <div>
        <StartSurveySection
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          isRopsten={isRopsten}
          isOpenSurvey={isOpenSurvey}
          setIsOpenSurvey={setIsOpenSurvey}
          onSurveyStart={onSurveyStart}
        />
        <SurveySection
          quiz={quiz}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          isOpenSurvey={isOpenSurvey}
          setIsOpenSurvey={setIsOpenSurvey}
          setShowSurveyOverview={setShowSurveyOverview}
          setShowModalNoAnswers={setShowModalNoAnswers}
        />
        <SurveyOverview
          isLoading={isSubmittingSurvey}
          isOpen={showSurveyOverview}
          onSubmit={submitSurvey}
          questionsAndAnswers={quiz.map((item, index) => {
            const selectedAnswerId = selectedAnswers[index];
            const answerObject =
              selectedAnswerId &&
              item.options.find((option) => option.id === selectedAnswerId);
            const answer = answerObject?.text || "No Answer";
            return {
              question: item.text,
              answer,
            };
          })}
          onCancel={() => setShowSurveyOverview(false)}
        />
        <ModalNoAnswers
          isOpen={showModalNoAnswers}
          handleClose={() => setShowModalNoAnswers(false)}
        />
        <SnackbarsSection
          showSuccesSubmit={showSuccesSubmit}
          setShowSuccesSubmit={setShowSuccesSubmit}
          showErrorSubmit={showErrorSubmit}
          setShowErrorSubmit={setShowErrorSubmit}
        />
      </div>
      <FooterSection />
    </div>
  );
};

export default App;
