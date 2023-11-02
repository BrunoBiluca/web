export function toList(dict) {
  return Object.keys(dict).map(k => dict[k])
}