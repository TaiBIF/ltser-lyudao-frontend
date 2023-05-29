export type AsideItem = {
  id: number;
  title: string;
  link?: string;
  list?: AsideItem[];
};

export type EcoSearchItem = {
  id?: number | string;
  site: string;
  researcher: string;
  scientificName: string;
  cnName: string;
  number: number;
};

export type ShowState = {
  downloadPopup: boolean;
};
