//module for interfacing with GA

/**
@param [category] - usually "interaction"
@param action - what happened
@param [label] - not usually visible in dashboard, defaults to title or URL
*/
var a = document.createElement("a");

var slug = window.location.pathname.replace(/^\/|\/$/g, "");

var track = function(name, params = {}) {
  
  console.log(`Tracking: ${name}`, params);

  if (window.gtag) gtag("event", name, params);
};

module.exports = track;
