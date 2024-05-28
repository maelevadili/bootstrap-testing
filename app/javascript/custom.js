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
/*                               Navbar Combo Layout                              */
/* -------------------------------------------------------------------------- */
var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;
  if (classes) {
    breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
      return cls.includes('navbar-expand-');
    }).pop().split('-').pop()];
  }
  return breakpoint;
};

var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};
var addClass = function addClass(el, className) {
  el.classList.add(className);
};

var utils = {
  breakpoints: breakpoints,
  getBreakpoint: getBreakpoint,
  resize: resize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
};

var Selector = {
  NAVBAR_VERTICAL: '.navbar-vertical',
  NAVBAR_TOP_COMBO: '[data-navbar-top="combo"]',
  COLLAPSE: '.collapse',
  DATA_MOVE_CONTAINER: '[data-move-container]',
  NAVBAR_NAV: '.navbar-nav',
  NAVBAR_VERTICAL_DIVIDER: '.navbar-vertical-divider',
  HTML: 'html',
  NAVBAR_VERTICAL_TOGGLE: '.navbar-vertical-toggle',
  NAVBAR_VERTICAL_COLLAPSE: '.navbar-vertical .navbar-collapse',
  ECHART_RESPONSIVE: '[data-echart-responsive]'
};
var Events = {
  CLICK: 'click',
  MOUSE_OVER: 'mouseover',
  MOUSE_LEAVE: 'mouseleave',
  NAVBAR_VERTICAL_TOGGLE: 'navbar.vertical.toggle'
};
var ClassName = {
  FLEX_COLUMN: 'flex-column',
  NAVBAR_VERTICAL_COLLAPSED: 'navbar-vertical-collapsed',
  NAVBAR_VERTICAL_COLLAPSED_HOVER: 'navbar-vertical-collapsed-hover'
};
var ClassNames = {
  NAVBAR_GLASS_SHADOW: 'navbar-glass-shadow',
  SHOW: 'show',
  NAVBAR_VERTICAL_COLLAPSED: 'navbar-vertical-collapsed',
  NAVBAR_VERTICAL_COLLAPSED_HOVER: 'navbar-vertical-collapsed-hover'
};

var navbarVerticalToggle = document.querySelector(Selector.NAVBAR_VERTICAL_TOGGLE);
var html = document.querySelector(Selector.HTML);
var navbarVerticalCollapse = document.querySelector(Selector.NAVBAR_VERTICAL_COLLAPSE);
if (navbarVerticalToggle) {
  navbarVerticalToggle.addEventListener(Events.CLICK, function (e) {
    navbarVerticalToggle.blur();
    html.classList.toggle(ClassNames.NAVBAR_VERTICAL_COLLAPSED);

    // Set collapse state on localStorage
    var isNavbarVerticalCollapsed = utils.getItemFromStore('isNavbarVerticalCollapsed');
    utils.setItemToStore('isNavbarVerticalCollapsed', !isNavbarVerticalCollapsed);
    var event = new CustomEvent(Events.NAVBAR_VERTICAL_TOGGLE);
    e.currentTarget.dispatchEvent(event);
  });
}
if (navbarVerticalCollapse) {
  navbarVerticalCollapse.addEventListener(Events.MOUSE_OVER, function () {
    if (utils.hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED)) {
      html.classList.add(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
    }
  });
  navbarVerticalCollapse.addEventListener(Events.MOUSE_LEAVE, function () {
    if (utils.hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER)) {
      html.classList.remove(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
    }
  });
}

var navbarVertical = document.querySelector(Selector.NAVBAR_VERTICAL);
var navbarTopCombo = document.querySelector(Selector.NAVBAR_TOP_COMBO);
var moveNavContent = function moveNavContent(windowWidth) {
  var navbarVerticalBreakpoint = utils.getBreakpoint(navbarVertical);
  var navbarTopBreakpoint = utils.getBreakpoint(navbarTopCombo);
  if (windowWidth < navbarTopBreakpoint) {
    var navbarCollapse = navbarTopCombo.querySelector(Selector.COLLAPSE);
    var navbarTopContent = navbarCollapse.innerHTML;
    if (navbarTopContent) {
      var targetID = utils.getData(navbarTopCombo, 'move-target');
      var targetElement = document.querySelector(targetID);
      navbarCollapse.innerHTML = '';
      targetElement.insertAdjacentHTML('afterend', "\n            <div data-move-container>\n              <div class='navbar-vertical-divider'>\n                <hr class='navbar-vertical-hr' />\n              </div>\n              ".concat(navbarTopContent, "\n            </div>\n          "));
      if (navbarVerticalBreakpoint < navbarTopBreakpoint) {
        var navbarNav = document.querySelector(Selector.DATA_MOVE_CONTAINER).querySelector(Selector.NAVBAR_NAV);
        utils.addClass(navbarNav, ClassName.FLEX_COLUMN);
      }
    }
  } else {
    var moveableContainer = document.querySelector(Selector.DATA_MOVE_CONTAINER);
    if (moveableContainer) {
      var _navbarNav = moveableContainer.querySelector(Selector.NAVBAR_NAV);
      utils.hasClass(_navbarNav, ClassName.FLEX_COLUMN) && _navbarNav.classList.remove(ClassName.FLEX_COLUMN);
      moveableContainer.querySelector(Selector.NAVBAR_VERTICAL_DIVIDER).remove();
      navbarTopCombo.querySelector(Selector.COLLAPSE).innerHTML = moveableContainer.innerHTML;
      moveableContainer.remove();
    }
  }
};
moveNavContent(window.innerWidth);
utils.resize(function () {
  return moveNavContent(window.innerWidth);
});

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

