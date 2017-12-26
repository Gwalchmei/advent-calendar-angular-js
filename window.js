function WindowController($scope) {
  const ctrl = this;
  ctrl.isOpen = false;
  ctrl.$onInit = function() {
    // onInit open the window if it was already opened in a previous session
    ctrl.isOpen = ctrl.index > 0 && ctrl.calendarCtrl.lastOpenedWindow >= ctrl.index;
  }
  ctrl.isOpenable = function() {
    // logic to force the windows opening in the correct order
    return ctrl.index === (ctrl.calendarCtrl.lastOpenedWindow + 1);
  }

  ctrl.open = function() {
    ctrl.isOpen = true;
    ctrl.onOpen({windowIdx: ctrl.index});
  }
}

angular.module('calendarApp')
.component('window', {
  templateUrl: "window.html",
  require: {
    calendarCtrl: '^calendar',
  },
  bindings: {
    index: '<',
    onOpen: '&',
  },
  controller: WindowController,
});