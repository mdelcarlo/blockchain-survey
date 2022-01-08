import * as React from "react";
import QuestionModal from "./QuestionModal";

export default function QuestionsWrapper({
  children,
  isOpen,
  onSurveyEnd,
}: {
  children: React.ReactChildren;
  isOpen: boolean;
  onSurveyEnd: (isCancel: boolean) => {};
}) {
  const [actualQuestionIndex, setActualQuestionIndex] = React.useState(0);

  const onQuestionEnd = (index: number) => (options: { isCancel: boolean }) => {
    if (options?.isCancel) {
      setActualQuestionIndex(0);
      return onSurveyEnd(true);
    }
    // @ts-ignore
    if (index === Array.from(children).length - 1) {
      setActualQuestionIndex(0);
      onSurveyEnd(false);
    } else {
      setActualQuestionIndex(() => index + 1);
    }
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        //@ts-ignore
        if (child.type === QuestionModal) {
          const onEnd = onQuestionEnd(index);
          const isQuestionOpen = isOpen && index === actualQuestionIndex;
          //@ts-ignore
          return React.cloneElement(child, {
            onEnd,
            isOpen: isQuestionOpen,
          });
        } else {
          return child;
        }
      })}
    </>
  );
}
