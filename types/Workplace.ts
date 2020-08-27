export type Workplace = {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  projects: string[];
  description: string;
  images: {
    primary: string;
    secondary: string[];
  };
};
