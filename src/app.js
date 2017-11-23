import $ from 'jquery';

// CSS
import './css/foundation.css';
import './css/style.css';


import Application from './models/application';
import ApplicationView from './views/application_view';

$(document).ready(function() {
  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });
  appView.render();
});
