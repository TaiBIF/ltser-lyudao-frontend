import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderLoginContentState } from 'types/common';

import { useHeaderContext } from 'context/HeaderContext';

interface ActionBtnProps {
  type: string;
  loading: boolean;
  I18N_KEY_PREFIX: string;
}

const ActionBtn = (props: ActionBtnProps) => {
  const { type, loading, I18N_KEY_PREFIX } = props;
  const PREFIX = 'ActionBtn';

  const { t } = useTranslation();

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
        setContent({
          class: 'forget-btn',
          text: t(`${I18N_KEY_PREFIX}.${PREFIX}.forgotPswBtn`),
        });
        break;
      case 'signup':
        setContent({
          class: 'res-btn',
          text: t(`${I18N_KEY_PREFIX}.${PREFIX}.signupBtn`),
        });
        break;
      case 'login':
        setContent({
          class: 'back-btn',
          text: t(`${I18N_KEY_PREFIX}.${PREFIX}.backBtn`),
        });
        break;
      default:
        break;
    }
  }, [show]);

  return (
    <>
      <button
        type="button"
        className={content.class}
        onClick={handleBtnClick}
        disabled={loading}
      >
        {content.text}
      </button>
    </>
  );
};

export default ActionBtn;
