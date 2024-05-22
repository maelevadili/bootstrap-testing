// Not use for now (can't make it work properly)
// https://fullcalendar.io/docs/plugin-index

import { Controller } from "@hotwired/stimulus"
import { Calendar } from "fullcalendar"

let events = [
  {
    title: 'event1',
    start: '2024-05-21',
    end: '2024-05-22'
      },
  {
    title: 'event2',
    start: '2024-05-25',
    end: '2024-05-28'
      },
  {
    title: 'event3',
    start: '2024-05-29T12:30:00',
    end: '2024-05-29T14:30:00',
    allDay: false // will make the time show
      }
];

export default class extends Controller {
  connect() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      // plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      // Declare plugins is not needed.
      // I guess they're automatically added from "fullcalendar"
      // See https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.js
      initialView: 'dayGridMonth',
      // initialView: 'listMonth',
      // initialView: 'listWeek',
      // initialView: 'dayGridWeek',
      // initialView: 'dayGridDay',
      defaultView: 'dayGridMonth',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,listMonth'
      },
      events: events,
      eventColor: '#00d27a'
    });
    calendar.render();
  }
}
