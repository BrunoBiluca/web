import Category from "components/Category/Category.model";

const categories = [
  new Category("games", "Games", "#69b419"),
  new Category("multiplayer", "Multi Jogador", "#993399")
]

export function getCategory(key){
  return categories.find(c => c.key === key)
}