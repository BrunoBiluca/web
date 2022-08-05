class LocaleService {
  static localeKey = "brunobilucaportal_locale";

  static locales = {
    ptBR: {
      name: "pt-BR",
      key: "ptBR"
    },
    en: {
      name: "en",
      key: "en"
    }
  }

  static getLocale = () => {
    let currLocale = localStorage.getItem(this.localeKey);

    if (!Object.keys(this.locales).find(key => this.locales[key].name === currLocale)) {
      localStorage.setItem(this.localeKey, this.locales.en.name);
      return this.locales.en.name;
    }

    return currLocale;
  }

  static setLocale = (newLocale) => {
    localStorage.setItem(this.localeKey, newLocale.name);

    return this.getLocale();
  }

  static isLocale = (locale) => {
    return this.getLocale() === locale.name;
  }
}

export default LocaleService;