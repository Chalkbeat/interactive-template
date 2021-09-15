//module for interfacing with GA

/**
@param [category] - usually "interaction"
@param action - what happened
@param [label] - not usually visible in dashboard, defaults to title or URL
*/
var a = document.createElement("a");

var slug = window.location.pathname.replace(/^\/|\/$/g, "");

var track = function(eventAction, eventLabel, eventValue) {
  var event = {
    eventAction,
    eventLabel,
    eventValue,
    hitType: "event",
    eventCategory: "projects-" + slug
  }

  console.log(`Tracking: ${eventAction} / ${eventLabel} / ${eventValue}`);

  if (window.ga) ga("send", event);
};

module.exports = track;
