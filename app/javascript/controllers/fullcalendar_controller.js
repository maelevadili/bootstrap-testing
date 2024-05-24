// Not use for now (can't make it work properly)
// https://fullcalendar.io/docs/plugin-index

import { Controller } from "@hotwired/stimulus"
import { Calendar } from "fullcalendar"

let events = [
  {
    title: '24h event',
    start: '2024-05-21T10:00:00',
    end: '2024-05-22T10:00:00',
    allDay: false
      },
  {
    title: '3-day event',
    start: '2024-05-25T00:00:00',
    end: '2024-05-28T00:00:00', // Means 28 is excluded
    allDay: false
      },
  {
    title: 'event3',
    start: '2024-05-29T12:30:00',
    end: '2024-05-29T14:30:00',
    allDay: false
      },
  {
    title: 'event4',
    start: '2024-05-29T09:00:00',
    end: '2024-05-29T11:00:00',
    allDay: false // will make the time show
  }
];

let test = document.getElementById("calendar-filter").value;
console.log(test);

let userView = function calendarViewChange() {
  if (document.getElementById("calendar-filter").value == "Day view") {
    userView = 'timeGridDay';
  }
  else if (document.getElementById("calendar-filter").value == "List view") {
    userView = 'listWeek';
  }
  else if (document.getElementById("calendar-filter").value == "Month view") {
    userView = 'dayGridMonth';
  }
  else {
    userView = 'timeGridWeek';
  }
};
console.log(userView);
console.log("Hello from fullcalendar_controller.js 2");

export default class extends Controller {
  connect() {
    console.log("Hello from fullcalendar_controller.js");

    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      // plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      // Declare plugins is not needed.
      // I guess they're automatically imported from "fullcalendar"
      // See https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.js
      initialView: 'timeGridWeek',
      // initialView: 'dayGridMonth',
      // initialView: 'listMonth',
      // initialView: 'listWeek',
      // initialView: 'dayGridWeek',
      // initialView: 'dayGridDay',
      // defaultView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'timeGridWeek,listWeek,timeGridDay,listDay,dayGridMonth' // user can switch between the two
      },
      events: events,
      eventColor: '#00d27a'
    });
    calendar.render();
  }
}
