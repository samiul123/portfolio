import Home from "../components/home";
import Skills from "../components/skills";
import {
    apacheCamel,
    bash,
    cpp,
    css, flutter,
    graphql,
    html,
    java,
    javascript, jquery,
    nodejs,
    python, react, redux,
    spring,
    typescript,
    jest,
    jasmine, oracle, postgresql, redis, mariadb, nginx, jenkins, makefile, gradle, git, kafka, kibana, jira
} from "../assets";

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
        route: null
    },
    {
        id: 'education',
        title: 'EDUCATION',
        route: null
    },
    {
        id: 'experiences',
        title: 'EXPERIENCES',
        route: null
    },
    {
        id: 'publications',
        title: 'PUBLICATIONS',
        route: null
    },
    {
        id: 'certifications',
        title: 'CERTIFICATIONS',
        route: null
    },
    {
        id: 'contact',
        title: 'CONTACT',
        route: null
    }
]

const skillGroups = [
    {
        title: 'PROGRAMMING LANGUAGES',
        items: [
            {
                id: 'java',
                logo: java,
                name: 'JAVA'
            },
            {
                id: 'python',
                logo: python,
                name: 'PYTHON'
            },
            {
                id: 'javascript',
                logo: javascript,
                name: 'JAVASCRIPT'
            },
            {
                id: 'typescript',
                logo: typescript,
                name: 'TYPESCRIPT'
            },
            {
                id: 'cpp',
                logo: cpp,
                name: 'CPP'
            },
            {
                id: 'html',
                logo: html,
                name: 'HTML'
            },
            {
                id: 'css',
                logo: css,
                name: 'CSS'
            },
            {
                id: 'bash',
                logo: bash,
                name: 'BASH'
            },
            {
                id: 'graphql',
                logo: graphql,
                name: 'GRAPHQL'
            }
        ]
    },
    {
        title: 'FRAMEWORKS & LIBRARIES',
        items: [
            {
                id: 'apache-camel',
                logo: apacheCamel,
                name: 'APACHE CAMEL',
            },
            {
                id: 'spring-boot',
                logo: spring,
                name: 'SPRING BOOT',
            },
            {
                id: 'nodejs',
                logo: nodejs,
                name: 'NODEJS',
            },
            {
                id: 'react',
                logo: react,
                name: 'REACT',
            },
            {
                id: 'jquery',
                logo: jquery,
                name: 'JQUERY',
            },
            {
                id: 'redux',
                logo: redux,
                name: 'REDUX',
            },
            {
                id: 'flutter',
                logo: flutter,
                name: 'FLUTTER',
            },
            {
                id: 'jest',
                logo: jest,
                name: 'JEST',
            },
            {
                id: 'jasmine',
                logo: jasmine,
                name: 'JASMINE',
            }
        ]
    },
    {
        title: 'DATABASE & CACHING',
        items: [
            {
                id: 'oracle',
                logo: oracle,
                name: 'ORACLE',
            },
            {
                id: 'postgresql',
                logo: postgresql,
                name: 'POSTGRESQL',
            },
            {
                id: 'redis',
                logo: redis,
                name: 'REDIS',
            },
            {
                id: 'mariadb',
                logo: mariadb,
                name: 'MARIADB',
            }
        ]
    },
    {
        title: 'TOOLS',
        items: [
            {
                id: 'nginx',
                logo: nginx,
                name: 'NGINX',
            },
            {
                id: 'jenkins',
                logo: jenkins,
                name: 'JENKINS'
            },
            {
                id: 'makefile',
                logo: makefile,
                name: 'MAKEFILE',
            },
            {
                id: 'gradle',
                logo: gradle,
                name: 'GRADLE',
            },
            {
                id: 'git',
                logo: git,
                name: 'GIT',
            },
            {
                id: 'kafka',
                logo: kafka,
                name: 'KAFKA',
            },
            {
                id: 'kibana',
                logo: kibana,
                name: 'KIBANA',
            },
            {
                id: 'jira',
                logo: jira,
                name: 'JIRA',
            }
        ]
    }
]

export {navLinks, skillGroups}