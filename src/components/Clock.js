import React from 'react';
import $ from 'jquery';
import moment from 'moment';

$(function () {

  function updateClock() {
    var now = moment(),
      second = now.seconds() * 6,
      minute = now.minutes() * 6 + second / 60,
      hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

    $('#hour').css("transform", "rotate(" + hour + "deg)");
    $('#minute').css("transform", "rotate(" + minute + "deg)");
    $('#second').css("transform", "rotate(" + second + "deg)");
  }

  function timedUpdate() {
    updateClock();
    setTimeout(timedUpdate, 1000);
  }

  timedUpdate();
});


const Clock = () => (
  <div className="hero-circle">
    <div className="hero-face">
      <div id="hour" className="hero-hour" />
      <div id="minute" className="hero-minute" />
      <div id="second" className="hero-second" />
    </div>
  </div>
);

export default Clock;