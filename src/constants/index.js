import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import currency from "../assets/projects/currency.png";
import realTimeChat from '../assets/projects/realTimeChat.png'
import docs from '../assets/projects/docs.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, Python, MySQL, PostgreSQL, and MongoDB.`;

export const ABOUT_TEXT = `I am a motivated and adaptable full stack developer with 9 months of hands-on experience building efficient and user-friendly web applications. I have worked extensively with technologies like React, Node.js, MySQL, PostgreSQL, and MongoDB, enabling me to develop robust and scalable solutions.
My journey into web development was driven by a strong curiosity to understand the mechanics behind web technologies.`

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Associate Software Engineer",
    company: "Hexaware Technologies Limited.",
    description: `Worked as Frontend Web Developer to build applications using JavaScript, React.js, and Springboot. Implemented RESTful APIs and integrated with MySql databases.`,
    technologies: ["Javascript", "React.js", "Springboot", "MySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Currency Converter Website",
    link:"https://currencyconverterrjs.netlify.app/",
    image: currency,
    description:
      "A Currency Converter app that dynamically converts amounts between currencies in real-time, featuring a swap option, responsive design, and precise formatting.",
    technologies: ["HTML", "Tailwind CSS", "React Js"],
  },
  {
    title: "Real Time Chat App",
    link:"https://chatappusingreactnode.netlify.app/",
    image: realTimeChat,
    description:
      "A powerful real-time chat application offering dynamic room management, instant messaging, and robust CORS support for seamless cross-origin communication.",
    technologies: ["React (Vite)","Node.js", "Express", "Socket.IO", "CORS"],
  },
  {
    title: "Mini Docs App",
    link:"https://minidocsreact.netlify.app/",
    image: docs,
    description:
      "A dynamic card interface that allows users to drag cards within constraints, view file information, and download the card's description content as a text file. Features include smooth animations and customizable tags.",
    technologies: ["React", "Framer Motion", "JavaScript (Blob API)", "React Icons", "CSS (Tailwind CSS)"],
  },
  // {
  //   title: "Aladdin, Magic Carpet",
  //   link: "https://aladin-carpet.netlify.app/", 
  //   image:project5,
  //   description: "A fun and dynamic React game where you control Aladdin on his magic carpet, dodging obstacles and avoiding collisions while collecting points.",
  //   technologies: ["React", "JavaScript", "CSS", "HTML"]
  // },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "6/51, New Street, Peravali Village, Maddikera Mandal, Kurnool District, Andhra Pradesh, 518390",
  phoneNo: "+91 7036977462 ",
  email: "2493saicharan@gmail.com",
};
