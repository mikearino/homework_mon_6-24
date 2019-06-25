import { template } from './template';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#template-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = template(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
