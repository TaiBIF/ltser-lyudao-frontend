import React, { useEffect, useRef } from 'react';
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  useFormikContext,
} from 'formik';

import { useTranslation } from 'react-i18next';

import CloseIcon from 'components/CloseIcon';
import DownloadPopupFieldLayout from 'components/DownloadPopupFieldLayout';

import { applyDownloadValidationSchema } from 'data/validationSchema';

import { fadeInitStyle } from 'utils/animation';
import { handleStopPropagation } from 'helpers/stopPropagation';
import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useDownload } from 'hooks/api/useDownload';
import { useAuthContext } from 'context/AuthContext';

const DownloadPopup = () => {
  const PAGE_NAME = 'common';
  const COMPONENT_NAME = 'DownloadPopup';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const { filter, show, downloadPopupRef, handleDownloadPopup } =
    useSurveyMapContext();
  const { loading, handleApplyDownload } = useDownload();

  const initialValues = {
    email: '',
    role: '',
    last_name: '',
    first_name: '',
    content: '',
  };

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    const fileName = `${filter.id}_${filter.year}`;
    handleApplyDownload({
      url: 'site',
      fileName,
      values,
      params: {
        locationID: filter.id,
        year: filter.year,
      },
      handleAction: () => {
        handleDownloadPopup('close');
      },
    });
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: applyDownloadValidationSchema,
    // enableReinitialize: true,
  };

  return (
    <>
      <div className="dowload-pop" ref={downloadPopupRef} style={fadeInitStyle}>
        <div
          className="flex100"
          onClick={() => {
            handleDownloadPopup('close');
          }}
        >
          <div className="w_bgbox" onClick={handleStopPropagation}>
            <div
              className="xx"
              onClick={() => {
                handleDownloadPopup('close');
              }}
            >
              <CloseIcon />
            </div>
            <div className="title">{t(`${I18N_KEY_PREFIX}.title`)}</div>
            <Formik {...formikConfig}>
              {({ isSubmitting }) => (
                <Form>
                  <DownloadPopupFieldLayout
                    isSubmitting={isSubmitting}
                    loading={loading}
                    show={show}
                    I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPopup;
