export type QAItem = {
  [key: string]: any;
  id?: number | string;
  type_id: number | string;
  question: string;
  answer: string;
};

export type FilterItem = {
  type: number | string;
};
