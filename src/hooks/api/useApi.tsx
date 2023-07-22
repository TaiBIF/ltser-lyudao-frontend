import { useState } from 'react';
import axios from 'axios';
import { To, useNavigate } from 'react-router-dom';

import { API_URL } from 'utils/config';
import { swalToast } from 'helpers/customSwal';

type ResultItem = {
  type?: string;
  title: string;
};

type ActionItem = {
  type?: string;
  path?: string;
};

interface apiParamsProps {
  type?: string;
  method: string;
  params?: any;
  data?: FormData;
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
        case 'api':
        default:
          baseUrl = API_URL;
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
        default:
          break;
      }
    };
    if (result.response) {
      switch (result.response.status) {
        case 200:
        case 201:
        case 204:
          switch (success?.type) {
            case 'default':
            default:
              swalToast.fire({
                icon: 'success',
                title: success?.title,
              });
              handleAction();
              return;
          }
        default:
          swalToast.fire({
            icon: 'error',
            title: error?.title,
          });
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

  return { loading, handleApi, handleActions };
};
