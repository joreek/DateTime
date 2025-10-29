import { TimePicker } from "antd";

export default function TimeInput({ value, onChange, placeholder }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TimePicker
        value={value}
        onChange={onChange}
        format="HH:mm"
        placeholder={placeholder}
      />
    </div>
  );
}