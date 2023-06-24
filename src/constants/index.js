import {
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    github,
    spaceville,
    ilorin,
    zuri,
    hng,
    shopmora,
    bootstrap,
    firebase,
    jquery,
    sass,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "UI Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "firebase",
        icon: firebase,
    },
    {
        name: "jquery",
        icon: jquery,
    },
    {
        name: "sass",
        icon: sass,
    },
];

const experiences = [
    {
        title: "ReactJs Developer",
        company_name: "Shopmora",
        icon: shopmora,
        iconBg: "#383E56",
        date: "May 2023 - June 2023",
        points: [
            "Built it using styled components and framer motion, gsap and locomotive scroll for animations.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participated in code reviews and constructive feedbacks with other developers.",
        ],
    },
    {
        title: "ReactJs Developer",
        company_name: "Cryptocurrency Platform",
        icon: github,
        iconBg: "#383E56",
        date: "March 2023 - March 2023",
        points: [
            "Built UI using Ant Design (antD) as a UI library to enhance speed for building.",
            "Used Redux to make API calls to CoinRanking (an API from Rapid API) and also to create endpoints which can easily be called as hooks to access the data gotten from the endpoint.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participated in code reviews and constructive feedbacks with other developers.",
        ],
    },
    {
        title: "NextJs Developer",
        company_name: "Fullstack Ecommerce App",
        icon: github,
        iconBg: "#383E56",
        date: "Jan 2023 - Feb 2023",
        points: [
            "Built the UI using Next.js to improve performance and SEO.",
            "Used Sanity as the cloud based API(backend) for easy integration and control of products.",
            "Built a StateContext to control and share state data between components in the webApp",
            "Used Paystack for payment integration",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participated in code reviews and constructive feedbacks with other developers.",
        ],
    },
    {
        title: "ReactJs Developer",
        company_name: "Spaceville",
        icon: spaceville,
        iconBg: "#383E56",
        date: "Feb 2023 - Feb 2023",
        points: [
            "Developed the UI for the website using Figma.",
            "Developed and maintained the company's landing page using React.js and other vanilla css.",
            "Implemented responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "ReactJs Developer",
        company_name: "Ilorin Innovation Hub",
        icon: ilorin,
        iconBg: "#fff",
        date: "Jan 2023 - Jan 2023",
        points: [
            "Assisted the team lead with creating the pitch deck for the hackathon’s presentation.",
            "Assisted the team lead with the system's dashboard UI.",
            "Built both the landing page and the system’s dashboard using react.",
            "Pitched the product at the 2023 Ilorin Innovation Hub Hackathon.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participated in code reviews and constructive feedbacks with other developers.",
        ],
    },
    {
        title: "ReactJs Developer",
        company_name: "Open Source",
        icon: github,
        iconBg: "#383E56",
        date: "Nov 2022 - Jan 2023",
        points: [
            "Assisted with the LowFi Figma design of the platform.",
            "Built the Sign In page and used Formik for validation to aid easy storage of data for the backend.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and constructive feedbacks with other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Zuri Internship",
        icon: zuri,
        iconBg: "#fff",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Architected folder structure to enhance code readability and easy debugging.",
            "Built the category page filled with different products and subproducts.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participated in code reviews with my teammates.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "HNG Internship",
        icon: hng,
        iconBg: "#fff",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Came up with task breakdowns to aid swift and concise project delivery.",
            "Assisted with git version control and debugging",
            "Participated in code reviews with my teammates.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "restapi",
            color: "green-text-gradient",
        },
        {
            name: "scss",
            color: "pink-text-gradient",
        },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
        {
            name: "nextjs",
            color: "blue-text-gradient",
        },
        {
            name: "supabase",
            color: "green-text-gradient",
        },
        {
            name: "css",
            color: "pink-text-gradient",
        },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };