import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import thumbnailPortfolio from '../assets/images/portfolio-item-portfolio-website.png'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            presentation: "I’m a full stack developer with vast experience in the development of dynamic web apps and microservices. From the front end to the back end, my skills allow me to create scalable, robust software solutions that are friendly with the final user. I like to be up-to-date in current software development trends and I always try to deliver quality code. I have the capabilities to accompany throughout the whole software lifecycle, from analysis to deployment and maintenance of a project.",
            experience: [
                {
                    role: "Full stack developer",
                    company: "Propins",
                    beginDate: "Apr 2021",
                    endDate: "currently here",
                    responsibilities: [
                      {text: ["Developed front end changes using", ",", ",", " and", "."], highlight: ["React", "Material UI", "Reactstrap ", "ant.design", ""]},
                      {text: ["Developed changes for", " in the back end using", "."], highlight: ["API REST", ".NET Core", ""]},
                      {text: ["Performed integration with third-party API Services such as", ",", ",", " and", "."], highlight: ["Google Maps", "Portal Inmobiliario", "Yapo ", "Firma Digital", ""]},
                      {text: ["Migrated projects from", " to", "."], highlight: ["Microsoft Azure", "Google Cloud Platform", ""]},
                      {text: ["Utilized source control and automation tools like", "and", "for efficient development cycles and releases."], highlight: ["Git", "CI/CD", ""]},
                      {text: ["Analyzed, developed, tested and deployed web application to cloud-based production environment and configured server settings."], highlight: [""]},
                      {text: ["Performed troubleshooting and debugging of system issues in both front end and back end."], highlight: [""]},
                      {text: ["Managing of non relational databases through", "."], highlight: ["Mongo", ""]},
                      {text: ["Performed software lifecycle tracking through ", "."], highlight: ["Jira.", ""]}
                    ]
                },
                {
                    role: "Junior Software Analyst",
                    company: "AMF Logistic / Partnertech",
                    beginDate: "Jul 2019",
                    endDate: "Oct 2020",
                    responsibilities: [
                      {text: ["Designed and developed a non relational database system for the storage, retrieval, and manipulation of data", "."], highlight: ["(Mongo)", ""]},
                      {text: ["Developed changes to Windows services in", "for process automation (internal company invoice management system and other financial documents)."], highlight: [".NET Framework", ""]},
                      {text: ["Developed, tested and deployed REST API using ", "."], highlight: [".NET Core", ""]},
                      {text: ["Designed, developed, tested and deployed desktop app using", "."], highlight: ["WPF", ""]},
                      {text: ["Developed and implemented changes in front end using", ",", ",", "and", "."], highlight: ["React", "Typescript", "ant.design", "TailwindCSS", ""]},
                      {text: ["Performed troubleshooting and debugging of system issues in both front end and back end.", "."], highlight: ["", ""]},
                      {text: ["Performed software lifecycle tracking through ", "."], highlight: ["Jira", ""]},
                      {text: ["Developed and implemented REST API using ", "."], highlight: ["Spring boot", ""]},
                      {text: ["Performed version control through ", "."], highlight: ["Git", ""]}
                    ]
                },
                {
                    role: "Software Analyst Intern",
                    company: "Audisis (Grupo Progestión)",
                    beginDate: "Feb 2019",
                    endDate: "May 20219",
                    responsibilities: [
                      {text: ["Analyzed, designed, developed and tested web app with", ",", ",", ",", "and", "."], highlight: ["Codeigniter (PHP)", "HTML", "CSS", "Bootstrap", "Javascript", ""]},
                      {text: ["Designed and managed database using ", "."], highlight: ["SQL Server", ""]},
                      {text: ["Developed and implemented stored procedures in ", "."], highlight: ["SQL Server", ""]},
                      {text: ["Performed version control through ", "."], highlight: ["Git", ""]}
                    ]
                }        
            ],
            education: [
              {
                title: "Software analyst - Associate's degree",
                school: "DuocUC Institute",
                date: "2017 - 2019"
              },
              
              {
                title: "Complete primary and secondary education",
                school: "Academia de Humanidades",
                date: "2001 - 2013"
              }
            ],
            skills: [
              "React", ".NET Core", "Typescript", "Javascript", ".NET Framework", "Spring boot", "HTML/CSS", "Git", "SQL Server", "Mongo", "Google Cloud Platform", "Microsoft Azure", "Material UI", "ant.design", "Bootstrap" 
            ],
            mainSkillsSectionTitle: "Technologies",
            softSkills: [
              "Problem solving", "Collaboration and teamwork", "Time management", "Effective communication", "Creativity"
            ],
            softSkillsSectionTitle: "Soft skills",
            competencies: [
              "Software Analysis", "Software design", "Software testing", "Debugging and troubleshooting", "RESTful services", "CI/CD", "Cloud services and DevOps", "Agile methodologies", "Database design", "Database management", "Version control"
            ],
            competenciesSectionTitle: "Competencies",
            languages: [
              {
                name: "English",
                level: "Advanced (c1)"
              },
              {
                name: "Spanish",
                level: "Native"
              },
            ],
            languagesSectionTitle: "Languages",
            portfolio: [
              {
                thumbnail: thumbnailPortfolio,
                title: "Portfolio website (this site)",
                description: "Website that I designed and built for learning Typescript, ant.design theme and component customization and language variety implementation",
                tags: ["Web app", "React", "Typescript", "ant.design"],
                links: [
                  {repo: "https//www.google.com", siteUrl: "https://www.google.com"}
                ]
              }
            ],
            portfolioRepoLinkText: "Check repo",
            portfolioSiteUrlLinkText: "Go to site",
            languageToggleTooltip: "Cambiar a Español",
            switchModeTooltip: "Switch to",
            lightMode: "light mode",
            darkMode: "dark mode",
            scrollToTopTooltip: "Scroll to top",
            aboutMeSectionTitle: "Based in",
            educationSectionTitle: "Education",
            workExperienceSectionTitle: "Work experience",
            collapseButtonLabel: "Collapse all",
            expandButtonLabel: "Expand all",
            skillsSectionTitle: "Skills",
            personalPortfolioTitle: "Personal portfolio",
            personalPortfolioDescription: "Projects that I made in my free time as tools for personal use and/or learning purposes",
            contactSectionTitle: "Let's connect",
            linkedInText: "LinkedIn Profile",
            repoText: "Github Repo",
            emailText: "Email"
        }
      },
      es: {
        translation: {
            presentation: "Soy full stack developer con amplia experiencia en el desarrollo de aplicaciones web dinámicas. Versada en React.js, .NET Core, y JavaScript, mi experiencia y mis habilidades me permiten crear soluciones de software robustas y amigables con el usuario final. Me gusta estar al día con las tecnologías actuales y siempre busco entregar código de alta calidad. Desde la captura de requerimientos hasta el despliegue y mantenimiento de un proyecto, puedo dar apoyo durante todo el ciclo de vida de un software.",
            experience: [
                {
                    role: "Full stack developer",
                    company: "Propins",
                    beginDate: "Abr 2021",
                    endDate: "actualidad",
                    responsibilities: [
                      {text: ["Mejoras continuas a front end utilizando", ",", ",", " y", "."], highlight: ["React", "Material UI", "Reactstrap ", "ant.design", ""]},
                      {text: ["Mejoras continuas a back end utilizando", "."], highlight: [".NET Core", ""]},
                      {text: ["Implementación de servicios APIs de terceros como ", ",", ",", " y", "."], highlight: ["Google Maps", "Portal Inmobiliario", "Yapo ", "Firma Digital", ""]},
                      {text: ["Migración de proyectos desde", " hasta", "."], highlight: ["Microsoft Azure", "Google Cloud Platform", ""]},
                      {text: ["Uso de herramientas de control de versiones y automatización como", "y", " para un ciclo de desarrollo eficiente."], highlight: ["Git", "CI/CD", ""]},
                      {text: ["Análisis, desarrollo, testeo y despliegue de aplicación web a ambientes de producción en la nube y configuración de servidor."], highlight: [""]},
                      {text: ["Depuración y solución de errores del sistema tanto en el front end como en el back end."], highlight: [""]},
                      {text: ["Manejo de bases de datos no relacionales", "."], highlight: ["(Mongo)", ""]},
                      {text: ["Seguimiento del ciclo de desarrollo utilizando", "."], highlight: ["Jira.", ""]}
                    ]
                },
                {
                    role: "Analista programador junior",
                    company: "AMF Logistic / Partnertech",
                    beginDate: "Jul 2019",
                    endDate: "Oct 2020",
                    responsibilities: [
                      {text: ["Análisis, diseño y desarrollo de base de datos no relacional para el almacenamiento, obtención y manipulación de datos", "."], highlight: ["(Mongo)", ""]},
                      {text: ["Desarrollo de servicios de Windows con", "para automatización de procesos (gestión interna de facturas electrónicas y otros documentos financieros)."], highlight: [".NET Framework", ""]},
                      {text: ["Análisis, desarrollo, testeo y despliegue de API REST en ", "."], highlight: [".NET Core", ""]},
                      {text: ["Análisis, diseño, desarrollo, testeo y despliegue de aplicación de escritorio utilizando", "."], highlight: ["WPF", ""]},
                      {text: ["Desarrollo front end utilizando", ",", ",", "y", "."], highlight: ["React", "Typescript", "ant.design", "TailwindCSS", ""]},
                      {text: ["Depuración y solución de errores del sistema tanto en el front end como en el back end."], highlight: [""]},
                      {text: ["Utilización de metodologías ágiles para seguimiento del ciclo de desarrollo ", "."], highlight: ["(Jira)", ""]},
                      {text: ["Desarrollo de API REST utilizando ", "."], highlight: ["Spring boot", ""]},
                      {text: ["Manejo del control de versiones mediante ", "."], highlight: ["Git", ""]}
                    ]
                },
                {
                    role: "Practicante Analista programador",
                    company: "Audisis (Grupo Progestión)",
                    beginDate: "Feb 2019",
                    endDate: "May 20219",
                    responsibilities: [
                      {text: ["Análisis, diseño, desarrollo y testeo de plataformas web utilizando ", ",", ",", ",", "y", "."], highlight: ["Codeigniter (PHP)", "HTML", "CSS", "Bootstrap", "Javascript", ""]},
                      {text: ["Diseño y manejo de bases de datos utilizando ", "."], highlight: ["SQL Server", ""]},
                      {text: ["Programación de procedimientos almacenados en el motor de base de datos ", "."], highlight: ["SQL Server", ""]},
                      {text: ["Manejo de control de versiones mediante ", "."], highlight: ["Git/Github", ""]}
                    ]
                }        
            ],
            education: [
              {
                title: "Analista programador computacional",
                school: "Instituto profesional y centro de formación técnica DuocUC",
                date: "2017 - 2019"
              },
              
              {
                title: "Educación primaria y secundaria completa",
                school: "Academia de Humanidades",
                date: "2001 - 2013"
              }
            ],
            skills: [
              "React", ".NET Core", "Typescript", "Javascript", ".NET Framework", "Spring boot", "HTML/CSS", "Git", "SQL Server", "Mongo", "Google Cloud Platform", "Microsoft Azure", "Material UI", "ant.design", "Bootstrap" 
            ],
            mainSkillsSectionTitle: "Tecnologías",
            softSkills: [
              "Resolución de problemas", "Colaboración y trabajo en equipo", "Eficiente manejo del tiempo", "Comunicación abierta", "Creatividad"
            ],
            softSkillsSectionTitle: "Habilidades blandas",
            competencies: [
              "Análisis de requerimientos", "Diseño de software", "Pruebas de software", "Depuración y seguimiento de errores", "Servicios RESTful", "CI/CD", "Servicios en la nube y DevOps", "Metodologías ágiles", "Modelamiento de bases de datos", "Administración de bases de datos", "Control de versiones"
            ],
            competenciesSectionTitle: "Competencias",
            languages: [
              {
                name: "Inglés",
                level: "Avanzado (c1)"
              },
              {
                name: "Español",
                level: "Nativo"
              },
            ],
            languagesSectionTitle: "Idiomas",
            portfolio: [
              {
                thumbnail: thumbnailPortfolio,
                title: "Sitio web profesional (este sitio)",
                description: "Sitio web que diseñé y construí para aprender Typescript, customización de temas y componentes de ant.design y opción de idiomas",
                tags: ["Web app", "React", "Typescript", "ant.design"],
                links: [
                  {repo: "https//www.google.com", siteUrl: "https://www.google.com"}
                ]
              }
            ],
            portfolioRepoLinkText: "Ir al repositorio",
            portfolioSiteUrlLinkText: "Visitar sitio",
            languageToggleTooltip: "Switch to English",
            switchModeTooltip: "Cambiar a modo",
            lightMode: "claro",
            darkMode: "oscuro",
            scrollToTopTooltip: "Subir",
            aboutMeSectionTitle: "Actualmente radicada en",
            educationSectionTitle: "Educación",
            workExperienceSectionTitle: "Experiencia laboral",
            collapseButtonLabel: "Cerrar todo",
            expandButtonLabel: "Abrir todo",
            skillsSectionTitle: "Habilidades",
            personalPortfolioTitle: "Portafolio personal",
            personalPortfolioDescription: "Proyectos que realicé en mi tiempo libre como herramientas para uso personal y/o para aprender algún lenguaje o framework",
            contactSectionTitle: "Hablemos",
            linkedInText: "Perfil de LinkedIn",
            repoText: "Página de Github",
            emailText: "Correo electrónico"
        }
      }
    }
  });

export default i18n;