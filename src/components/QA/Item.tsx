import React, { useState, useEffect, useRef } from 'react';

import ArrowIcon from 'components/QA/ArrowIcon';

import { QAItem } from 'types/qa';

import { gsapSlideToggle, gsapSlideToggleStyle } from 'utils/animation';

interface ItemProps {
  data: QAItem;
}

const Item = (props: ItemProps) => {
  const { data } = props;
  const targetRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  const handleItemClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.style.display = 'block';
      if (active) {
        gsapSlideToggle('auto', target, true);
      } else {
        gsapSlideToggle('auto', target, false);
      }
    }
  }, [active]);

  return (
    <>
      <li className={`${active ? 'now' : ''}`} onClick={handleItemClick}>
        <div className="quesbox ">
          <div className="mark-q">Q</div>
          <p>{data.question}</p>
          <ArrowIcon />
        </div>
        <div className="ansbox" ref={targetRef} style={gsapSlideToggleStyle}>
          <div className="flex">
            <div className="mark-a">A</div>
            <p>{data.answer}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Item;
