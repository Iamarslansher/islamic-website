import { Calendar } from "lucide-react";
import React from "react";

function IslamicCalendar() {
  const date = new Date().toDateString();
  console.log(date);
  return (
    <div>
      <Calendar />

      {date}
    </div>
  );
}

export default IslamicCalendar;
