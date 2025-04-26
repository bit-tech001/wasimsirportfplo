import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Wasim Rahman",
  initials: "WR",
  url: "https://x.com/nawabwasimrahm1?s=21",
  location: "Vill: Balibat, Jelehuwagoan, Dergaon; Dist: Golaghat, Assam 785703 ",
  locationLink: "",
  description:
    "Assistant Professor passionate about technology and innovation. I love building things—from ideas to real-world solutions—and helping people grow. Always exploring new trends in tech and education. ",
  summary:
    "As an educator with a foundation in computer science, I specialize in demystifying the complex domains of artificial intelligence (AI), machine learning (ML), and data science. My passion lies in leveraging data to unravel complex challenges, and I enthusiastically impart this knowledge through dynamic courses tailored for a diverse audience of learners.",
  avatarUrl: "/logo.jpeg",
  skills: [
    " Big-Data Analytics",
    "UNIX/Linux Programming",
    " Programming in C",
    "Java",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Augmented Reality (AR)",
    " Virtual Reality (VR)",
    " research and development. ",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: " nawabwasimrahman@gmail.com",
    tel: "+91 8473073955, 7002434120",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nawabwasimrahman/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nawabwasimrahm1?s=21",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "THE ASSAM KAZIRANGA UNIVERSITY  ",
      href: "https://www.kzu.ac.in/",
      badges: [],
      location: "Jorhat,Assam,India",
      title: "Teaching Assistant",
      logoUrl: "/kuder.png",
      start: "February, 2023 ",
      end: " Present ",
      description:
        "Instruct courses on Machine Learning, Big Data Analytics, Java, Data Structures & Algorithms (DSA), and Computer Fundamentals for the Health Science Department. Engage in Augmented Reality (AR) and Virtual Reality (VR) research and development.  Mentor final-year students in research and project development, particularly in AR applications. ",
    },
    {
      company: "Data Operator",
      badges: [],
      href: "",
      location: "Remote",
      title: "Wind Assessment Project in Collaboration with KU and NRL",
      logoUrl: "/nrl.jpg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Collaborate with Kaziranga University (KU) and Numaligarh Refinery Limited (NRL) for wind data collection and analysis.  Oversee technical aspects of data acquisition, management, and report preparation for predictive analysis. ",
    },
    {
      company: "TechBlitzs",
      href: "",
      badges: [],
      location: "Jorhat,Assam,India",
      title: "Lead and manage the university’s Google Developer Student Club (GDSC)",
      logoUrl: "/tech.png",
      start: "April, 2024 ",
      end: "Present",
      description:
        "Lead and manage the university’s Google Developer Student Club (GDSC) and Coding Community, facilitating technical workshops and hackathons",
    },
    {
      company: "CODING COMMUNINTY And GDSC",
      href: "https://splunk.com",
      badges: [],
      location: "Jorhat,Assam,India",
      title: "Faculty Member",
      logoUrl: "/gdsc.png",
      start: "April, 2024",
      end: "Present",
      description:
        "Organize technical project exhibitions, encouraging students to develop and present innovative ideas",
    },
    {
      company: "Assam WebTech Digital Service Agency ",
      href: "https://heartfelt-conkies-b8d25c.netlify.app/?fbclid=PAZXh0bgNhZW0CMTEAAaZIoW8WYk5XblFbLTcWrZ5UJfvem8inSIDoh02a8hPuZVVIwSeXYIctCsc_aem_ReXuWhNVrB0ZpEB4Ansutw",
      badges: [],
      location: "Jorhat,Assam,India",
      title: "CEO,Founder",
      logoUrl: "/assam.png",
      start: "January 2024",
      end: "Present",
      description:
        "CEO of Assam Webtech, leading digital innovation with a passion for web development, branding, and online growth. Focused on empowering businesses in Assam and beyond through creative technology solutions and strategic marketing. Driving the future of digital excellence.",
    },
   
  ],
  education: [
    {
      school: "KAZIRANGA UNIVERSITY",
      href: "https://www.kzu.ac.in/",
      degree: "Doctor of Philosophy - PhD, Information Technology (Course Work Completed, CGPA: 8.33)    ",
      logoUrl: "/kuder.png",
      start: "2023",
      end: "2024",
      location:"assam"
    },
    {
      school: "DERGAON KAMAL DOWARH COLLEGE, DERGAON   ",
      href: "",
      degree: "AHSEC, Science Stream,",
      logoUrl: "/dkd.jpg",
      start: "August, 2024 ",
      end: "2021",
    },
    {
      school: "DON BOSCO HIGH SCHOOL, DERGAON   ",
      href: "",
      degree: "HIGH SCHOOL",
      logoUrl: "/school.jpg",
      start: "2012",
      end: "2014",
    },
    
  ],
  projects: [
    {
      title: "AR Navigation System ",
      href: "",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "(Open-Source Mobile Application) A real-time Augmented Reality–based navigation app for enhanced indoor and outdoor routing experiences. ",
      technologies: [
        "Unity 3D",
        "ARCore,",
        " C#",
        " Firebase",
        
      ],
      links: [
        {
          type: "Open-Source Mobile Application",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/p1.png",
      video:
        "",
    },
    {
      title: "Sentiment Analysis on IMDB Reviews ",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Analyzes user sentiment for movie ratings and preferences using NLP techniques.",
      technologies: [
        " Python",
        "NLTK",
        "Scikit-learn",
        " Jupyter Notebook",
        
      ],
      links: [
        {
          type: "Analysis",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/p2.png",
      video: "",
    },
    {
      title: "Handwritten Character Recognition Using Neural Networks ",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A project that uses neural networks to recognize handwritten characters from images. It trains a model on datasets like MNIST using CNNs to accurately predict the written letters or digits.",
      technologies: [
        "Python",
        "TensorFlow/Keras",
        "MNIST Dataset",
        "Jupyter Notebook",
      
      ],
      links: [
        {
          type: "Neural Networks",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "/p3.jpg",
      video: "",
    },
    {
      title: "Music Genre Classification ",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A project that uses neural networks to classify music tracks into genres by analyzing their audio features like tempo, pitch, and rhythm patterns, trained on datasets like GTZAN.",
      technologies: [
        "Python",
        "TensorFlow/Keras",
        "Librosa (for audio processing)",
        "GTZAN Dataset",
        "Jupyter Notebook",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/p4.jpg",
      video:
        "",
    },
    {
      title: "Blood Bank Information System",
      href: "",
      dates: "2017",
      active: true,
      description:
        "A project designed to manage and organize blood donor and recipient information, helping hospitals and blood banks track blood availability and donations efficiently.  A system to manage donor, recipient, and blood inventory information for hospitals and blood banks.",
      technologies: [
        "PHP",
        "Java",
        "Python",
        "MySQL (Database)",
        "Bootstrap (for UI)",
        "XAMPP/WAMP (for local server)"
        
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/p6.jpg",
      video:
        "",
    },
    {
      title: "Image Processing & Machine Learning for MRI Brain Tumor Detection  ",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A project that combines image processing and machine learning to detect brain tumors from MRI scans, helping in early diagnosis and treatment planning",
      technologies: [
        "Python",
        "TensorFlow/Keras",
        "OpenCV (for image processing)",
        "Scikit-learn",
        "MRI Brain Tumor Dataset",
        "Jupyter Notebook"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/p5.jpg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Refined U-Net Architecture for Accurate Cloud Segmentation in Multispectral Satellite Imagery ",
      dates: "2024",
      location: "India",
      description:
        "A Case Study of Majuli's Cloud-Covered Terrain (Accepted at IEEE - InGARSS, 2024)",
      image:
        "/pu1.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Segmentation Techniques for MRI Brain Tumor Images: A Critical Study",
      dates: "2018",
      location: "India",
      description:
        "(Published at IEEE RICE, 2018)  Bora, N. W. Rahman, and D. J. Bora, 2018 International Conference on Research in Intelligent and Computing in Engineering (RICE), El Salvador. DOI: 10.1109/RICE.2018.8509075",
      image:
        "/pub2.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Faculty Development Program (FDP) on Scientific Software ",
      dates: "july 2024",
      location: "India",
      description:
        "Organized by the Department of Mathematics, Kaziranga University (July 2024) ",
      icon: "public",
      image:
        "/pub3.jpg",
      links: [],
    },
    {
      title: "Event Coordinator – Talent Tantra (Cultural & Technical Fest)",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Managed and organized university dance team performances (Since 2015) ",
      image:
        "/pub5.jpg",
      
    },
   
    
   
   
  ],
} as const;
