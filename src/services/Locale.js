export default function Locale({ str, upper }) {

  let value = str.toString()

  if (upper)
    value = value.toUpperCase()

  return value
}