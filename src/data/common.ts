import i18n from 'i18next';

import { FooterLogoItem } from 'types/common';

import ftlogoImg1 from 'image/ftlogo1.png';
import ftlogoImg2 from 'image/ftlogo2.png';
import ftlogoImg3 from 'image/ftlogo3.png';
import ftlogoImg4 from 'image/ftlogo4.png';
import ftlogoImg5 from 'image/ftlogo5.png';
import ftlogoImg6 from 'image/ftlogo6.png';
import ftlogoImg7 from 'image/ftlogo7.png';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'common';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

export const footerLogoList: FooterLogoItem[] = [
  {
    id: 1,
    img: ftlogoImg1,
    title: '',
    width: '348px',
    link: '/',
  },
  {
    id: 2,
    img: ftlogoImg2,
    title: '',
    link: '/',
  },
  {
    id: 3,
    img: ftlogoImg3,
    title: '',
    link: '/',
  },
  {
    id: 4,
    img: ftlogoImg4,
    title: '',
    link: '/',
  },
  {
    id: 5,
    img: ftlogoImg5,
    title: '',
    link: '/',
  },
  {
    id: 6,
    img: ftlogoImg6,
    title: '',
    link: '/',
  },
  {
    id: 7,
    img: ftlogoImg7,
    title: '',
    width: '100px',
    link: '/',
  },
];

// footerMenuList
// FooterMenuItem[]
export const generateFooterMenuList = () => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.about`),
    list: [
      {
        id: 1,
        subtitle: i18n.t(`${I18N_KEY_PREFIX}.menu.title.ecologicalObservation`),
        link: '/about/ecological-observation',
      },
      {
        id: 2,
        subtitle: i18n.t(
          `${I18N_KEY_PREFIX}.menu.title.environmentalObservation`
        ),
        link: '/about/environmental-observation',
      },
      {
        id: 3,
        subtitle: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialObservation`),
        link: '/about/social-observation',
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.siteData`),
    list: [
      {
        id: 1,
        subtitle: i18n.t(`${I18N_KEY_PREFIX}.menu.title.ecologicalObservation`),
        link: '/site-data/ecological-observation',
      },
      {
        id: 2,
        subtitle: i18n.t(
          `${I18N_KEY_PREFIX}.menu.title.environmentalObservation`
        ),
        link: '/site-data/environmental-observation',
      },
      {
        id: 3,
        subtitle: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialObservation`),
        link: '/site-data/social-observation/social-economy-data',
      },
    ],
  },
  {
    id: 3,
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.news`),
        link: '/news',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.relatedLiterature`),
        link: '/related-literature',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.qa`),
        link: '/qa',
      },
    ],
  },
];

// headerMenuList
// HeaderMenuItem[]
export const generateHeaderMenuList = () => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.about`),
    type: 'mega',
    link: 'about',
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.ecologicalObservation`),
        link: 'ecological-observation',
        list: [],
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.environmentalObservation`),
        link: 'environmental-observation',
        list: [],
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialObservation`),
        link: 'social-observation',
        list: [],
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.siteData`),
    type: 'sec',
    link: 'site-data',
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.ecologicalObservation`),
        link: 'ecological-observation',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.environmentalObservation`),
        link: 'environmental-observation',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialObservation`),
        link: 'social-observation',
        list: [
          {
            id: 1,
            title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialEconomyData`),
            link: 'social-economy-data',
          },
          {
            id: 2,
            title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.fishing`),
            link: 'fishing',
          },
          {
            id: 3,
            title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.socialInterviewData`),
            link: 'social-interview-data',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.news`),
    link: 'news',
  },
  {
    id: 4,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.relatedLiterature`),
    link: 'related-literature',
  },
  {
    id: 5,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.qa`),
    link: 'qa',
  },
  {
    id: 6,
    title: i18n.t(`${I18N_KEY_PREFIX}.menu.title.formLink`),
    link: 'form-link',
    show: 'auth',
  },
];

// routeList
// HeaderMenuItem[]
export const generateRouteList = () => [
  ...generateHeaderMenuList(),
  {
    id: 0,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.home`),
    link: '',
  },
  {
    id: 7,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.contact`),
    link: 'contact',
  },
  {
    id: 8,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.forgotPassword`),
    link: 'forgot-password',
  },
  {
    id: 9,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.mailVerification`),
    link: 'mail-verification',
  },
  {
    id: 10,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.signupSuccess`),
    link: 'signup-success',
  },
  {
    id: 10,
    title: i18n.t(`${I18N_KEY_PREFIX}.route.title.terms`),
    link: 'terms',
  },
];
