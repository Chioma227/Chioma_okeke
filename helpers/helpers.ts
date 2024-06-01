import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

//interfaces

interface linkschemaProps {
    //link interface
  href: string;
  name: string;
  exact?: boolean;
}
interface stackProps {
  //stack interface
  name: string;
  icon: React.ReactNode | any;
}
interface homeServiceProps {
  //home service interface
  name: string;
  label: number;
  description: string;
}

//array properties
const linkSchema: linkschemaProps[] = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
    exact: true,
  },
  {
    href: "/service",
    name: "Services",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const stackSchema: stackProps[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: RiNextjsLine,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "Redux",
    icon: BiLogoRedux,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Sass",
    icon: FaSass,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    name: "Zustand",
    icon: "z",
  },
];

const serviceSchema: homeServiceProps[] = [
  {
    label: 1,
    name: "web development",
    description:
      "Build modern, visually appealing, and user-friendly websites from the ground up,utilizing the latest technologies (HTML, CSS, JavaScript) to create interactive and dynamic experiences.",
  },
  {
    label: 2,
    name: "responsive web design",
    description:
      "Ensuring websites adapt seamlessly to different screen sizes (desktop, mobile, tablet),providing an optimal user experience regardless of the device used to access the website.",
  },
  {
    label: 3,
    name: "performance optimization",
    description:
      "Thoroughly analyzing website to identify performance bottlenecks,by utilizing various methods like code minification and image optimization to streamline website code and reduce file sizes.",
  },
];


//export schemas
export {linkSchema, stackSchema, serviceSchema };
