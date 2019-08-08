import React from 'react';
import { Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({label, startDate,  onHandleCalendarChange}) => (
  <div className="filterPopupBlock">
    <div className="filterPopupBlock__label">{label}</div>
    <DatePicker
      customInput={<Input  icon='calendar alternate outline' iconPosition='left' placeholder='Select date'/>}
      showMonthYearPicker
      selected={startDate}
      dateFormat="MM/yyyy"
      onChange={onHandleCalendarChange}
      placeholderText="Click to select a date"
    />
  </div>
);
