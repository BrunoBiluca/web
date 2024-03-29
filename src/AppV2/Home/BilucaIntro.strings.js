import LocaleStr from "services/LocaleStr";

class BilucaIntro {
  static strings = {
    intro_1: new LocaleStr("intro_1")
      .add("en", "👋 Hi, I'm Bruno (aka. BrunoBiluca).")
      .add("pt-BR", "👋 Oi, me chamo Bruno, também conhecido por BrunoBiluca."),
    intro_2: new LocaleStr("intro_2")
      .add("en", "I'm a game developer and I love to develop interesting games with surprising gameplay mechanics. I also love to teach people and I want to share what I'be been learning.")
      .add("pt-BR", "Sou um desenvolvedor de games e adoro a desenvolver jogos interessantes com mecânicas surpreendentes. Eu também amo ensinar pessoas e quero compartilhar o que estou aprendendo."),
    intro_3: new LocaleStr("intro_4")
      .add("en", "So I started this website to document the stuff that I'm currently working. Hope to help! 🙋")
      .add("pt-BR", "Então eu comecei esse website para documentar os meus jogos e me conhecimento. Espero te ajudar! 🙋"),
    content_title: new LocaleStr("content_title")
      .add("pt-BR", "Minhas últimas contribuições no Github 🧑‍💻")
      .add("en", "My last commits on Github 🧑‍💻")
  }
}

export default BilucaIntro;