export const mainUnity = {
  name: "Bruno Bernardes da Costa",
  job: "Unity Developer",
  summary: "Com mais de 6 anos de experiência em desenvolvimento de software. Tenho trabalhado nos mais diversificados tipos de sistemas, como, sistemas bancários, plataforma de análise de Big Data, websites, mobile apps e games. Sou uma pessoa determinada, gosto de trabalhar em equipe e compartilhar conhecimento. Acredito que podemos criar um produto incrível enquanto nos divertimos e aprendemos no processo.",
  email: "b.b.da.costa@gmail.com",
  phone: "+55 (31) 99325-3017",
  location: "Lagoa Dourada, Minas Gerais, Brasil",
  locationMaps: "https://www.google.com/maps/place/Lagoa+Dourada+-+MG/@-20.872942,-44.1893066,11.17z/data=!4m5!3m4!1s0xa19f3675b62e7b:0xaf82e17dd71573da!8m2!3d-20.9147587!4d-44.0754448",
  linkedin: "linkedin.com/in/bbdacosta/",
  github: "github.com/BrunoBiluca",
  stackoverflow: "stackoverflow.com/users/6341672/bruno-bernardes"
}

export const workExperiences = [
  {
    title: "Software Development Engineer at",
    period: "01/2021 - 10/2021",
    location: "Campinas - SP",
    description: "Trabalhei em consultoria para aplicações backend. Foco nas melhores práticas a fim de entregar sistemas performáticos e escaláveis ao mesmo tempo evitando débitos técnicos e bugs. Sistemas desenvolvidos utilizando microserviços e mensageria assíncrona.",
    company: "Sensedia",
    companyUrl: "https://br.sensedia.com"
  },
  {
    title: "Software Engineer at",
    period: "03/2019 - 09/2020",
    location: "Belo Horizonte - MG",
    description: "Trabalhei no desenvolvimento de uma plataforma de ánalise de dados, baseados em múltiplas fontes de dados. Minha principal responsabilidade era ajudar a equipe no desenvolvimento de ferramentas e na manutenção e suporte ao core business do produto.",
    company: "Cinnecta",
    companyUrl: "https://cinnecta.com"
  },
  {
    title: "Software Developer Analyst at",
    period: "06/2018 - 03/2019",
    location: "Nova Lima - MG",
    description: "Trabalhei no desenvolvimento de aplicações web principalmente para a indústria do petróleo, com o foco de problemas de Cadeia de suprimentos e Logística.",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/us-en"
  },
  {
    title: "Software Developer Analyst at",
    period: "08/2016 - 03/2018",
    location: "Juiz de Fora - MG",
    description: "Trabalhei como desenvolvedor web na criação de websites e sistemas administrativos. Minhas principais responsabilidades eram manter e implementar novas funcionalidades aos produtos, levantamento de requisitos junto ao cliente, com foco nas necessidades do cliente, e ajuda com conhecimento ao time.",
    company: "Handcom",
    companyUrl: "http://www.handcom.com.br"
  }
]

export const certificates = [
  {
    icon: "",
    title: "Design Patterns in C# and .NET at Udemy",
    description: "Definição e implementação dos principais padrões de projetos definidos pela Gang of Four em múltiplos cenários.",
    url: "https://www.udemy.com/certificate/UC-CUPI13TP/"
  },
  {
    icon: "",
    title: "Twin Stick Shooter with Blueprint at Unreal Engine User Group",
    description: "Implementação de um protótipo de Twin Stick Shooter, passando pelas principais funcionalidades da Unreal Engine 4",
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
      "Tomei parte como desenvolvedor web na empresa júnior LinkedEJ",
      "Participação nas matérias opcionais de relacionadas a desenvolvimento de games"
    ]
  }
]

export const languages = [
  "Português (Nativo)",
  "Inglês (Fluente)"
]

const games = [
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
  main: mainUnity,
  workExperiences: workExperiences,
  certificates: certificates,
  skills: skills,
  educations: educations,
  languages: languages,
  games: games
}

export const mainBackend = {
  ...mainUnity,
  job: "Backend Developer Sênior",
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
    description: "Implementação de vários problemas de análise de dados utilizando Apache Spark e Python",
    url: "https://www.udemy.com/certificate/UC-398dd595-513c-492c-83dd-ea5502e5551e/"
  },
  {
    icon: "",
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    description: "Principais serviços e aplicações do GCP",
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