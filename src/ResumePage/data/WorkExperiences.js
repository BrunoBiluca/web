import LocaleStringBuilder from "services/LocaleStringBuilder";

export const workExperiences = {
  gh: {
    title: LocaleStringBuilder
      .create()
      .ptbr("Engenheiro de software")
      .en("Software Engineer")
      .build(),
    period: "01/2022 - 12/2022",
    location: "Santa Rosa - RS",
    description: LocaleStringBuilder
      .create()
      .ptbr("Trabalhei principalmente no desenvolvimento de aplicações web direcionadas para o sistema educacional brasileiro, com foco em experiência do usuário. Também foi responsável por treinamentos de desenvolvimento de software e boas práticas em processos de mentorias.")
      .en("Worked primarily in the development of web applications targeting the Brazilian educational system, with a focus on the user experience. Also, I was responsible to train other company members through mentoring regarding software development and best practices.")
      .build(),
    company: "GH Branding",
    companyUrl: "https://ghbranding.com.br"
  },
  sensedia: {
    title: LocaleStringBuilder
      .create()
      .ptbr("Engenheiro de software")
      .en("Software Engineer")
      .build(),
    period: "01/2021 - 10/2021",
    location: "Campinas - SP",
    description: LocaleStringBuilder
      .create()
      .ptbr("Trabalhei em consultoria para aplicações backend. Foco nas melhores práticas a fim de entregar sistemas performáticos e escaláveis ao mesmo tempo evitando débitos técnicos e bugs. Sistemas desenvolvidos utilizando microserviços e mensageria assíncrona.")
      .en("Worked on consulting for backend applications. Focus on best practices to deliver scalable and performative systems at the same time avoiding tech debits and undesirable bugs. Systems using microservices and async messaging.")
      .build(),
    company: "Sensedia",
    companyUrl: "https://br.sensedia.com"
  },
  cinnecta: {
    title: LocaleStringBuilder
      .create()
      .ptbr("Engenheiro de software")
      .en("Software Engineer")
      .build(),
    period: "03/2019 - 09/2020",
    location: "Belo Horizonte - MG",
    description: LocaleStringBuilder
      .create()
      .ptbr("Trabalhei no desenvolvimento de uma plataforma de análise de dados, baseados em múltiplas fontes de dados. Minha principal responsabilidade era ajudar a equipe no desenvolvimento de ferramentas e na manutenção e suporte ao core business do produto.")
      .en("Worked on the development of a data analysis platform, based on multi-data sources. I was responsible to create and maintain systems and tools to support the core business of the product.")
      .build(),
    company: "Cinnecta",
    companyUrl: "https://cinnecta.com"
  },
  accenture: {
    title: LocaleStringBuilder
      .create()
      .ptbr("Engenheiro de software")
      .en("Software Engineer")
      .build(),
    period: "06/2018 - 03/2019",
    location: "Nova Lima - MG",
    description: LocaleStringBuilder
      .create()
      .ptbr("Trabalhei no desenvolvimento de aplicações web principalmente para a indústria do petróleo, com o foco de problemas de Cadeia de suprimentos e Logística.")
      .en("Worked on development of web applications for the petrol industry, foremost in Supply Chain and Logistics problems.")
      .build(),
    company: "Accenture",
    companyUrl: "https://www.accenture.com/us-en"
  },
  handcom: {
    title: LocaleStringBuilder
      .create()
      .ptbr("Engenheiro de software")
      .en("Software Engineer")
      .build(),
    period: "08/2016 - 03/2018",
    location: "Juiz de Fora - MG",
    description: LocaleStringBuilder
      .create()
      .ptbr("Trabalhei como desenvolvedor web na criação de websites e sistemas administrativos. Minhas principais responsabilidades eram manter e implementar novas funcionalidades aos produtos, levantamento de requisitos junto ao cliente, com foco nas necessidades do cliente, e ajuda com conhecimento ao time.")
      .en("Worked as Web Developer creating websites and admin systems. Main roles include also helping the others developers of the team and analyzing new features to system requirements.")
      .build(),
    company: "Handcom",
    companyUrl: "http://www.handcom.com.br"
  }
};
