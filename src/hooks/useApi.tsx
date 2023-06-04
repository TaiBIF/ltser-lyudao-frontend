import { useState } from 'react';
import axios from 'axios';

import { API_URL } from 'utils/config';
import { swalToast } from 'helpers/customSwal';

import { ItemTypes } from 'types/utils';

type ResultItem = {
  type?: string;
  title: string;
};

interface apiParamsProps {
  type: string;
  method: string;
  params: ItemTypes;
  data: ItemTypes;
  url: string;
}

interface actionParamsProps {
  result: any;
  success: ResultItem;
  error: ResultItem;
}

export const useApi = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getApiData = async (apiParams: apiParamsProps) => {
    const { type = 'api', method, params, data, url } = apiParams;
    setLoading(true);
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
        method: method,
        baseURL: baseUrl,
        url: url,
        params: params,
        data: data,
      });
      if (method !== 'get') {
        setResult(response);
      }
      return response;
    } catch (err) {
      if ((err as any).response) {
        setResult((err as any).response);
        return (err as any).response;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleActions = (actionParams: actionParamsProps) => {
    const { result, success, error } = actionParams;
    const { status, data } = result;
    switch (status) {
      case 200:
        switch (success.type) {
          case 'default':
          default:
            swalToast.fire({
              icon: 'success',
              title: success.title,
            });
            return;
        }
      default:
        swalToast.fire({
          icon: 'error',
          title: error.title,
        });
        break;
    }
  };

  return [result, loading, getApiData, handleActions];
};
