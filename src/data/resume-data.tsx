import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Matthew Schleder",
  initials: "MS",
  location: "Raleigh, NC",
  locationLink: "https://www.google.com/maps/place/Raleigh",
  about:
    "Software Engineer with a passion for Full Stack Engineering and DevOps",
  summary:
    "I am a proven leader with a track record of leading development teams, implementing innovative solutions, and driving technical initiatives",
  avatarUrl: "https://avatars.githubusercontent.com/u/76051012?v=4",
  personalWebsiteUrl: "https://schleder.us",
  contact: {
    email: "schledermatthew@gmail.com",
    tel: "+19727466568",
    social: [
      {
        name: "Personal GitHub",
        url: "https://github.com/MatthewSchleder",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthewschleder/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "West Texas A&M University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "SAS Institute, Inc",
      link: "https://www.sas.com",
      badges: ["Cary, NC"],
      techUsed: [
        "Kubernetes",
        "Jenkins",
        "GitLab",
        "Ansible",
        "AWS",
        "Azure",
        "GCP",
      ],
      title: "Sr. Associate Software Developer → Software Developer",
      logo: ParabolLogo,
      start: "2020",
      end: "2023",
      description:
        "Led the development of multiple internal tools at SAS, supporting numerous engineering teams with Kubernetes deployments across various cloud platforms.",
    },
    {
      company: "Avalara",
      link: "https://www.avalara.com/",
      badges: ["Durham, NC"],
      techUsed: ["MS SQL", "SOAP/REST API", "GitLab", "Terraform"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2017",
      end: "2020",
      description:
        "Designed and implemented a DevOps CI/CD process from scratch at Avalara, integrating with GitLab and enhancing deployment efficiency.",
    },
    {
      company: "Operative Flow Technologies",
      link: "https://www.operativeflow.com/",
      badges: ["Remote", "Contract"],
      techUsed: ["REST API", "User Interface Design"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2018",
      description:
        "Developed REST APIs for surgical room automation, and designed a user interface for patient communication.",
    },
    {
      company: "Fidelity Investments",
      link: "https://www.fidelity.com/",
      badges: ["Durham, NC"],
      techUsed: ["Spring", "Angular", "PL/SQL", "REST", "Java"],
      title: "Associate Software Engineer",
      logo: NSNLogo,
      start: "2017",
      end: "2017",
      description:
        "Underwent comprehensive Full Stack technical training, covering Spring, Angular, PL/SQL, REST, and Java Collaborated with an Agile team to develop a full-stack application using Test-Driven Development.",
    },
    {
      company: "Fidelity Investments",
      link: "https://www.fidelity.com/",
      badges: ["Westlake, TX"],
      techUsed: ["z/OS", "IBM Mainframes"],
      title: "Software Engineering Intern",
      logo: NSNLogo,
      start: "2015",
      end: "2016",
      description:
        "Developed backend projects for various Mainframe applications, including z/OS on 8 IBM Mainframes.",
    },
  ],
  skills: [
    {
      title: "DevOps",
      skillItems: [
        "CI/CD (GitLab/AWS)",
        "Pipelines (GitLab/Jenkins)",
        "Cloud Computing (AWS)",
        "Shell Scripting (Linux/Windows)",
        "Containers (Docker)",
        "Ansible (YAML)",
      ],
    },
    {
      title: "AWS",
      skillItems: ["EC2", "S3", "VPC", "Route53", "Secrets Manager"],
    },
    {
      title: "Mid-Tier",
      skillItems: ["API (SOAP/REST)"],
    },
    {
      title: "Back-End",
      skillItems: [
        "Stored Procs (MSSQL/Oracle)",
        "Triggers (MSSQL)",
        "Schema Creation (MSSQL/Oracle)",
      ],
    },
    {
      title: "Version Control",
      skillItems: ["Git (GitFlow, GitHubFlow, GitLabFlow)"],
    },
    {
      title: "Front-End",
      skillItems: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "Windows Forms",
        "AJAX",
        "XML",
      ],
    },
  ],
  projects: [
    {
      title: "BuzzTender",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart",
        "Firebase Firestore",
        "Firebase Storage",
        "Firebase Auth",
      ],
      description:
        "Multi-platform app for video-based challenges with friends, local/global groups, and the world",
      logo: ConsultlyLogo,
      link: {
        label: "buzztender.app",
        href: "https://buzztender.app/",
      },
    },
    {
      title: "BT Pace - Pacing Calculator",
      techStack: ["Side Project", "Flutter", "Dart"],
      description:
        "Calculate Running Paces with Ease with predictive modeling for accurate timing and pace calculations",
      logo: MonitoLogo,
      link: {
        label: "BT Pace",
        href: "https://apps.apple.com/us/app/bt-pace-pace-calculator/id6450400215",
      },
    },
    {
      title: "DYHP - Do You Have Plans",
      techStack: [
        "Side Project",
        "Typescript",
        "Next.js",
        "AWS Lambda",
        "FastAPI",
        "PostgreSQL",
        "Vercel",
      ],
      description:
        "Vacation planning web-app that enables anyone to create crowd-sourced shareable calendars",
      logo: JarockiMeLogo,
      link: {
        label: "doyouhaveplans.com",
        href: "https://doyouhaveplans.com/",
      },
    },
    {
      title: "Schleder.us",
      techStack: ["Side Project", "Vue.js", "Netlify"],
      description: "Open-source resume site for the Schleder family",
      logo: Minimal,
      link: {
        label: "schleder.us",
        href: "https://schleder.us/",
      },
    },
    {
      title: "TrakRx",
      techStack: ["Side Project", "Java", "Swift"],
      description:
        "Developed and sold a training application to WTAMU for individualized workout predictions",
      logo: BarepapersLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.treasureapps.matthew.wttrackandfield&hl=en&gl=US",
      },
    },
  ],
} as const;
