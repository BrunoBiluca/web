export const main = {
  name: "Bruno Bernardes da Costa",
  job: "Unity Developer",
  summary: "With more than 10 years of experience in development, I've been working on many systems, such as, Banking systems, Big Data analysis platforms from multiple sources, websites, mobile apps and games. My main focus is on the quality of the delivery, and I use always market-proof best practices.",
  email: "b.b.da.costa@gmail.com",
  phone: "+55 (31) 99325-3017",
  location: "Lagoa Dourada, Minas Gerais, Brazil",
  locationMaps: "https://www.google.com/maps/place/Lagoa+Dourada+-+MG/@-20.872942,-44.1893066,11.17z/data=!4m5!3m4!1s0xa19f3675b62e7b:0xaf82e17dd71573da!8m2!3d-20.9147587!4d-44.0754448",
  linkedin: "linkedin.com/in/bbdacosta/",
  github: "github.com/BrunoBiluca",
  stackoverflow: "stackoverflow.com/users/6341672/bruno-bernardes",
  website: "https://brunobiluca.github.io/web"
}

export const workExperiences = [
  {
    title: "Software Development Engineer at",
    period: "01/2022 - 12/2022",
    location: "Santa Rosa - RS",
    description: "Worked primarily in the development of web applications targeting the Brazilian educational system, with a focus on the user experience. Also, I was responsible to train other company members through mentoring regarding software development and best practices.",
    company: "GH Branding",
    companyUrl: "https://ghbranding.com.br"
  },
  {
    title: "Software Development Engineer at",
    period: "01/2021 - 10/2021",
    location: "Campinas - SP",
    description: "Worked on consulting for backend applications. Focus on best practices to deliver scalable and performative systems at the same time avoiding tech debits and undesirable bugs. Systems using microservices and async messaging.",
    company: "Sensedia",
    companyUrl: "https://br.sensedia.com"
  },
  {
    title: "Software Engineer at",
    period: "03/2019 - 09/2020",
    location: "Belo Horizonte - MG",
    description: "Worked on the development of a data analysis platform, based on multi-data sources. I was responsible to create and maintain systems and tools to support the core business of the product.",
    company: "Cinnecta",
    companyUrl: "https://cinnecta.com"
  },
  {
    title: "Software Developer Analyst at",
    period: "06/2018 - 03/2019",
    location: "Nova Lima - MG",
    description: "Worked on development of web applications for the petrol industry, foremost in Supply Chain and Logistics problems.",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/us-en"
  },
  {
    title: "Software Developer Analyst at",
    period: "08/2016 - 03/2018",
    location: "Juiz de Fora - MG",
    description: "Worked as Web Developer creating websites and admin systems. Main roles include also helping the others developers of the team and analyzing new features to system requirements.",
    company: "Handcom",
    companyUrl: "http://www.handcom.com.br"
  }
]

export const certificates = [
  {
    icon: "",
    title: "Design Patterns in C# and .NET at Udemy",
    description: "Definition and implementation of the main design patterns proposed by the Gang of Four in multiple scenarios",
    url: "https://www.udemy.com/certificate/UC-CUPI13TP/"
  },
  {
    icon: "",
    title: "Twin Stick Shooter with Blueprint at Unreal Engine User Group",
    description: "Definition and implementation of the main design patterns proposed by the Gang of Four in multiple scenarios",
    url: "https://www.udemy.com/certificate/UC-CUPI13TP/"
  }
]

export const skills = [
  { label: "Unity" },
  { label: "C#" },
  { label: "Git" },
  { label: ".NET & .NET Core" },
  { label: "Python" },
  { label: "TDD" },
  { label: "Clean Code" },
  { label: "Design Patterns" },
  // { label: "Java" },
  // { label: "Javascript" },
  // { label: "Docker" },
  // { label: "RESTful APIs" },
  // { label: "HTML5 & CSS" }
]

export const educations = [
  {
    title: "Bachelor of Science Computer at Universidade Federal de São João del Rei",
    period: "01/2012 - 12/2015",
    location: "São João del Rei",
    activities: [
      "Took part as a web developer on a junior company called LinkedEJ",
      "Game development minor"
    ]
  }
]

export const languages = [
  "Portuguese (Native)",
  "English (Fluent)"
]

const games = [
  {
    name: "Biluca XGrid",
    description: "3D Grid based strategy game",
    role: "Gameplay & UI Programmer",
    repo: "https://github.com/BrunoBiluca/course-xcom-game",
    screenshoot: 'biluca_xgrid.jpg'
  },
  {
    name: "Biluca Defense",
    description: "2D Tower Defense",
    role: "Gameplay & UI Programmer",
    repo: "https://github.com/BrunoBiluca/biluca-defense",
    screenshoot: 'biluca_defense_gameplay.png'
  },
  {
    name: "Biluca Crazy Memory",
    description: "2D Puzzle Game, Multi-level",
    role: "Level Designer, UI Programmer",
    repo: "https://github.com/BrunoBiluca/crazy-memory",
    screenshoot: 'crazy_memory_gameplay.png'
  },
  {
    name: "Flapping Bird",
    description: "2D Platformer, Multiple modes",
    role: "Level Designer, Gameplayer & UI Programmer",
    repo: "https://github.com/BrunoBiluca/flap-bird-clone",
    screenshoot: 'flapping_bird_menu.png'
  }
]

export const ResumeUnity = {
  main: main,
  workExperiences: workExperiences,
  certificates: certificates,
  skills: skills,
  educations: educations,
  languages: languages,
  games: games
}

export const mainBackend = {
  ...main,
  job: "Senior Backend Developer",
}

export const skillsBackend = [
  { label: "Python" },
  { label: "C#" },
  { label: "Git" },
  { label: "TDD" },
  { label: "Clean Code" },
  { label: "Design Patterns" },
  { label: "Java" },
  { label: "Javascript" },
  { label: "Docker" },
  { label: "RESTful APIs" },
]

export const certificatesBackend = [
  {
    icon: "",
    title: "Taming Big Data with Apache Spark and Python - Hands On!",
    description: "Implementing recurrent problems in data analysis with Apache Spark and Python",
    url: "https://www.udemy.com/certificate/UC-398dd595-513c-492c-83dd-ea5502e5551e/"
  },
  {
    icon: "",
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    description: "GCP basic services",
    url: "https://www.coursera.org/account/accomplishments/certificate/P5AB8LP8Y7B6"
  }
]

export const ResumeBackend = {
  main: mainBackend,
  workExperiences: workExperiences,
  certificates: certificatesBackend,
  skills: skillsBackend,
  educations: educations,
  languages: languages
}

export const Resume = ResumeUnity;