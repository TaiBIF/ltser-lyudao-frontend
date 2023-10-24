import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Breadcrumb from 'components/Breadcrumb';
import { spinnerBtnStyle } from 'utils/style';

const VerifyEmailSuccess = () => {
  const PAGE_NAME = 'Auth';
  const COMPONENT_NAME = 'VerifyEmailSuccess';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();
  return (
    <>
      <div className="innbox">
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="box-1000">
              <div className="line-titlarea">
                <div className="peo-title">
                  <div className="line1" />
                  {t(`${I18N_KEY_PREFIX}.title`)}
                  <div className="line2" />
                </div>
              </div>
              <div className="mailbox">
                ※ {t(`${I18N_KEY_PREFIX}.subtitle`)}
              </div>
              <Link to="/" className="send" style={spinnerBtnStyle}>
                {t(`${I18N_KEY_PREFIX}.backBtn`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailSuccess;
