import LocaleStr from "services/LocaleStr";

class BilucaIntro {
  static strings = {
    intro_1: new LocaleStr("intro_1")
      .add("en", "Hi, I'm Bruno (aka. BrunoBiluca).")
      .add("pt-BR", "Oi, me chamo Bruno, também conhecido por BrunoBiluca"),
    intro_2: new LocaleStr("intro_2")
      .add("en", "I'm a Computer Scientist by degree with the passion to create games with interesting mechanics and systems. My main focus is to help my team in software quality, best pratices and software  architeture to take projects off paper as smoothly and playfully as possible.")
      .add("pt-BR", "Tenho graduação em Ciência da Computação com uma grande paixão por criação de games com mecânicas e sistemas interessantes. Meu principal foco é ajudar o meu time em relação a qualidade de software, melhores práticas e arquitetura para tirar projetos fora do papel da forma mais tranquila e divertida possível."),
    intro_3: new LocaleStr("intro_3")
      .add("en", "I also love to teach people and I want to share what I have learned when developing games.")
      .add("pt-BR", "Eu também amo ensinar pessoas e quero compartilhar o que estou aprendendo enquanto desenvolvo games."),
    intro_4: new LocaleStr("intro_4")
      .add("en", "So I started this site to document the stuff that I'm currently working and help you become more confident with your software skills and finish your next awesome project.")
      .add("pt-BR", "Então eu comecei esse site para documentar tudo que estou atualmente trabalhando e ajudar você ser mais confiante com suas habilidades de desenvolvimento de software e terminar seu próximo projeto incrível."),
    intro_5: new LocaleStr("intro_5")
      .add("en", "Here you will find all about my open projects, like the games that I'm currently developing and articles about game development and technology in general, it will work like a hub of content, coming soon a feature to comment for us to build a community for people that love software development and to help each other.")
      .add("pt-BR", "Aqui você irá encontrar todos os meus projetos, como jogos que estou desenvolvendo e artigos sobre desenvolvimento de games e tecnologia no geral."),
    content_title: new LocaleStr("content_title")
      .add("pt-BR", "Um pouco do meu trabalho 🧑‍💻")
      .add("en", "Little of my work 🧑‍💻")
  }
}

export default BilucaIntro;