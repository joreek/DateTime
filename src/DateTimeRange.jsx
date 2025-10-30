import { useState } from "react";
import dayjs from "dayjs";
import { Row, Col, message } from "antd";
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

export default function DateTimeRange() {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // проверка, чтобы конец >= начала
  const validateEnd = (date, time) => {
    if (!startDate || !startTime) return true;

    const start = dayjs(startDate)
      .hour(startTime.hour())
      .minute(startTime.minute());
    const end = dayjs(date).hour(time.hour()).minute(time.minute());

    if (end.isBefore(start)) {
      message.error("Дата/время конца не может быть меньше начала!");
      return false;
    }
    return true;
  };

  const handleEndDateChange = (date) => {
    if (endTime && !validateEnd(date, endTime)) return;
    setEndDate(date);
  };

  const handleEndTimeChange = (time) => {
    if (endDate && !validateEnd(endDate, time)) return;
    setEndTime(time);
  };

  return (
    <Row gutter={16}>
      <Col>
        <DateInput
          value={startDate}
          onChange={setStartDate}
          placeholder="Дата начала"
        />
      </Col>
      <Col>
        <TimeInput
          value={startTime}
          onChange={setStartTime}
          placeholder="Время начала"
        />
      </Col>
      <Col>—</Col>
      <Col>
        <DateInput
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="Дата конца"
        />
      </Col>
      <Col>
        <TimeInput
          value={endTime}
          onChange={handleEndTimeChange}
          placeholder="Конец времен"
        />
      </Col>
    </Row>
  );
}