import Home from "../components/home/home";
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
                logo: java
            },
            {
                id: 'python',
                logo: python
            },
            {
                id: 'javascript',
                logo: javascript
            },
            {
                id: 'typescript',
                logo: typescript
            },
            {
                id: 'cpp',
                logo: cpp
            },
            {
                id: 'html',
                logo: html
            },
            {
                id: 'css',
                logo: css
            },
            {
                id: 'bash',
                logo: bash
            },
            {
                id: 'graphql',
                logo: graphql
            }
        ]
    },
    {
        title: 'FRAMEWORKS & LIBRARIES',
        items: [
            {
                id: 'apache-camel',
                logo: apacheCamel
            },
            {
                id: 'spring-boot',
                logo: spring
            },
            {
                id: 'nodejs',
                logo: nodejs
            },
            {
                id: 'react',
                logo: react
            },
            {
                id: 'jquery',
                logo: jquery
            },
            {
                id: 'redux',
                logo: redux
            },
            {
                id: 'flutter',
                logo: flutter
            },
            {
                id: 'jest',
                logo: jest
            },
            {
                id: 'jasmine',
                logo: jasmine
            }
        ]
    },
    {
        title: 'DATABASE & CACHING',
        items: [
            {
                id: 'oracle',
                logo: oracle
            },
            {
                id: 'postgresql',
                logo: postgresql
            },
            {
                id: 'redis',
                logo: redis
            },
            {
                id: 'mariadb',
                logo: mariadb
            }
        ]
    },
    {
        title: 'TOOLS',
        items: [
            {
                id: 'nginx',
                logo: nginx
            },
            {
                id: 'jenkins',
                logo: jenkins
            },
            {
                id: 'makefile',
                logo: makefile
            },
            {
                id: 'gradle',
                logo: gradle
            },
            {
                id: 'git',
                logo: git
            },
            {
                id: 'kafka',
                logo: kafka
            },
            {
                id: 'kibana',
                logo: kibana
            },
            {
                id: 'jira',
                logo: jira
            }
        ]
    }
]

export {navLinks, skillGroups}