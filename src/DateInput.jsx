import { DatePicker } from "antd";

export default function DateInput({ value, onChange, placeholder }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DatePicker
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
