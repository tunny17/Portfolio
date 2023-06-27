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
    experienceOne,
    exerienceTwo,
    exerienceThree,
    exerienceFour,
    exerienceFive,
    exerienceSeven,
    exerienceNine,
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
        "He came through when I needed him the most & he also delivered accurately",
        name: "Babatunde Tosin",
        designation: "CEO",
        company: "Spaceville",
        image: "https://randomuser.me/api/portraits/lego/7.jpg",
    },
    {
        testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tunji does.",
        name: "Adeyemi John",
        designation: "",
        company: "",
        image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
];

const projects = [
    {
        name: "Art Hotel",
        description:
        "Web-based platform that allows users to book",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "gsap",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "framer-motion",
                color: "green-text-gradient",
            },
            {
                name: "swiperjs",
                color: "pink-text-gradient",
            },
        ],
        image: experienceOne,
        source_code_link: "https://github.com/tunny17/arthotel",
        live_link: "https://arthotel.netlify.app/"
    },
    {
        name: "TunnyStore",
        description:
        "A fullstack E-commerce Website created with NextJs and Sanity as it's backend and Paystack for payment gateway.",
        tags: [
            {
                name: "NextJs",
                color: "blue-text-gradient",
            },
            {
                name: "Sanity",
                color: "green-text-gradient",
            },
        ],
        image: exerienceTwo,
        source_code_link: "https://github.com/tunny17/ecommerce-store",
        live_link:"https://tunnystore.netlify.app/"
    },
    {
        name: "Spaceville",
        description:
        "A Simple Landing page for Spaceville Ltd Construction Company that shows ther services being rendered.",
        tags: [
        {
            name: "ReactJs",
            color: "blue-text-gradient",
        },
        {
            name: "SwiperJs",
            color: "green-text-gradient",
        },
        {
            name: "Video-React",
            color: "pink-text-gradient",
        },
        {
            name: "React Locomotive Scroll",
            color: "green-text-gradient",
        },
        ],
        image: exerienceThree,
        source_code_link: "https://github.com/tunny17/construction",
        live_link: "https://tunnyconstruction.netlify.app/"
    },
    {
        name: "Shopmora",
        description:
        "A Landing page for a small scale fashion business.",
        tags: [
        {
            name: "ReactJs",
            color: "blue-text-gradient",
        },
        {
            name: "Gsap",
            color: "green-text-gradient",
        },
        {
            name: "Styled Components",
            color: "pink-text-gradient",
        },
        {
            name: "Framer Motion",
            color: "green-text-gradient",
        },
        ],
        image: exerienceFour,
        source_code_link: "https://github.com/tunny17/Shopmora",
        live_link: "https://shopmora-co.netlify.app/"
    },
    {
        name: "Cryptoverse",
        description:
        "A Simple Cryptocurrency platform that shows the status, news and links of cryptocurrencies around the world.",
        tags: [
        {
            name: "ReactJs",
            color: "blue-text-gradient",
        },
        {
            name: "Redux",
            color: "green-text-gradient",
        },
        {
            name: "Axios",
            color: "pink-text-gradient",
        },
        {
            name: "ChartJs",
            color: "green-text-gradient",
        },
        ],
        image: exerienceFive,
        source_code_link: "https://github.com/tunny17/cryptoverse",
        live_link: "https://tunnycrypto.netlify.app/"
    },
    {
        name: "Tunnymedia",
        description:
        "A Simple replica of Youtube.",
        tags: [
        {
            name: "ReactJs",
            color: "blue-text-gradient",
        },
        {
            name: "React Player",
            color: "green-text-gradient",
        },
        {
            name: "Axios",
            color: "pink-text-gradient",
        },
        {
            name: "Material UI",
            color: "green-text-gradient",
        },
        ],
        image: exerienceSeven,
        source_code_link: "https://github.com/tunny17/youtube_clone",
        live_link: "https://tunnymedia.netlify.app/"
    },
    {
        name: "NFT Marketplace",
        description:
        "A Simple NFT marketplace",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "Axios",
            color: "pink-text-gradient",
        },
        {
            name: "Material UI",
            color: "green-text-gradient",
        },
        ],
        image: exerienceNine,
        source_code_link: "https://github.com/tunny17/nft-marketplace",
        live_link: "https://tunnymarketplace.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };