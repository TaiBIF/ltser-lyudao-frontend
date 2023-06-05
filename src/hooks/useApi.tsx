import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { API_URL } from 'utils/config';
import { swalToast } from 'helpers/customSwal';

import { ItemTypes } from 'types/utils';

type ResultItem = {
  type?: string;
  title: string;
};

type ActionItem = {
  type?: string;
  path: string;
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
  action?: ActionItem;
}

export const useApi = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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
    const { result, success, error, action } = actionParams;
    const { status, data } = result;
    switch (status) {
      case 200:
      case 201:
      case 204:
        switch (success.type) {
          case 'default':
          default:
            swalToast.fire({
              icon: 'success',
              title: success.title,
            });
            switch (action?.type) {
              case 'redirect':
                navigate(action?.path);
                break;
              default:
                break;
            }
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
