export type TabItem = {
  id: string;
  title: string;
};

export type DownloadItem = {
  [key: string]: any;
  id: number | string;
  file: string;
  user_email: string;
  unit_role: number | string;
  purpose: string;
  status: number | string;
  submitted: string;
  expired: string;
};
