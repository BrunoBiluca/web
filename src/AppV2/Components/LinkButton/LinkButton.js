import { Link } from "react-router-dom";

const styles = {
  flatButton: {
    padding: "0.5em 1.2em",
    borderRadius: "20px",
    background: "#F54760",
    borderColor: "#F54760",
    boxShadow: "none",
    color: "#fff",
    borderStyle: "solid",
    margin: "1em 0",
    cursor: "pointer"
  }
}

export default function LinkButton({ label, link }) {
  return (
    <Link to={link}><button style={styles.flatButton}>{label}</button></Link>
  )
}