import LocaleService from "./LocaleService";

class LocaleStr {
  obj = {}

  constructor(key) {
    this.obj["key"] = key;
  }

  add(locale, value) {
    this.obj[locale] = value;
    return this;
  }

  get = (locale) => this.obj[locale]

  toString() {
    return this.obj[LocaleService.getLocale()];
  }
}

export default LocaleStr;