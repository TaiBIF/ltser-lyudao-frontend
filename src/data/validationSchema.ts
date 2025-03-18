import * as Yup from 'yup';

import i18n from 'i18next';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'validationSchema';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

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
  newsDate: Yup.string().required('此欄位為必填'),
});

export const newsTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
});

export const qaValidationSchema = Yup.object().shape({
  type_id: Yup.string().required('此欄位為必填'),
  question: Yup.string().required('此欄位為必填'),
  question_en: Yup.string().required('此欄位為必填'),
  answer: Yup.string().required('此欄位為必填'),
  answer_en: Yup.string().required('此欄位為必填'),
});

export const qaTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
  title_en: Yup.string().required('此欄位為必填'),
});

export const literatureValidationSchema = Yup.object().shape({
  name: Yup.string().required('此欄位為必填'),
});

export const formLinkValidationSchema = Yup.object().shape({
  name: Yup.string().required('此欄位為必填'),
});

export const aboutValidationSchema = Yup.object().shape({
  type: Yup.string().required('此欄位為必填'),
  name: Yup.string().required('此欄位為必填'),
  name_en: Yup.string().required('此欄位為必填'),
  content: Yup.string().required('此欄位為必填'),
  content_en: Yup.string().required('此欄位為必填'),
  // image: Yup.string().required('此欄位為必填'),
});

export const aboutAttachmentAddValidationSchema = Yup.object().shape({
  type: Yup.string().required('此欄位為必填'),
  name: Yup.string().required('此欄位為必填'),
  content: Yup.string().required('此欄位為必填'),
});

export const aboutAttachmentEditValidationSchema = Yup.object().shape({
  // type: Yup.string().required('此欄位為必填'),
  // name: Yup.string().required('此欄位為必填'),
  // content: Yup.string().required('此欄位為必填'),
});

export const searchValidationSchema = Yup.object().shape({});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`))
    .min(8, i18n.t(`${I18N_KEY_PREFIX}.passwordForm`))
    .matches(/[a-zA-Z]/, i18n.t(`${I18N_KEY_PREFIX}.passwordForm`)),
  confirmPassword: Yup.string()
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`))
    .oneOf(
      [Yup.ref('password'), ''],
      i18n.t(`${I18N_KEY_PREFIX}.confirmPassword`)
    ),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email(i18n.t(`${I18N_KEY_PREFIX}.emailForm`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  password: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const signupValidationSchema = Yup.object().shape({
  last_name: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  first_name: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  email: Yup.string()
    .email(i18n.t(`${I18N_KEY_PREFIX}.emailForm`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  password: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], i18n.t(`${I18N_KEY_PREFIX}.confirmPassword`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const resendEmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t(`${I18N_KEY_PREFIX}.emailForm`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const resetPswEmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t(`${I18N_KEY_PREFIX}.emailForm`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const resetPswValidationSchema = Yup.object().shape({
  password: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], i18n.t(`${I18N_KEY_PREFIX}.confirmPassword`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const applyDownloadValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t(`${I18N_KEY_PREFIX}.emailForm`))
    .required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  role: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  content: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  first_name: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
  last_name: Yup.string().required(i18n.t(`${I18N_KEY_PREFIX}.required`)),
});

export const userValidationSchema = Yup.object().shape({
  first_name: Yup.string().required('此欄位為必填'),
  last_name: Yup.string().required('此欄位為必填'),
  role: Yup.string().required('此欄位為必填'),
});

export const socialInterviewDataSchema = Yup.object().shape({});

export const visitorValidationSchema = Yup.object().shape({
  year: Yup.string().required('此欄位為必填'),
  visitors: Yup.string().required('此欄位為必填'),
});
