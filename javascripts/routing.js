define(function(require) {
  var $ = require('jquery');

  return {
    goTo: function(location) {
      if (location === "profile") {
        console.log("profile");
      } else if (location === "dealbreakers") {
        console.log("dealbreakers");
      } else if (location === "matches") {
        console.log("matches");
      }
    }
  }
});