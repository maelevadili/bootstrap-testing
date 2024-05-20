// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"
import "fullcalendar"

// Conflict with Bootstrap ⬇️
// import "theme"
// import "flatpickr"
// import "simplebar"

// BOOTSTRAP
// Enable popovers everywhere
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// FULLCALENDAR
// Extra functions to load FullCalendar properly
// The first function loads all your FullCalendar configuration, and the second one removes
// FullCalendar from a before_cache tag.
// Those functions are important because if you do not add them, your calendar may be shown
// multiple times in a weird way.
function eventCalendar() {
  return $('#calendar').fullCalendar({
    events: [
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
        allDay: false // will make the time show
      }
    ],
    eventColor: '#00d27a'
  });
};
function clearCalendar() {
  $('#calendar').fullCalendar('delete');
  $('#calendar').html('');
};

// Calling previous functions
$(document).on('turbo:load', function () {
  eventCalendar();
});
$(document).on('turbo:before-cache', clearCalendar);
