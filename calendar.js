function CalendarController($scope) {
  const ctrl = this;
  // Create an array with integers from 1 to 25 shuffled with twenty 0
  ctrl.windows = _.shuffle(_.concat(_.range(1, 26), _.fill(Array(20), 0)));
  // The lastOpenedWindow is stored in the localStorage !
  ctrl.lastOpenedWindow = parseInt(localStorage.lastOpenedWindow) || 0;
  ctrl.openWindow = function(windowIdx) {
    ctrl.lastOpenedWindow = windowIdx;
    localStorage.lastOpenedWindow = windowIdx;
  }
}

angular.module('calendarApp')
.component('calendar', {
  templateUrl: 'calendar.html',
  controller: CalendarController,
});