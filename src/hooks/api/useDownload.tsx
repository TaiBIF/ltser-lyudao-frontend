import { useState } from 'react';
import { saveAs } from 'file-saver';

import { swalToast } from 'helpers/customSwal';
import { useApi } from './useApi';

export const useDownload = () => {
  const { handleApi, handleActions } = useApi();

  const handleDownloadAction = ({
    result,
    id,
    year,
  }: {
    result: any;
    id: string;
    year: string;
  }) => {
    saveAs(result.response.data, `${id}_${year}.zip`);
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
    id,
    year,
  }: {
    url: string;
    id: string;
    year: string;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/download/${url}/`,
      params: {
        locationID: id,
        year,
      },
      responseType: 'blob',
    });
    if (result?.status === 'success') {
      // handleVerifyReaptcha({ token: '', result });
      handleDownloadAction({ result, id, year });
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，檔案讀取失敗',
        },
      });
    }
  };

  const handleDownload = ({
    url,
    id,
    year,
  }: {
    url: string;
    id: string;
    year: string;
  }) => {
    getDownloadFile({ url, id, year });
  };

  return { handleDownload };
};
