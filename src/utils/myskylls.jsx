import { SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

import JavascriptPage from '../components/layouts/skills-pages/javascriptPage/JavascriptPage';
import NextPage from '../components/layouts/skills-pages/nextPage/NextPage';

const SKILLS = [
    {
        name: "JavaScript",
        classTheme: "javascript-theme",
        colorPointer: "#857e5700",
        data: {
            logo: <SiJavascript size="2rem" />,
            title: "JavaScript",
            percentege: 90,
            lenguagePage: <JavascriptPage />,
        },
    },
    {
        name: "Next.js",
        classTheme: "next-theme",
        colorPointer: "#cccccc1e",
        data: {
            logo: <TbBrandNextjs size="2rem" />,
            title: "Next.js",
            percentege: 70,
            lenguagePage: <NextPage />,
        },
    },
    { name: "React.js", classTheme: "react-theme", colorPointer: "#1d4ed826" },
    { name: "Vue.js", classTheme: "vue-theme", colorPointer: "#2d2d2d28" },
    { name: "Nuxt.js", classTheme: "nuxt-theme", colorPointer: "#032731" },
    { name: "Tailwind", classTheme: "tailwind-theme", colorPointer: "#731aad26" },
    {
        name: "API Consume",
        classTheme: "api-consume-theme",
        colorPointer: "#00dfb215",
    },
    { name: "Node.js", classTheme: "node-theme", colorPointer: "#cccccc18" },
    {
        name: "Express.js",
        classTheme: "express-theme",
        colorPointer: "#cccccc7c",
    },
    { name: "Mongoose", classTheme: "mongoose-theme", colorPointer: "#ffe8e88a" },
    { name: "MongoDB", classTheme: "mongodb-theme", colorPointer: "#01380125" },
    { name: "API REST", classTheme: "api-rest-theme", colorPointer: "#00000000" },
    { name: "Figma", classTheme: "figma-theme", colorPointer: "#dfdfdf" },
    { name: "WordPress", classTheme: "wordpress-theme", colorPointer: "#e0f7ff" },
];

export default SKILLS