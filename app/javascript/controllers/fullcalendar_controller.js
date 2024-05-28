// https://fullcalendar.io/docs/plugin-index

import { Controller } from "@hotwired/stimulus"
import { Calendar } from "fullcalendar"

const events = [
  {
    title: '24h event',
    start: '2024-05-28T10:00:00',
    end: '2024-05-29T10:00:00',
    allDay: false
      },
  {
    title: '3-day event',
    start: '2024-05-29T00:00:00',
    end: '2024-05-31T00:00:00', // Means 31 is excluded
    allDay: false
      },
  {
    title: 'event3',
    start: '2024-06-01T12:30:00',
    end: '2024-06-01T14:30:00',
    allDay: false
      },
  {
    title: 'event4',
    start: '2024-05-31T09:00:00',
    end: '2024-05-31T11:00:00',
    allDay: false // will make the time show
  }
];

export default class extends Controller {
  connect() {
    console.log("Hello from fullcalendar_controller.js");

    var camelize = function camelize(str) {
      var text = str.replace(/[-_\s.]+(.)?/g, function (match, capture) {
        if (capture) {
          return capture.toUpperCase();
        }
        return '';
      });
      return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
    };
    var getData = function getData(el, data) {
      try {
        return JSON.parse(el.dataset[camelize(data)]);
      } catch (e) {
        return el.dataset[camelize(data)];
      }
    };
    var utils = {
      camelize: camelize,
      getData: getData
    };

    var Selectors = {
      ACTIVE: '.active',
      ADD_EVENT_FORM: '#addEventForm',
      ADD_EVENT_MODAL: '#addEventModal',
      CALENDAR: '.calendar',
      CALENDAR_TITLE: '.calendar-title',
      DATA_CALENDAR_VIEW: '[data-fc-view]',
      DATA_EVENT: '[data-event]',
      DATA_VIEW_TITLE: '[data-view-title]',
      EVENT_DETAILS_MODAL: '#eventDetailsModal',
      EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
      EVENT_START_DATE: "#addEventModal [name='startDate']",
      INPUT_TITLE: "[name='title']"
    };
    var Events = {
      CLICK: 'click',
      SHOWN_BS_MODAL: 'shown.bs.modal',
      SUBMIT: 'submit'
    };
    var DataKeys = {
      EVENT: 'event',
      FC_VIEW: 'fc-view'
    };
    var ClassNames = {
      ACTIVE: 'active'
    };
    var eventList = events.reduce(function (acc, val) {
      if (val.schedules) {
        return acc.concat(val.schedules.concat(val));
      }
      return acc.concat(val);
    }, []);
    var updateTitle = function updateTitle(title) {
      document.querySelector(Selectors.CALENDAR_TITLE).textContent = title;
    };

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
      // headerToolbar: {
      //   left: 'prev,next,today',
      //   center: 'title',
      //   right: 'timeGridWeek,listWeek,timeGridDay,listDay,dayGridMonth' // user can switch between the two
      // },
      headerToolbar: false,
      events: events,
      eventColor: '#00d27a',
      eventTextColor: '#232E3C'
    });
    calendar.render();

    updateTitle(calendar.currentData.viewTitle);
    document.querySelectorAll(Selectors.DATA_EVENT).forEach(function (button) {
      button.addEventListener(Events.CLICK, function (e) {
        var el = e.currentTarget;
        var type = utils.getData(el, DataKeys.EVENT);
        switch (type) {
          case 'prev':
            calendar.prev();
            updateTitle(calendar.currentData.viewTitle);
            break;
          case 'next':
            calendar.next();
            updateTitle(calendar.currentData.viewTitle);
            break;
          case 'today':
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;
          default:
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;
        }
      });
      document.querySelectorAll(Selectors.DATA_CALENDAR_VIEW).forEach(function (link) {
        link.addEventListener(Events.CLICK, function (e) {
          e.preventDefault();
          var el = e.currentTarget;
          var text = el.textContent;
          el.parentElement.querySelector(Selectors.ACTIVE).classList.remove(ClassNames.ACTIVE);
          el.classList.add(ClassNames.ACTIVE);
          document.querySelector(Selectors.DATA_VIEW_TITLE).textContent = text;
          calendar.changeView(getData(el, DataKeys.FC_VIEW));
          updateTitle(calendar.currentData.viewTitle);
        });
      });
      addEventForm && addEventForm.addEventListener(Events.SUBMIT, function (e) {
        e.preventDefault();
        var _e$target = e.target,
          title = _e$target.title,
          startDate = _e$target.startDate,
          endDate = _e$target.endDate,
          label = _e$target.label,
          description = _e$target.description,
          allDay = _e$target.allDay;
        calendar.addEvent({
          title: title.value,
          start: startDate.value,
          end: endDate.value ? endDate.value : null,
          allDay: allDay.checked,
          className: allDay.checked && label.value ? "bg-".concat(label.value, "-subtle") : '',
          description: description.value
        });
        e.target.reset();
        window.bootstrap.Modal.getInstance(addEventModal).hide();
      });
    })
    addEventModal && addEventModal.addEventListener(Events.SHOWN_BS_MODAL, function (_ref15) {
      var currentTarget = _ref15.currentTarget;
      currentTarget.querySelector(Selectors.INPUT_TITLE).focus();
    });
  }
}
