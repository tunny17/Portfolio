import {
  creator,
  web,
  ilorin,
  shopmora,
  classroomio,
  experienceOne,
  exerienceTwo,
  exerienceThree,
  exerienceFour,
  exerienceFive,
  exerienceSeven,
  exerienceNine,
  stuntMedia,
  express,
  kidan,
  c,
} from '/public/assets';

export const navLinks = [
  {
    id: '#about',
    title: 'Summary',
  },
  {
    id: '#work',
    title: 'Experience',
  },
  {
    id: '#projects',
    title: 'Projects',
  },
  {
    id: 'https://drive.google.com/file/d/1DWTHvvBq3hRdCwYiBwzjkfiYaAKDcLuD/view?usp=sharing',
    title: 'Resume',
  },
  {
    id: '#contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'UI Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React JS',
  },
  {
    name: 'Redux Toolkit',
  },
  {
    name: 'svelte Js',
  },
  {
    name: 'Node Js',
  },
  {
    name: 'Express Js',
  },
  {
    name: '.NET',
  },
  {
    name: 'Python',
  },
  {
    name: 'supabase',
  },
  {
    name: 'firebase',
  },
  {
    name: 'Bootstrap',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'sass',
  },
  {
    name: 'git',
  },
  {
    name: 'figma',
  },
];

