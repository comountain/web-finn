import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function MyCa() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{marginLeft: 750, backgroundColor: "#3fffff"}}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}