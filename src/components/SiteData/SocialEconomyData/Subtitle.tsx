import React from 'react';

const Subtitle = ({ text }: { text: string }) => {
  return (
    <>
      <h2 className="c-subtitle">{text}</h2>
    </>
  );
};

export default Subtitle;
