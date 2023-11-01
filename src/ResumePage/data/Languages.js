import LocaleStringBuilder from "services/LocaleStringBuilder";

export const languages = [
  LocaleStringBuilder
    .create("portuguese")
    .ptbr("Português (Nativo)")
    .en("Portuguese (Native)")
    .build(),
  LocaleStringBuilder
    .create("english")
    .ptbr("Inglês (Fluente)")
    .en("English (Fluent)")
    .build()
];
