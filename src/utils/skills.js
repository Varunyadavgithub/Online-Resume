import {
  FaReact,
  FaNode,
  FaShieldAlt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaBug,
  FaLaptopCode,
  FaSearch,
  FaListAlt,
  FaProjectDiagram,
  FaSitemap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiReact,
} from "react-icons/si";
import { MdPhonelinkLock } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";
import { FaDocker, FaAws, FaLinux, FaTools } from "react-icons/fa";
import { SiNginx, SiGithubactions, SiJenkins } from "react-icons/si";

export const skillsData = {
  frontend: [
    { icon: FaHtml5, title: "HTML5", color: "text-orange-600" },
    { icon: FaCss3Alt, title: "CSS3", color: "text-blue-600" },
    { icon: SiTailwindcss, title: "Tailwind CSS", color: "text-cyan-500" },
    { icon: FaBootstrap, title: "Bootstrap", color: "text-purple-600" },
    { icon: FaJs, title: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, title: "TypeScript", color: "text-blue-500" },
    { icon: FaReact, title: "React.js", color: "text-cyan-400" },
    {
      icon: SiNextdotjs,
      title: "Next.js",
      color: "text-gray-900 dark:text-white",
    },
    { icon: SiReact, title: "React Native", color: "text-sky-400" },
  ],

  backend: [
    { icon: FaNode, title: "Node.js", color: "text-green-600" },
    {
      icon: SiExpress,
      title: "Express.js",
      color: "text-gray-700 dark:text-gray-300",
    },
    { icon: SiMongodb, title: "MongoDB", color: "text-green-500" },
    { icon: SiMysql, title: "MySQL", color: "text-blue-500" },
    { icon: SiPostgresql, title: "PostgreSQL", color: "text-indigo-500" },
    { icon: FaDatabase, title: "MS SQL Server", color: "text-red-500" },
    { icon: FaNetworkWired, title: "RESTful APIs", color: "text-emerald-500" },
    { icon: FaGitAlt, title: "Git & GitHub", color: "text-orange-500" },
    {
      icon: MdPhonelinkLock,
      title: "Authentication & JWT",
      color: "text-violet-500",
    },
    {
      icon: FaProjectDiagram,
      title: "Data Structures & Algorithms",
      color: "text-pink-500",
    },
    {
      icon: FaSitemap,
      title: "Microservices Architecture",
      color: "text-teal-500",
    },
  ],

  devops: [
    { icon: FaLinux, title: "Linux Fundamentals", color: "text-yellow-500" },
    { icon: FaDocker, title: "Docker", color: "text-sky-500" },
    { icon: SiNginx, title: "Nginx", color: "text-green-600" },
    // {
    //   icon: SiGithubactions,
    //   title: "GitHub Actions",
    //   color: "text-indigo-500",
    // },
    // { icon: SiJenkins, title: "Jenkins", color: "text-red-500" },
    // { icon: FaAws, title: "AWS", color: "text-orange-400" },
    { icon: FaTools, title: "Build & Deployment", color: "text-gray-500" },
  ],

  cybersecurity: [
    { icon: FaLaptopCode, title: "Penetration Testing", color: "text-red-600" },
    {
      icon: FaSearch,
      title: "Vulnerability Assessment",
      color: "text-amber-500",
    },
    {
      icon: FaNetworkWired,
      title: "Networking Fundamentals",
      color: "text-blue-500",
    },
    { icon: FaShieldAlt, title: "Operating Systems", color: "text-slate-500" },
    { icon: FaBug, title: "Bug Bounty Hunting", color: "text-rose-500" },
    { icon: FaListAlt, title: "OWASP Top 10", color: "text-purple-600" },
  ],
};
