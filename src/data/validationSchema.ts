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
  newsDate: Yup.string().required('此欄位為必填'),
});

export const newsTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
});

export const qaValidationSchema = Yup.object().shape({
  type_id: Yup.string().required('此欄位為必填'),
  question: Yup.string().required('此欄位為必填'),
  answer: Yup.string().required('此欄位為必填'),
});

export const qaTypeValidationSchema = Yup.object().shape({
  title: Yup.string().required('此欄位為必填'),
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
  content: Yup.string().required('此欄位為必填'),
  image: Yup.string().required('此欄位為必填'),
});

export const aboutAttachmentAddValidationSchema = Yup.object().shape({
  type: Yup.string().required('此欄位為必填'),
  name: Yup.string().required('此欄位為必填'),
  content: Yup.string().required('此欄位為必填'),
});

export const aboutAttachmentEditValidationSchema = Yup.object().shape({
  type: Yup.string().required('此欄位為必填'),
  name: Yup.string().required('此欄位為必填'),
  content: Yup.string().required('此欄位為必填'),
});

export const searchValidationSchema = Yup.object().shape({});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('此欄位為必填')
    .min(8, '密碼須為8-12位含英文與數字')
    .matches(/[a-zA-Z]/, '密碼須為8-12位含英文與數字'),
  confirmPassword: Yup.string()
    .required('此欄位為必填')
    .oneOf([Yup.ref('password'), ''], '確認密碼不一致'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('請輸入有效的電子郵件地址')
    .required('請輸入您的帳號'),
  password: Yup.string().required('請輸入您的密碼'),
});

export const signupValidationSchema = Yup.object().shape({
  last_name: Yup.string().required('姓名為必填項目'),
  first_name: Yup.string().required('姓名為必填項目'),
  email: Yup.string()
    .email('請輸入有效的Email地址')
    .required('Email為必填項目'),
  password: Yup.string().required('密碼為必填項目'),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], '密碼不一致')
    .required('確認密碼為必填項目'),
});

export const resendEmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('請輸入有效的Email地址')
    .required('Email為必填項目'),
});

export const resetPswEmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('請輸入有效的Email地址')
    .required('Email為必填項目'),
});

export const resetPswValidationSchema = Yup.object().shape({
  password: Yup.string().required('密碼為必填項目'),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], '密碼不一致')
    .required('確認密碼為必填項目'),
});

export const applyDownloadValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('請輸入有效的Email地址')
    .required('Email為必填項目'),
  role: Yup.string().required('為必填項目'),
  content: Yup.string().required('為必填項目'),
});
