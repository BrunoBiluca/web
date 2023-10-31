import { LocaleService } from "./LocaleService";
import LocaleStr from "./LocaleStr";

export default class LocaleStringBuilder {
  constructor(name) {
    this.name = name;
    this.localeStr = new LocaleStr(name);

    for (const key of Object.keys(LocaleService.locales)) {
      this.localeStr.addLocale(key, null)
    }
  }

  ptbr(value) {
    this.localeStr.ptbr(value);
    return this;
  }

  en(value) {
    this.localeStr.en(value);
    return this;
  }

  build() {
    for (const key of Object.keys(this.localeStr.obj)) {
      if (this.localeStr[key] === null)
        console.warn(`Localização para <${this.name}> não foi configurada para a língua <${key}>`);
    }
    return this.localeStr;
  }
}