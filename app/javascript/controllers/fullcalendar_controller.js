// Not use for now (can't make it work properly)

import { Controller } from "@hotwired/stimulus"
import FullCalendar from 'fullcalendar'

export default class extends Controller {
  connect() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  }
}
