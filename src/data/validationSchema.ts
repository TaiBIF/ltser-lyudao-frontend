import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required('此欄位為必填'),
  contact: Yup.string().email('請輸入正確格式').required('此欄位為必填'),
  unit: Yup.string().required('此欄位為必填'),
  content: Yup.string().required('此欄位為必填'),
});

export const newsValidationSchema = Yup.object().shape({
  type: Yup.array()
    .of(Yup.string())
    .min(1, '至少需要選擇一項')
    .required('此欄位為必填'),
  title: Yup.string().required('此欄位為必填'),
  cover: Yup.string().required('此欄位為必填'),
});

export const newsTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
});

export const qaValidationSchema = Yup.object().shape({
  type: Yup.string().required('此欄位為必填'),
  question: Yup.string().required('此欄位為必填'),
  answer: Yup.string().required('此欄位為必填'),
});

export const qaTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
});

export const literatureValidationSchema = Yup.object().shape({
  name: Yup.string().required('此欄位為必填'),
});
