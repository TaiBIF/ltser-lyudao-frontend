import { useState } from 'react';
import axios from 'axios';

import { swalToast } from 'helpers/customSwal';
import { useApi } from './useApi';

export const useDownload = () => {
  const { handleApi, handleActions } = useApi();

  const handleDownloadAction = ({ result }: { result: any }) => {
    const { data } = result;
    const url = window.URL.createObjectURL(new Blob([data.response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.zip';
    link.click();
    window.URL.revokeObjectURL(url);
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

  const getDownloadFile = async ({ url, id }: { url: string; id: string }) => {
    const result = await handleApi({
      method: 'get',
      url: `/download/${url}`,
      params: {
        locationID: id,
      },
    });
    if (result?.status === 'success') {
      // handleVerifyReaptcha({ token: '', result });
      handleDownloadAction({ result });
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，檔案讀取失敗',
        },
      });
    }
  };

  const handleDownload = ({ url, id }: { url: string; id: string }) => {
    getDownloadFile({ url, id });
  };

  return { handleDownload };
};
