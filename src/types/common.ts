export type HeaderShowState = {
  [key: string]: any;
  menu3: boolean;
  menu3Map: { [key: string]: boolean };
  mainMenu: boolean;
  mobile: boolean;
  loginPopup: boolean;
  loginContent: string;
};

export type HeaderLoginContentState = {
  class: string;
  text: string;
};

export type HeaderMenuItem = {
  id: number | string;
  title?: string;
  name?: string;
  type?: string;
  link?: string;
  list?: HeaderMenuItem[];
  show?: string;
  requiredGroup?: string[];
};

export type FooterLogoItem = {
  id: number | string;
  img: string;
  title: string;
  width?: string;
  link?: string;
};
export type FooterSociIconItem = {
  id: number | string;
  img: JSX.Element;
  link: string;
};
export type FooterSubMenuItem = {
  id: number | string;
  title?: string;
  subtitle?: string;
  link: string;
};
export type FooterMenuItem = {
  id: number | string;
  title?: string;
  list?: FooterSubMenuItem[];
  link?: string;
};

export type BannerData = {
  title: string;
  en: string[];
  maskImg?: boolean;
  bgImg?: string;
};
