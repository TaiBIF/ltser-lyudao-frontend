import React, { useEffect, useRef } from 'react';
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik';

import CloseIcon from 'components/CloseIcon';
import DownloadPopupFieldLayout from 'components/DownloadPopupFieldLayout';

import { fadeInitStyle } from 'utils/animation';
import { handleStopPropagation } from 'helpers/stopPropagation';
import { useDownload } from 'hooks/api/useDownload';

import { useEcoContext } from 'context/EcoContext';
import { useSiteDataContext } from 'context/SiteDataContext';

import { applyDownloadValidationSchema } from 'data/validationSchema';

interface DownloadPopupItem {
  item: string;
}

const DownloadPopup = (props: DownloadPopupItem) => {
  const { item } = props;
  const {
    show,
    target,
    downloadPopupRef,
    handleDownloadPopup,
    downloadTarget,
    handleDownloadParams,
  } = useEcoContext();
  const { loading, handleApplyDownload } = useDownload();
  const { query } = useSiteDataContext();
  const initialValues = {
    email: '',
    role: '',
    content: '',
  };

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    const { url, fileName } = handleDownloadParams({
      item,
      target: downloadTarget,
    });
    handleApplyDownload({
      url,
      fileName,
      values,
      params: { ...query },
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
            <div className="title">下載申請</div>
            <Formik {...formikConfig}>
              {({ isSubmitting }) => (
                <Form>
                  <DownloadPopupFieldLayout
                    isSubmitting={isSubmitting}
                    loading={loading}
                    show={show}
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
