import React, { useState, useEffect } from 'react';

import { HeaderLoginContentState } from 'types/common';

import { useHeaderContext } from 'context/HeaderContext';

interface ActionBtnProps {
  type: string;
}

const ActionBtn = (props: ActionBtnProps) => {
  const { type } = props;
  const { show, setShow } = useHeaderContext();
  const [content, setContent] = useState<HeaderLoginContentState>({
    class: '',
    text: '',
  });

  const handleBtnClick = () => {
    setShow({ ...show, loginContent: type });
  };

  useEffect(() => {
    switch (type) {
      case 'forgotPsw':
        setContent({ class: 'forget-btn', text: '忘記密碼' });
        break;
      case 'signup':
        setContent({ class: 'res-btn', text: '建立帳號' });
        break;
      case 'login':
        setContent({ class: 'back-btn', text: '返回登入' });
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <button type="button" className={content.class} onClick={handleBtnClick}>
        {content.text}
      </button>
    </>
  );
};

export default ActionBtn;
