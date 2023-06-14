import Category from "components/Category/Category.model";

const categories = [
  new Category("code", "Código", "#19e5e6"),
  new Category("math", "Matemática", "#39b46c"),
  new Category("games", "Games", "#69b419"),
  new Category("multiplayer", "Multi Jogador", "#993399"),
  new Category("unity", "Unity", "#000066"),
  new Category("tools", "Tools", "#3366ff")
]

export function getCategory(key) {
  let cat = categories.find(c => c.key === key)
  if(cat)
    return cat

  return new Category(key, "", "")
}