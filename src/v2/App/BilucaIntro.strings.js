import LocaleStr from "services/LocaleStr";

class BilucaIntro {
  static strings = {
    intro_1: new LocaleStr("intro_1")
      .addLocale("en", "👋 Hi, I'm Bruno (aka. BrunoBiluca).")
      .addLocale("pt-BR", "👋 Oi, me chamo Bruno, também conhecido por BrunoBiluca."),
    intro_2: new LocaleStr("intro_2")
      .addLocale("en", "I'm a game developer, but I can handle everything. I also love to teach people and I want to share what I'be been learning.")
      .addLocale("pt-BR", "Sou principalmente um desenvolvedor de games, mas sou pau pra toda obra. Eu também amo ensinar pessoas e quero compartilhar o que estou aprendendo."),
    intro_3: new LocaleStr("intro_4")
      .addLocale("en", "So I started this website to document the stuff that I'm currently working. Hope to help! 🙋")
      .addLocale("pt-BR", "Então eu comecei esse website para documentar os meus jogos e me conhecimento. Espero te ajudar! 🙋"),
    content_title: new LocaleStr("content_title")
      .addLocale("pt-BR", "Minhas últimas contribuições no Github 🧑‍💻")
      .addLocale("en", "My last commits on Github 🧑‍💻")
  }
}

export default BilucaIntro;