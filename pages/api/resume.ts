import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    title: "My resume",
    name: "Riccardo Sacco",
    job: "Full Stack Developer",
    contacts: [
      {
        value: "+39 339 1848457",
        link: "tel:+393391848457",
        icon: "fa fa-phone-square-alt",
      },
      {
        value: "riccardo@itwebservices.it",
        link: "mailto:riccardo@itwebservices.it",
        icon: "fa fa-envelope-square",
      },
      {
        value: "riccardosacco.com",
        link: "https://riccardosacco.com",
        icon: "fa fa-globe",
      },
      {
        value: "Milan, Italy",
        link:
          "https://www.google.it/maps/place/IT+Web+Services/@45.4265459,9.2003332,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c45b08e126cb:0x29944543e6792cb7!8m2!3d45.4265459!4d9.2025219",
        icon: "fa fa-map-marker-alt",
      },
    ],
    avatar: "img/avatar.png",
    bio:
      "I’ve been passionate about programming since I was 13 and I love to learn. I believe in the learn-by-doing approach because I’ve always learned from mistakes. <br/>I love my job so much that it doesn’t feel like I'm working. Sometimes I make decisions, sometimes I change my mind, but everytime I get to the best solution.",
    works: {
      title: "Work experiences",
      items: [
        {
          title: "Cloud Engineer",
          company: "Sky Italia",
          link: "https://www.sky.it/",
          place: "Milan, Italy",
          icon: "sky.png",
          from: new Date("2020-10-12"),
          to: new Date(),
        },
        {
          title: "Back-end developer",
          company: "Bandyer",
          link: "https://www.bandyer.com/",
          place: "Milan, Italy",
          icon: "bandyer.png",
          from: new Date("2020-05-11"),
          to: new Date("2020-08-07"),
        },
        {
          title: "Lead Instructor",
          company: "Wild Code School",
          link: "https://wildcodeschool.com",
          place: "Milan, Italy",
          icon: "wildcodeschool.png",
          from: new Date("2020-01-01"),
          to: new Date("2020-05-20"),
          description:
            "Trainer at Wild Code School Milan, a school where students learn JavaScript, NodeJS and React to become Full Stack Developers",
        },
        {
          title: "Full Stack Developer",
          company: "IT Web Services",
          link: "https://itwebservices.it",
          icon: "itwebservices.png",
          from: new Date("2017-10-01"),
          to: new Date(),
        },
        {
          title: "IT Consultant",
          company: "IT Professional Services SAGL",
          link: "http://www.itproserv.net",
          place: "Lugano, Switzerland",
          icon: "itproserv.png",
          from: new Date("2017-06-01"),
          to: new Date(),
        },
        {
          title: "IT Manager",
          company: "IT Web Group S.r.l.s",
          link: "https://itwebgroup.org",
          icon: "itwebgroup.jpeg",
          from: new Date("2018-03-01"),
          to: new Date("2019-10-01"),
        },
        {
          title: "Business Owner",
          company: "HeverHosting",
          icon: "heverhosting.png",
          from: new Date("2014-02-01"),
          to: new Date("2018-11-01"),
        },
      ],
    },
    skills: {
      title: "Skills",
      items: [
        {
          topic: "Technical",
          list: [
            {
              value: "HTML5",
              icon: {
                name: "fab fa-html5",
                color: "#DE6E3C",
              },
            },
            {
              value: "CSS3",
              icon: {
                name: "fab fa-css3-alt",
                color: "#53A7DC",
              },
            },
            {
              value: "JavaScript",
              icon: {
                name: "fab fa-js-square",
                color: "#F1DE4F",
              },
            },
            {
              value: "React & React Native",
              icon: {
                name: "fab fa-react",
                color: "#62D4FA",
              },
            },
            {
              value: "Node.js",
              icon: {
                name: "fab fa-node-js",
                color: "#3B7EEB",
              },
            },
            {
              value: "Python",
              icon: {
                name: "fab fa-python",
                color: "#5769b8",
              },
            },
            {
              value: "PHP",
              icon: {
                name: "fab fa-php",
                color: "#787caf",
              },
            },
          ],
        },
        {
          topic: "Professional",
          list: [
            { value: "Project management" },
            { value: "Business development" },
            { value: "E-commerce" },
            { value: "Mobile app development" },
            { value: "Cloud computing" },
            { value: "Big data" },
            { value: "Machine learning" },
            { value: "Internet of Things" },
            { value: "3D Printing" },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Politecnico di Milano",
          title: "Ingegneria Informatica",
          icon: "polimi.png",
          from: 2019,
          to: 2022,
        },
        {
          school: "Istituto Maria Ausiliatrice",
          title: "Diploma Liceo Scientifico",
          icon: "maria-ausiliatrice.png",
          from: 2012,
          to: 2017,
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        {
          language: "Italian",
          level: "Native",
          icon: "italy",
        },
        {
          language: "English",
          level: "Professional",
          icon: "united-kingdom",
        },
        {
          language: "French",
          level: "Working",
          icon: "france",
        },
        {
          language: "Spanish",
          level: "Working",
          icon: "spain",
        },
      ],
    },
    interests: {
      title: "Interests",
      items: [
        { value: "Traveling" },
        { value: "Fitness" },
        { value: "Adventure" },
        { value: "Motorcycle" },
        { value: "Skiing" },
        { value: "Drone Photography" },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Loyable",
          icon: "loyable.png",
          subtitle:
            "Digital loyalty platform for businesses to simplify stamp-driven promotions",
        },
        {
          title: "ECOLab",
          icon: "ecolab.png",
          subtitle:
            "Virtualization of computers in school laboratories, to save energy and be self-sustained with solar panels",
        },
        {
          title: "3D Printing Laboratory",
          icon: "3dprinting.png",
          subtitle:
            "3D Printing laboratory in Milan, funded by ACLI, where we do courses for children & students",
        },
      ],
    },
  });
};
