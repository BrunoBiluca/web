import LocaleService from "./LocaleService";

export default class LocaleStr {
  obj = {}

  constructor(key) {
    this.obj["key"] = key;
  }

  addLocale(locale, value) {
    this.obj[locale] = value;
    return this;
  }

  ptbr(value) {
    this.obj[LocaleService.locales.ptBR.name] = value;
    return this;
  }

  en(value) {
    this.obj[LocaleService.locales.en.name] = value;
    return this;
  }

  toString() {
    const locale = LocaleService.getLocale();
    return this.obj[locale];
  }
}