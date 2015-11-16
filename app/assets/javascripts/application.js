// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".fields").hide();
}



function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g");
  $(link).parent().before(content.replace(regexp, new_id));
}

var count = new Audio('http://0.0.0.0:3000/audios/countdown.m4a');

function check_answer(correct, answer, id) {
    if (correct) {
      $('#' + answer + '' + '#' + answer + '').addClass('btn-success');
      $('#' + answer + '' + '#' + answer + '').removeClass('btn-warning');
      var aud = new Audio('http://0.0.0.0:3000/audios/correct.mp3');
      $('#countdown' + id).countdown('stop');
      count.pause();
      aud.play();
      count.currentTime = 0;
    } else {
      $('#' + answer + '' + '#' + answer + '').addClass('btn-danger');
      $('#' + answer + '' + '#' + answer + '').removeClass('btn-warning');
      var aud2 = new Audio('http://0.0.0.0:3000/audios/wrong.mp3');
      $('#countdown' + id).countdown('stop');
      aud2.play();
      count.pause();
      count.currentTime = 0;
    }
  }


function setTimer(id) {
    $('.b' + id).addClass('disabled');
    var t = new Date();
    t.setSeconds(t.getSeconds() + 30);
    $('#countdown' + id).countdown(t, function(event) {
      $(this).html(event.strftime('%S'));
    });
    count.play();
  }

function play_sound(audio)
{
  audio.play();
}


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




