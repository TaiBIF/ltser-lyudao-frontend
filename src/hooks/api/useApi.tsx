import { useState } from 'react';
import axios from 'axios';
import { To, useNavigate } from 'react-router-dom';

import { API_URL, AUTH_URL } from 'utils/config';
import { swalToast } from 'helpers/customSwal';

type ResultItem = {
  type?: string;
  title?: string;
  action?: any;
};

type ActionItem = {
  type?: string;
  path?: string;
  action?: any;
};

interface apiParamsProps {
  type?: string;
  method: string;
  params?: any;
  data?: FormData | any;
  url: string;
  headers?: any;
  responseType?: any;
  onDownloadProgress?: any;
}

interface actionParamsProps {
  result?: any;
  success?: ResultItem;
  error?: ResultItem;
  action?: ActionItem;
}

export const useApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleApi = async (apiParams: apiParamsProps) => {
    const {
      type = 'api',
      method,
      params,
      data,
      url,
      headers,
      responseType,
      onDownloadProgress,
    } = apiParams;
    setLoading(true);
    let result;
    try {
      let baseUrl;
      let response;
      switch (type) {
        case 'auth':
          baseUrl = AUTH_URL;
          break;
        case 'api':
          baseUrl = API_URL;
          break;
        default:
          baseUrl = '';
          break;
      }
      response = await axios({
        method,
        baseURL: baseUrl,
        url,
        params,
        data,
        headers,
        responseType,
        onDownloadProgress,
      });
      result = { status: 'success', response };
    } catch (err) {
      result = { status: 'error', response: (err as any).response };
    } finally {
      setLoading(false);
      return result;
    }
  };

  const handleActions = (actionParams: actionParamsProps) => {
    const { result, success, error, action } = actionParams;
    const handleAction = () => {
      switch (action?.type) {
        case 'redirect':
          navigate(action?.path as To);
          break;
        case 'custom':
          action.action();
          break;
        default:
          break;
      }
    };
    if (result.response) {
      switch (result.response.status) {
        case 200:
        case 201:
        case 204:
          if (success?.title) {
            swalToast.fire({
              icon: 'success',
              title: success.title,
            });
          }
          if (success?.action) {
            success.action();
          }
          handleAction();
          break;
        default:
          swalToast.fire({
            icon: 'error',
            title: error?.title,
          });
          if (error?.action) {
            error?.action();
          }
          handleAction();
          break;
      }
    } else {
      swalToast.fire({
        icon: 'error',
        title: error?.title,
      });
      handleAction();
    }
  };

  return { loading, setLoading, handleApi, handleActions };
};