const experiences = [
  {
    title: 'Open Source Fullstack Developer (Svelte Js & Node Js)',
    company_name: 'ClassroomIO',
    icon: classroomio,
    link: 'https://github.com/rotimi-best/classroomio',
    iconBg: '#383E56',
    points: [
      'Implemented a multi-translations feature on the platform which aids easy use of the platform amongst other things for users around the world.',
      'Wrote a script on the backend that translates the English json file into multiple languages to take away the burden of translating for different languages on other contributors.',
      'Implemented an AI feature which helps generate Outlines, Notes and Questions for students.',
      'Contributed to the enhancement of system performance by optimizing and refining existing code, improving the overall efficiency of both frontend and backend processes.',
      'Actively engaged in collaborative code reviews, providing and receiving constructive feedback to enhance the overall codebase and development process. This process contributed to the continuous improvement of the codebase and the overall development workflow.',
    ],
  },
  {
    title: 'Frontend Developer (React Js)',
    company_name: 'Mixed Fraction',
    icon: '',
    link: 'https://github.com/MixedFraction-devs',
    iconBg: '#383E56',
    points: [
      'Developer user interfaces using Chakra UI and other component libraries, ensuring sleek and responsive designs that enhance user experience.',
      'Actively participated in code reviews, debugging and pair programming sessions providing constructive feedback. This process contributed to the continuous improvement of the codebase and the overall development workflow.',
      'Engaged in knowledge-sharing initiatives within the team, facilitating skill development and fostering a collaborative environment conducive to efficient problem-solving and project success.',
      'Assisted with the implementation of features, both on the frontend and backend, enhancing the overall functionality and user experience of the platform.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Kidan',
    icon: '',
    link: 'https://kidanstore.vercel.app/',
    iconBg: '#383E56',
    points: [
      'Orchestrated the creation of an aesthetically pleasing and user-friendly frontend website for a small-scale fashion business, seamlessly blending creativity with functionality.',
      'Implemented a responsive design strategy, ensuring that the website provides an optimal viewing experience across a variety of devices, fostering accessibility and user engagement.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Shopmora',
    icon: shopmora,
    link: 'https://shopmora.netlify.app/',
    iconBg: '#383E56',
    points: [
      'Meticulously ensured cross-browser compatibility, guaranteeing a consistent and reliable performance for visitors using different web browsers.',
      'Actively participated in collaborative code reviews, engaging with fellow developers to provide and receive constructive feedback. This collaborative effort enhanced the overall quality of the website and promoted a culture of continuous improvement.',
    ],
  },
  {
    title: 'Backend NodeJs Developer',
    company_name: 'Personal API',
    icon: express,
    link: '',
    iconBg: '#383E56',
    points: [
      'Developed a feature-rich CRUD API using Node.js and Express',
      'Implemented user authentication and authorization functionalities for secure access to endpoints.',
      'Successfully integrated MongoDB as the backend database, managing user data efficiently.',
      'Designed and implemented the user model to ensure data consistency and integrity.',
      'Implemented robust security measures, including password hashing and JWT-based authentication.',
      'Ensured secure handling of user data and implemented standardized error responses for enhanced security.',
    ],
  },
  {
    title: 'C# Developer (.NET)',
    company_name: 'A Simple Razor WebApp',
    icon: c,
    link: '',
    iconBg: '#383E56',
    points: [
      'Developed a web application using C# and Razor Pages in ASP.NET Core',
      'Utilized the Razor Pages framework for building dynamic web pages, enhancing user interactivity.',
      'Implemented a JSON-based product data service to dynamically load and display product information on the website.',
      'Designed a robust Product model class to represent individual product entities, including features like images, URLs, and descriptions.',
      'Configured the ASP.NET Core application, including HTTPs redirection, static file handling, and routing for a seamless user experience.',
      'Integrated dependency injection for the JsonFileProductService to facilitate clean and maintainable code.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Ilorin Innovation Hub',
    icon: ilorin,
    link: '',
    iconBg: '#fff',
    points: [
      "Collaborated with the team lead in crafting a compelling pitch deck for the hackathon's presentation, showcasing key features and value propositions.",
      "Played a pivotal role in designing the system's dashboard UI, contributing to an intuitive and visually appealing user interface.",
      "Spearheaded the development of both the landing page and the system's dashboard, utilizing React to create dynamic and engaging web experiences.",
      "Delivered a persuasive product pitch at the 2023 Ilorin Innovation Hub Hackathon, effectively communicating the project's vision and impact.",
      'Implemented a responsive design strategy, ensuring a seamless user experience across various devices, and meticulously ensured cross-browser compatibility.',
      'Actively participated in collaborative code reviews, offering and receiving constructive feedback, fostering continuous improvement within the development team.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'He came through when I needed him the most & he also delivered accurately',
    name: 'Babatunde Tosin',
    designation: 'CEO',
    company: 'Spaceville',
    image: 'https://randomuser.me/api/portraits/lego/7.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tunji does.",
    name: 'Raphael',
    designation: '',
    company: '',
    image: 'https://randomuser.me/api/portraits/lego/5.jpg',
  },
];

const projects = [
  {
    name: 'Kidan',
    description: 'An E-commerce website',
    tags: [
      {
        name: 'ReactJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient',
      },
    ],
    image: kidan,
    source_code_link: '#',
    live_link: 'https://kidanstore.vercel.app/',
  },
  {
    name: 'StuntMedia',
    description: 'A Landing page for a DMV Videographer.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'Framer Motion',
        color: 'green-text-gradient',
      },
    ],
    image: stuntMedia,
    source_code_link: 'https://github.com/tunny17/stuntmedia',
    live_link: 'https://stuntmedia.netlify.app/',
  },
  {
    name: 'Shopmora',
    description: 'A Landing page for a small scale fashion business.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient',
      },

      {
        name: 'Framer Motion',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceFour,
    source_code_link: 'https://github.com/tunny17/Shopmora',
    live_link: 'https://shopmora-co.netlify.app/',
  },
  {
    name: 'Art Hotel',
    description: 'Web-based platform that allows users to book',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'swiperjs',
        color: 'pink-text-gradient',
      },
    ],
    image: experienceOne,
    source_code_link: 'https://github.com/tunny17/arthotel',
    live_link: 'https://arthotel.netlify.app/',
  },
  {
    name: 'NFT Marketplace Template',
    description: 'A Simple NFT marketplace',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceNine,
    source_code_link: 'https://github.com/tunny17/nft-marketplace',
    live_link: 'https://tunnymarketplace.netlify.app/',
  },
  {
    name: 'TunnyStore',
    description:
      "A fullstack E-commerce Website created with NextJs and Sanity as it's backend and Paystack for payment gateway.",
    tags: [
      {
        name: 'NextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sanity',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceTwo,
    source_code_link: 'https://github.com/tunny17/ecommerce-store',
    live_link: 'https://tunnystore.netlify.app/',
  },
  {
    name: 'Spaceville',
    description:
      'A Simple Landing page for Spaceville Ltd Construction Company that shows ther services being rendered.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'SwiperJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Video-React',
        color: 'pink-text-gradient',
      },
      {
        name: 'React Locomotive Scroll',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceThree,
    source_code_link: 'https://github.com/tunny17/construction',
    live_link: 'https://tunnyconstruction.netlify.app/',
  },
  {
    name: 'Cryptoverse',
    description:
      'A Simple Cryptocurrency platform that shows the status, news and links of cryptocurrencies around the world.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient',
      },
      {
        name: 'ChartJs',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceFive,
    source_code_link: 'https://github.com/tunny17/cryptoverse',
    live_link: 'https://tunnycrypto.netlify.app/',
  },
  {
    name: 'Tunnymedia',
    description: 'A Simple replica of Youtube.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Player',
        color: 'green-text-gradient',
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceSeven,
    source_code_link: 'https://github.com/tunny17/youtube_clone',
    live_link: 'https://tunnymedia.netlify.app/',
  },
  {
    name: 'TunnyAPI',
    description: 'My Backend API',
    tags: [
      {
        name: 'NodeJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'bcrypt',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'dotenv',
        color: 'green-text-gradient',
      },
    ],
    image: express,
    source_code_link: 'https://github.com/tunny17/tunnyAPI',
    live_link: 'https://github.com/tunny17/tunnyAPI',
  },
];

export { services, technologies, experiences, testimonials, projects };
