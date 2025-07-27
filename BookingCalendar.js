import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function BookingCalendar({ events, handleSlotSelect }) {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      selectable={true}
      events={events} // Array of booked slots
      select={info => handleSlotSelect(info.startStr)}
      height="auto"
    />
  );
}