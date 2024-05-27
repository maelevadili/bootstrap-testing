/* -------------------------------------------------------------------------- */
/* Shadow on top navbar, onscroll */
/* -------------------------------------------------------------------------- */

const topBar = document.getElementById("topnav");
// console.log(topBar);
window.onscroll = function () {
  if (window.scrollY > 22) {
    topBar.classList.add("navbar-glass-shadow");
  } else {
    topBar.classList.remove("navbar-glass-shadow");
  }
};

/* -------------------------------------------------------------------------- */
/* Fullcalendar */
/* -------------------------------------------------------------------------- */

// Important : fullcalendar needs jquery and moment to work properly,
// make sure to add them in app layout.
// Also add fullcalendar css to layout.

// Extra functions to load FullCalendar properly
// The first function loads all your FullCalendar configuration, and the second one removes
// FullCalendar from a before_cache tag.
// Those functions are important because if you do not add them, your calendar may be shown
// multiple times in a weird way.
// function eventCalendar() {
//   return $('#calendar').fullCalendar({
//     events: [
//       {
//         title: 'event1',
//         start: '2024-05-21',
//         end: '2024-05-22'
//       },
//       {
//         title: 'event2',
//         start: '2024-05-25',
//         end: '2024-05-28'
//       },
//       {
//         title: 'event3',
//         start: '2024-05-29T12:30:00',
//         allDay: false // will make the time show
//       }
//     ],
//     eventColor: '#00d27a'
//   });
// };

// function clearCalendar() {
//   $('#calendar').fullCalendar('delete');
//   $('#calendar').html('');
// };

// Calling previous functions
// $(document).on('turbo:load', function () {
//   eventCalendar();
// });
// $(document).on('turbo:before-cache', clearCalendar);

