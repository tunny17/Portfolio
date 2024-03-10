import {
  creator,
  web,
  github,
  ilorin,
  zuri,
  hng,
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
  c,
} from '../../public/assets';

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
    id: '#works',
    title: 'Projects',
  },
  {
    id: '/public/AdeyemiAdetunji.pdf',
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
    title: 'Backend NodeJs Developer',
    company_name: 'Personal API',
    icon: express,
    iconBg: '#383E56',
    date: 'January 2024',
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
    iconBg: '#383E56',
    date: 'January 2024',
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
    title: 'Open Source Svelte Developer',
    company_name: 'ClassroomIO',
    icon: classroomio,
    iconBg: '#383E56',
    date: 'June 2023 - Present',
    points: [
      'Assisted with the implementation of innovative features, both on the frontend and backend, enhancing the overall functionality and user experience of the system.',
      "Collaborated closely with the engineering team to identify and rectify existing bugs, ensuring the system's stability and reliability.",
      'Contributed to the enhancement of system performance by optimizing and refining existing code, improving the overall efficiency of both frontend and backend processes.',
      'Actively engaged in collaborative code reviews, providing and receiving constructive feedback to enhance the overall codebase and development process. This process contributed to the continuous improvement of the codebase and the overall development workflow.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Shopmora',
    icon: shopmora,
    iconBg: '#383E56',
    date: 'May 2023',
    points: [
      'Orchestrated the creation of an aesthetically pleasing and user-friendly frontend website for a small-scale fashion business, seamlessly blending creativity with functionality.',
      'Implemented a responsive design strategy, ensuring that the website provides an optimal viewing experience across a variety of devices, fostering accessibility and user engagement.',
      'Meticulously ensured cross-browser compatibility, guaranteeing a consistent and reliable performance for visitors using different web browsers.',
      'Actively participated in collaborative code reviews, engaging with fellow developers to provide and receive constructive feedback. This collaborative effort enhanced the overall quality of the website and promoted a culture of continuous improvement.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Ilorin Innovation Hub',
    icon: ilorin,
    iconBg: '#fff',
    date: 'Jan 2023 - Jan 2023',
    points: [
      "Collaborated with the team lead in crafting a compelling pitch deck for the hackathon's presentation, showcasing key features and value propositions.",
      "Played a pivotal role in designing the system's dashboard UI, contributing to an intuitive and visually appealing user interface.",
      "Spearheaded the development of both the landing page and the system's dashboard, utilizing React to create dynamic and engaging web experiences.",
      "Delivered a persuasive product pitch at the 2023 Ilorin Innovation Hub Hackathon, effectively communicating the project's vision and impact.",
      'Implemented a responsive design strategy, ensuring a seamless user experience across various devices, and meticulously ensured cross-browser compatibility.',
      'Actively participated in collaborative code reviews, offering and receiving constructive feedback, fostering continuous improvement within the development team.',
    ],
  },
  {
    title: 'NextJs Developer',
    company_name: 'Fullstack Ecommerce App',
    icon: github,
    iconBg: '#383E56',
    date: 'Jan 2023 - Feb 2023',
    points: [
      'Crafted a high-performance and SEO-friendly user interface using Next.js to elevate the overall user experience.',
      'Orchestrated seamless integration and efficient control of products by harnessing Sanity as the cloud-based API for the backend.',
      'Engineered a robust StateContext to facilitate streamlined control and seamless sharing of state data across various components within the web application.',
      'Leveraged Paystack for seamless and secure payment integration, ensuring a smooth transactional experience for users.',
      'Spearheaded the implementation of a responsive design approach, meticulously ensuring cross-browser compatibility for a consistent and accessible user interface.',
    ],
  },
  {
    title: 'ReactJs Developer',
    company_name: 'Open Source',
    icon: github,
    iconBg: '#383E56',
    date: 'Nov 2022 - Jan 2023',
    points: [
      'Collaborated in the creation of LowFi Figma designs for the platform, contributing to the initial design phase and laying the foundation for a user-centric experience.',
      'Took the lead in constructing the Sign-In page, leveraging Formik for validation, which not only enhanced user interactions but also facilitated seamless data storage for the backend.',
      'Implemented a responsive design strategy, ensuring an optimal user experience across various devices, while also guaranteeing cross-browser compatibility for a wider audience reach.',
      'Actively engaged in collaborative code reviews, fostering a culture of continuous improvement within the development team. This involved offering and receiving constructive feedback to enhance the overall code quality and team efficiency.',
      'Demonstrated a commitment to quality assurance by actively participating in testing procedures, contributing to the delivery of a robust and error-free platform.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Zuri Internship',
    icon: zuri,
    iconBg: '#fff',
    date: 'Oct 2022 - Dec 2022',
    points: [
      'Orchestrated the establishment of a well-organized folder structure, enhancing code readability and facilitating efficient debugging processes for the development team.',
      'Took charge of constructing the category page, featuring a diverse range of products and subproducts. This involved a meticulous approach to both design and functionality.',
      "Ensured a seamless user experience by implementing a responsive design strategy, adapting the platform's layout to various devices, and rigorously verifying cross-browser compatibility.",
      'Actively engaged in collaborative code reviews with teammates, fostering a collaborative environment where best practices and code quality were consistently upheld.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'HNG Internship',
    icon: hng,
    iconBg: '#fff',
    date: 'Oct 2022 - Dec 2022',
    points: [
      'Spearheaded the development process by creating comprehensive task breakdowns, streamlining project delivery for a more efficient and focused workflow.',
      'Played a crucial role in implementing and maintaining effective git version control, ensuring codebase integrity and facilitating collaborative development among team members.',
      'Actively participated in code reviews with teammates, contributing to a culture of continuous improvement and ensuring code quality standards were consistently met.',
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
    name: 'Adeyemi John',
    designation: '',
    company: '',
    image: 'https://randomuser.me/api/portraits/lego/5.jpg',
  },
];

const projects = [
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
];

export { services, technologies, experiences, testimonials, projects };
