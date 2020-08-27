export type Project = {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  company: string;
  images: {
    primary: string;
    secondary: string[];
  };
};
