import placeholder from "images/placeholder.png";

export default function Image(props) {

  if (!props.src) {
    return <img
      src={placeholder}
      alt="placeholder"
      className={props.className}
    />
  }

  return <img
    src={props.src}
    alt={props.alt}
    className={props.className}
  />
}