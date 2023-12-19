import React from 'react';
import FaqQuestion from '@/components/FaqQuestion';

const FaqSection = () => {
  const q = 'Q:- What sort of work I do?';
  const a =
    'I work as freelancer providing freelance and consulting services to law firms';

  return (
    <section className="narrow-container">
      <h1 className="heading">F.A.Q.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FaqQuestion question={q} answer={a} />
        <FaqQuestion question={q} answer={a} />
        <FaqQuestion question={q} answer={a} />
        <FaqQuestion question={q} answer={a} />
        <FaqQuestion question={q} answer={a} />
        <FaqQuestion question={q} answer={a} />
      </div>
    </section>
  );
};

export default FaqSection;
