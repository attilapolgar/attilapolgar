import { Project } from "./types/Project";
import { Workplace } from "./types/Workplace";

export const data: {
  projects: Project[];
  workplaces: Workplace[];
} = {
  projects: [
    {
      id: "mpa",
      name: "Multi Product Adviser",
      startDate: "2014-10-11",
      endDate: "2015-6-15",
      description: "multi product adviser",
      technologies: ["angularjs", "less", "gulp", "webpack"],
      company: "aiss",
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "dba",
      name: "Dust Bag Adviser",
      startDate: "2015-10-11",
      endDate: "2016-5-11",
      description: "multi product adviser",
      technologies: ["angularjs", "less", "gulp", "webpack"],
      company: "aiss",
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "liverobe",
      name: "LiveRobe",
      description: "LiveRobe rulz",
      startDate: "2018-10-01",
      endDate: undefined,
      technologies: ["react-native", "firebase"],
      company: "dina",
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "freebees",
      name: "FreeBees",
      startDate: "2019-03-01",
      endDate: undefined,
      description: "FreeBees rulz",
      technologies: ["react"],
      company: "dina",
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "tradeproofer",
      name: "TradeProofer",
      description: "TPke",
      technologies: ["anguarjs", "react", "vue"],
      company: "tradeproofer",
      startDate: "2013-09-10",
      endDate: undefined,
      images: {
        primary: "",
        secondary: [],
      },
    },
  ],
  workplaces: [
    {
      id: "aiss",
      name: "AISS",
      startDate: "2014",
      endDate: "2016",
      description: "aiss lol",
      projects: ["mpa", "dba"],
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "dina",
      name: "Digital Natives",
      startDate: "2018-8-06",
      endDate: undefined,
      description: "dina lol",
      projects: ["liverobe", "freebees"],
      images: {
        primary: "",
        secondary: [],
      },
    },
    {
      id: "tradeproofer",
      name: "TradeProffer",
      startDate: "2018-8-06",
      endDate: undefined,
      description: "TP lol",
      projects: ["tradeproofer"],
      images: {
        primary: "",
        secondary: [],
      },
    },
  ],
};

export default data;
