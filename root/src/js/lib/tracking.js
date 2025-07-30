//module for interfacing with GA

/**
@param [category] - usually "interaction"
@param action - what happened
@param [label] - not usually visible in dashboard, defaults to title or URL
*/
var track = function(name, params = {}) {
  console.log(`Tracking: ${name}`, params);
  if (window.gtag) gtag("event", name, params);
};

export default track;
