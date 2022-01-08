// @ts-nocheck
import React from "react";
import QuestionModal from "../components/QuestionModal";
import QuestionsWrapper from "../components/QuestionsWrapper";

const Survey = ({
  quiz,
  selectedAnswers,
  setSelectedAnswers,
  isOpenSurvey,
  setIsOpenSurvey,
  setShowSurveyOverview,
  setShowModalNoAnswers,
}: {
  quiz: any[];
  selectedAnswers: any[];
  setSelectedAnswers: (answers: any[]) => {};
  isOpenSurvey: boolean;
  setIsOpenSurvey: (isOpenSurvey: boolean) => {};
  setShowSurveyOverview: (showSurveyOverview: boolean) => {};
  setShowModalNoAnswers: (showModalNoAnswers: boolean) => {};
}) => {
  const setSelectedOption = (index: number) => (option: any) => {
    setSelectedAnswers((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = option;
      return newOptions;
    });
  };

  const loadSurveyOverview = async (isCancel: boolean) => {
    setIsOpenSurvey(false);
    if (isCancel) {
      setSelectedAnswers([null]);
    } else {
      const surveyAnswers = selectedAnswers.filter(
        (answer: any) => answer != null
      );
      if (surveyAnswers.length > 0) {
        setShowSurveyOverview(true);
      } else {
        setShowModalNoAnswers(true);
      }
    }
  };

  return (
    <QuestionsWrapper isOpen={isOpenSurvey} onSurveyEnd={loadSurveyOverview}>
      {quiz.map((question: { id: number; text: string }, i) => (
        <QuestionModal
          {...question}
          key={question.text}
          setSelectedOption={setSelectedOption(i)}
          selectedOption={selectedAnswers && selectedAnswers[i]}
        />
      ))}
    </QuestionsWrapper>
  );
};

export default Survey;
