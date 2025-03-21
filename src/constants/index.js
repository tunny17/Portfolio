import {
  creator,
  web,
  ilorin,
  shopmora,
  classroomio,
  experienceOne,
  exerienceTwo,
  exerienceThree,
  // exerienceFour,
  exerienceFive,
  exerienceSeven,
  exerienceNine,
  stuntMedia,
  express,
  kidan,
  c,
  naijaStars,
  classroomIO
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
    id: 'https://docs.google.com/document/d/1r39NBPCASTJ80zoVjpoRO3eMOk4B1Tr7k2kxUrnRltw/edit?usp=sharing',
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
    title: 'Open Source Fullstack Developer (Sveltekit Js & Node Js)',
    company_name: 'ClassroomIO',
    icon: classroomio,
    link: 'https://github.com/classroomio/classroomio',
    iconBg: '#383E56',
    points: [
      'Implemented the landing page design using Sveltekit and Tailwindcss.',
      'Implemented a multi-translations feature on the platform which aids easy use of the platform amongst other things for users around the world.',
      'Wrote a script on the backend that translates the English json file into multiple languages to take away the burden of translating for different languages on other contributors.',
      'Implemented AI features which includes generation of Outlines, Notes and Questions for students.',
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
    title: 'React Developer',
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
    name: 'Naija Stars',
    description: 'A website showing the top open source repositories in Nigeria.',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient',
      },
      {
        name: 'Deno',
        color: 'blue-text-gradient',
      },
      {
        name: 'Hono',
        color: 'blue-text-gradient',
      },
    ],
    image: naijaStars,
    source_code_link: 'https://github.com/classroomio/naija-stars',
    live_link: 'https://naijastars.dev/',
  },
    {
    name: 'ClassroomIO',
    description: 'A simple landing page from classroomio',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient',
      }, 
    ],
    image: classroomIO,
    source_code_link: '#',
    live_link: 'https://classroomio.com/',
  },
    {
    name: 'Kidan',
    description: 'An E-commerce website for a client',
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
    source_code_link: '#',
    live_link: 'https://stuntmedia.netlify.app/',
  },
  // {
  //   name: 'Shopmora',
  //   description: 'A Landing page for a small scale fashion business.',
  //   tags: [
  //     {
  //       name: 'ReactJs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'Gsap',
  //       color: 'green-text-gradient',
  //     },

  //     {
  //       name: 'Framer Motion',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: exerienceFour,
  //   source_code_link: 'https://github.com/tunny17/Shopmora',
  //   live_link: 'https://shopmora-co.netlify.app/',
  // },
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
 
];

export { services, technologies, experiences, testimonials, projects };
