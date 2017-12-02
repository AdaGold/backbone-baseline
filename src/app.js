// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';
import 'foundation-sites/scss/foundation.scss';
import './css/style.css';

import Trip from './models/trip';


const myTrip = new Trip({});

// CSS


$(document).ready( () => {
  $('main').html('<h1>Hello World!</h1>');
});
