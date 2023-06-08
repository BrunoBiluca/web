import ActionButton from "./ActionButton";

export default function ActionButtonBlock({ hide, label, onClick }) {
  return (
    <div style={{ textAlign: "center", padding: "2em 0" }}>
      <ActionButton
        hide={hide}
        label={label}
        onClick={onClick}
      />
    </div>
  );
}