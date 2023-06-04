export type TabItem = {
  id: string;
  title: string;
};

export type QAItem = {
  id?: number | string;
  type: number | string;
  question: string;
  answer: string;
};

export type DownloadItem = {
  id: number | string;
  file: string;
  user_email: string;
  unit_role: number | string;
  purpose: string;
  status: number | string;
  submitted: string;
  expired: string;
};
