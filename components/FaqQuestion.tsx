import React from 'react';

interface FaqProps {
  question: string;
  answer: string;
}

const FaqQuestion = (props: FaqProps) => {
  return (
    <div>
      <h4 className=" italic">{props.question}</h4>
      <span>{props.answer}</span>
    </div>
  );
};

export default FaqQuestion;
