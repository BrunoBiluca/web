import { LocaleService } from "./LocaleService";
import LocaleStr from "./LocaleStr";

export default class LocaleStringBuilder {
  static create(name=""){
    return new LocaleStringBuilder(name)
  }

  constructor(name) {
    this.name = name;
    this.localeStr = new LocaleStr(name);

    for (const key of Object.keys(LocaleService.locales)) {
      this.localeStr.addLocale(key, "")
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
      if (["", undefined].includes(this.localeStr[key]))
        console.warn(`Localização não foi configurada para a língua <${key}>`);
    }
    return this.localeStr;
  }
}

/**
 * @param {string[]} values 
 * [0] ptbr [1] en  
 */
export function loc(...values){
  return LocaleStringBuilder
    .create()
    .ptbr(values[0])
    .en(values[1])
    .build()
}