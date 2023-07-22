import { useState } from 'react';
import { saveAs } from 'file-saver';

import { swalToast } from 'helpers/customSwal';
import { useApi } from './useApi';

export const useDownload = () => {
  const { handleApi, handleActions } = useApi();
  const [progress, setProgress] = useState<number>(0);

  const handleDownloadAction = ({
    result,
    fileName,
  }: {
    result: any;
    fileName: string;
  }) => {
    const blob = new Blob([result.response.data], {
      type: 'application/octet-stream',
    });
    saveAs(blob, `${fileName}.zip`);
  };

  // const handleVerifyReaptcha = async ({
  //   token,
  //   result,
  // }: {
  //   token: string;
  //   result: any;
  // }) => {
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       baseURL: 'https://www.google.com',
  //       url: '/recaptcha/api/siteverify',
  //       data: null,
  //       params: {
  //         secret: 'YOUR_RECAPTCHA_SECRET_KEY',
  //         response: token,
  //       },
  //     });
  //     const { success, score } = response.data;
  //     if (success && score >= 5) {
  //       handleDownload(result);
  //     } else {
  //       swalToast.fire({
  //         icon: 'error',
  //         title: '發生錯誤，reCAPTCHA驗證失敗',
  //       });
  //     }
  //   } catch (err) {
  //     swalToast.fire({
  //       icon: 'error',
  //       title: '發生錯誤，reCAPTCHA驗證失敗',
  //     });
  //   }
  // };

  const getDownloadFile = async ({
    url,
    fileName,
    params,
  }: {
    url: string;
    fileName: string;
    params?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/download/${url}/`,
      params,
      responseType: 'arraybuffer',
      onDownloadProgress: (e: ProgressEvent) => {
        const percentage = Math.round((e.loaded * 100) / e.total);
        setProgress(percentage);
      },
    });
    if (result?.status === 'success') {
      // handleVerifyReaptcha({ token: '', result });
      handleDownloadAction({ result, fileName });
    } else {
      handleActions({
        result,
        error: {
          title: '發生錯誤，檔案讀取失敗',
        },
      });
    }
  };

  const handleDownload = ({
    url,
    fileName,
    params,
  }: {
    url: string;
    fileName: string;
    params?: any;
  }) => {
    getDownloadFile({ url, fileName, params });
  };

  return { handleDownload, progress };
};
