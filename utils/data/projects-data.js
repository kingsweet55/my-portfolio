import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce website',
        description: "In my role as a front-end lead developer for building an e-commerce website, I was responsible for\
         overseeing the development and implementation of the user interface, ensuring a seamless and engaging user experience.\
          I lead a team of front-end developers, providing guidance on best practices in coding and design principles. Also evaluated and selected appropriate technologies, such as NextJS and Redux, to build a responsive and dynamic application. I implemented performance optimization techniques, such as code splitting and lazy loading to enhance page load times and overall site performance.",
        tools: ['NextJS', 'React', 'Typescript', 'Tailwind CSS', 'AWS SES', 'AWS S3', 'Nginx', 'Docker'],
        role: 'Frontend Lead Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI-powered SaaS Product',
        description: 'I collaborated with UX/UI designers to translate user requirements into intuitive interfaces. This involved creating responsive layouts using frameworks like React and ensuring consistency in design across various components. I also worked closely with the back-end team to integrate AI functionalities into the front-end. This included implementing API calls to fetch data and results from our AI models, ensuring real-time interactions that enhanced the user experience.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Gmail Passkey"],
        role: 'Senior Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Financial Mobile App',
        description: 'In  my role as a front-end developer using React Natvie for building a hybrid mobile app, I was responsible for guiding the development\
        team and ensuring the successful delivery of a high-quality application. I lead a team of front-end developers, providing technical guidance and mentorship. \
        I organized regular code reviews and knowledge-sharing sessions to foster best practices and enhance our coding standards. I led efforts to optimize the \
        performance by analyzing bottlenecks, implementing lazy loading, and using profiling tools to monitor and improve rendering times.',
        tools: ['React Native', 'Redux', 'SCSS', 'TypeScript', 'Stripe', 'JWT', 'Scrum'],
        code: '',
        role: 'Front-end Lead Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Online Education Program',
        description: "On the front-end, I developed responsive user interfaces using Vue, focusing on creating an engaging and user-friendly experience. I collaborate closely with UI/UX designers to implement features like course listings and user dashboards.\
         On the back-end, I built RESTful APIs to handle user authentication, course management, and content delivery. I implemented database solutions using MongoDB to store user data and course information efficiently.\
          I monitored application performance and implemented optimizations, such as caching strategies and database indexing to improve load times and enhance user experience.",
        tools: ['Vue', 'Material UI', 'Vuetify', 'Sun Editor', "Calendar", 'TypeScript', 'TailWnd', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },