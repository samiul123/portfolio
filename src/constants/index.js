import Home from "../components/home";
import Skills from "../components/skills";
import {
    apacheCamel,
    bash,
    cpp,
    css,
    flutter,
    graphql,
    html,
    java,
    javascript,
    jquery,
    nodejs,
    python,
    react,
    redux,
    spring,
    typescript,
    jest,
    jasmine,
    oracle,
    postgresql,
    redis,
    mariadb,
    nginx,
    jenkins,
    makefile,
    gradle,
    git,
    kafka,
    kibana,
    jira,
    buet,
    umd,
    stiboDX,
    konasl,
    algoxpert,
    udemy,
    systemxpert,
    hadoop,
    datascienceBootcamp,
    linkedin,
    medium,
    gmail,
    mindquest,
    portfolio,
    bugAnalysis,
    mindquestwebp,
    portfoliowebp,
    bugAnalysisWebp,
    pythonwebp,
    umdwebp,
    buetwebp,
    stiboDXWebp,
    konaslWebp,
    systemxpertWebp,
    hadoopWebp,
    datascienceBootcampWebp
} from "../assets";
import {Education} from "../components/education";
import {Experience} from "../components/experience";
import {Publication} from "../components/publication";
import {Certification} from "../components/Certification";
import {Contact} from "../components/Contact";
import {Project} from "../components/Project";

const navLinks = [
    {
        id: 'home',
        title: 'HOME',
        route: Home
    },
    {
        id: 'skills',
        title: 'SKILLS',
        route: Skills
    },
    {
        id: 'projects',
        title: 'PROJECTS',
        route: Project
    },
    {
        id: 'education',
        title: 'EDUCATION',
        route: Education
    },
    {
        id: 'experiences',
        title: 'EXPERIENCES',
        route: Experience
    },
    {
        id: 'publications',
        title: 'PUBLICATIONS',
        route: Publication
    },
    {
        id: 'certifications',
        title: 'CERTIFICATIONS',
        route: Certification
    },
    {
        id: 'contact',
        title: 'CONTACT',
        route: Contact
    }
]

const skillGroups = [
    {
        title: 'PROGRAMMING LANGUAGES',
        items: [
            {
                id: 'java',
                name: 'JAVA',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: java,
                        fallback: true
                    }
                ]
            },
            {
                id: 'python',
                name: 'PYTHON',
                images: [
                    {
                        type: "image/webp",
                        srcSet: pythonwebp,
                        fallback: false
                    },
                    {
                        type: "image/png",
                        srcSet: python,
                        fallback: true
                    }
                ]
            },
            {
                id: 'javascript',
                name: 'JAVASCRIPT',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: javascript,
                        fallback: true
                    }
                ]
            },
            {
                id: 'typescript',
                name: 'TYPESCRIPT',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: typescript,
                        fallback: true
                    }
                ]
            },
            {
                id: 'cpp',
                name: 'CPP',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: cpp,
                        fallback: true
                    }
                ]
            },
            {
                id: 'html',
                name: 'HTML',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: html,
                        fallback: true
                    }
                ]
            },
            {
                id: 'css',
                name: 'CSS',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: css,
                        fallback: true
                    }
                ]
            },
            {
                id: 'bash',
                name: 'BASH',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: bash,
                        fallback: true
                    }
                ]
            },
            {
                id: 'graphql',
                name: 'GRAPHQL',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: graphql,
                        fallback: true
                    }
                ]
            }
        ]
    },
    {
        title: 'FRAMEWORKS & LIBRARIES',
        items: [
            {
                id: 'apache-camel',
                name: 'APACHE CAMEL',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: apacheCamel,
                        fallback: true
                    }
                ]
            },
            {
                id: 'spring-boot',
                name: 'SPRING BOOT',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: spring,
                        fallback: true
                    }
                ]
            },
            {
                id: 'nodejs',
                name: 'NODEJS',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: nodejs,
                        fallback: true
                    }
                ]
            },
            {
                id: 'react',
                name: 'REACT',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: react,
                        fallback: true
                    }
                ]
            },
            {
                id: 'jquery',
                name: 'JQUERY',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: jquery,
                        fallback: true
                    }
                ]
            },
            {
                id: 'redux',
                name: 'REDUX',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: redux,
                        fallback: true
                    }
                ]
            },
            {
                id: 'flutter',
                name: 'FLUTTER',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: flutter,
                        fallback: true
                    }
                ]
            },
            {
                id: 'jest',
                name: 'JEST',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: jest,
                        fallback: true
                    }
                ]
            },
            {
                id: 'jasmine',
                name: 'JASMINE',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: jasmine,
                        fallback: true
                    }
                ]
            }
        ]
    },
    {
        title: 'DATABASE & CACHING',
        items: [
            {
                id: 'oracle',
                name: 'ORACLE',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: oracle,
                        fallback: true
                    }
                ]
            },
            {
                id: 'postgresql',
                name: 'POSTGRESQL',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: postgresql,
                        fallback: true
                    }
                ]
            },
            {
                id: 'redis',
                name: 'REDIS',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: redis,
                        fallback: true
                    }
                ]
            },
            {
                id: 'mariadb',
                name: 'MARIADB',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: mariadb,
                        fallback: true
                    }
                ]
            }
        ]
    },
    {
        title: 'TOOLS',
        items: [
            {
                id: 'nginx',
                name: 'NGINX',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: nginx,
                        fallback: true
                    }
                ]
            },
            {
                id: 'jenkins',
                name: 'JENKINS',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: jenkins,
                        fallback: true
                    }
                ]
            },
            {
                id: 'makefile',
                name: 'MAKEFILE',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: makefile,
                        fallback: true
                    }
                ]
            },
            {
                id: 'gradle',
                name: 'GRADLE',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: gradle,
                        fallback: true
                    }
                ]
            },
            {
                id: 'git',
                name: 'GIT',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: git,
                        fallback: true
                    }
                ]
            },
            {
                id: 'kafka',
                name: 'KAFKA',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: kafka,
                        fallback: true
                    }
                ]
            },
            {
                id: 'kibana',
                name: 'KIBANA',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: kibana,
                        fallback: true
                    }
                ]
            },
            {
                id: 'jira',
                name: 'JIRA',
                images: [
                    {
                        type: "image/svg+xml",
                        srcSet: jira,
                        fallback: true
                    }
                ]
            }
        ]
    }
]

const educations = [
    {
        institution: 'University of Minnesota - Duluth',
        major: 'Computer Science',
        degree: 'Master of Science',
        date: 'Aug 2023 - Present',
        logo: umd,
        images: [
            {
                type: "image/webp",
                srcSet: umdwebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: umd,
                fallback: true
            }
        ]
    },
    {
        institution: 'Bangladesh University of Engineering and Technology',
        major: 'Computer Science and Engineering',
        degree: 'Bachelor of Science',
        date: 'Feb 2015 - Apr 2019',
        logo: buet,
        images: [
            {
                type: "image/webp",
                srcSet: buetwebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: buet,
                fallback: true
            }
        ]
    }
]

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Stibo DX',
        date: 'Aug 2022 - Aug 2023',
        logo: stiboDX,
        images: [
            {
                type: "image/webp",
                srcSet: stiboDXWebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: stiboDX,
                fallback: true
            }
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Kona Software Lab Ltd.',
        date: 'May 2019 - July 2022',
        logo: konasl,
        images: [
            {
                type: "image/webp",
                srcSet: konaslWebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: konasl,
                fallback: true
            }
        ]
    }
]

const publications = [
    {
        title: 'Exploring Challenges and Innovations in E-Commerce Recommendation Systems: A Comprehensive Review',
        conference: 'Congress on Intelligent Systems',
        date: 'Mar 31, 2024',
        url: 'https://link.springer.com/chapter/10.1007/978-981-99-9040-5_8',
        abstract: 'Recommendation systems play a pivotal role in the digital age, with ongoing ' +
            'research focused on enhancing their effectiveness. This paper delves into the common ' +
            'challenges associated with developing these systems, including the cold-start problem, ' +
            'handling sparse datasets, and the use of matrix filling in hierarchical methods. We ' +
            'explore innovative approaches that include the integration of diverse algorithms and ' +
            'the application of alternative techniques, such as deep learning. Our research aims to ' +
            'establish an empirically based standard for various aspects of recommendation systems, ' +
            'thereby serving as a valuable reference for future studies.'
    }
]

const certifications = [
    {
        title: 'Systems Expert Certificate',
        issuer: 'AlgoExpert',
        issuerLogo: algoxpert,
        issueDate: 'Apr 2021',
        image: systemxpert,
        credentialUrl: 'https://certificate.algoexpert.io/SE-f21fe4bd68',
        images: [
            {
                type: "image/webp",
                srcSet: systemxpertWebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: systemxpert,
                fallback: true
            }
        ]
    },
    {
        title: 'The Ultimate Hands-On Hadoop: Tame Your Big Data',
        issuer: 'Udemy',
        issuerLogo: udemy,
        issueDate: 'Apr 2021',
        image: hadoop,
        credentialUrl: 'https://www.udemy.com/certificate/UC-31e402de-0bd2-44ee-a4fa-dce048140d68/',
        images: [
            {
                type: "image/webp",
                srcSet: hadoopWebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: hadoop,
                fallback: true
            }
        ]
    },
    {
        title: 'The Data Science Course: Complete Data Science Bootcamp 2024',
        issuer: 'Udemy',
        issuerLogo: udemy,
        issueDate: 'Mar 2021',
        image: datascienceBootcamp,
        credentialUrl: 'https://www.udemy.com/certificate/UC-fc9d123a-b46f-402d-ba63-2385262a395e/',
        images: [
            {
                type: "image/webp",
                srcSet: datascienceBootcampWebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: datascienceBootcamp,
                fallback: true
            }
        ]
    }
]

const contacts = [
    {
        id: 'linkedin',
        icon: linkedin,
        url: 'https://www.linkedin.com/in/samiulmushfik/',
    },
    {
        id: 'medium',
        icon: medium,
        url: 'https://medium.com/@samiulmushfik'
    },
    {
        id: 'gmail',
        icon: gmail,
        url: 'mailto:mushf001@d.umn.edu'
    }
]

const projects = [
    {
        id: 'mindquest',
        title: 'MindQuest',
        description: 'A mental health related application that facilitates community engagement, awareness regarding mental health.',
        githubUrl: 'https://github.com/samiul123/mindquest',
        demoUrl: 'https://drive.google.com/file/d/1VQ6SahYI7aexdS3wnH0OnkyAMKZCZ7ga/view?usp=sharing',
        images: [
            {
                type: "image/webp",
                srcSet: mindquestwebp,
                fallback: false
            },
            {
                type: "image/png",
                srcSet: mindquest,
                fallback: true
            }
        ]
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'A website to showcase my achievements and experience gathered so far.',
        githubUrl: 'https://github.com/samiul123/samiul123.github.io',
        demoUrl: 'https://samiul123.github.io',
        images: [
            {
                type: "image/webp",
                srcSet: portfoliowebp,
                fallback: false
            },
            {
                type: "image/jpeg",
                srcSet: portfolio,
                fallback: true
            }
        ]
    },
    {
        id: 'bug-fixing-analysis',
        title: 'Bug Fixing Analysis',
        description: 'Data analysis of open and closed bugs of Pytorch and Tensorflow.',
        githubUrl: 'https://github.com/samiul123/bug-fixing-analysis',
        images: [
            {
                type: "image/webp",
                srcSet: bugAnalysisWebp,
                fallback: false
            },
            {
                type: "image/jpeg",
                srcSet: bugAnalysis,
                fallback: true
            }
        ]
    }
]

export {navLinks, skillGroups, educations, experiences, publications, certifications, contacts, projects}