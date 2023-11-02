import { LocaleService } from "./LocaleService";
import LocaleStr from "./LocaleStr";

export default class LocaleStringBuilder {
  static create(name = "") {
    return new LocaleStringBuilder(name)
  }

  constructor(name) {
    this.name = name;
    this.localeStr = new LocaleStr(name);

    for (const langKey of Object.keys(LocaleService.locales)) {
      var langName = LocaleService.locales[langKey].name
      this.localeStr.add(langName, "")
    }
  }

  ptbr(value) {
    this.localeStr.add(LocaleService.locales.ptBR.name, value)
    return this;
  }

  en(value) {
    this.localeStr.add(LocaleService.locales.en.name, value)
    return this;
  }

  build() {
    for (const langKey of Object.keys(LocaleService.locales)) {
      var langName = LocaleService.locales[langKey].name
      if (this.localeStr.get(langName) === "")
        console.warn(`Localização não foi configurada para a língua <${langName}>`);
    }
    return this.localeStr;
  }
}

/**
 * @param {string[]} values 
 * [0] ptbr [1] en  
 */
export function loc(...values) {
  return LocaleStringBuilder
    .create()
    .ptbr(values[0])
    .en(values[1])
    .build()
}