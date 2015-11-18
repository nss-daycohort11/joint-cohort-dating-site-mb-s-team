define(function(require) {
//dependencies

  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var Login = require("login");
  var Overlay = require("overlay");
  var auth = require("authentication");

    // ******* navigation links *******//

	// ******* dealbreakers view *******//
	$("#dealbreakerTab").click(function() {
		$("#profileView").addClass("hidden");
		$("#profileView").removeClass("active");

		$("#thingsView").addClass("active");
		$("#thingsView").removeClass("hidden");
	});

	$("#profileTab").click(function() {
		$("#profileView").addClass("active");
		$("#profileView").removeClass("hidden");

		$("#thingsView").addClass("hidden");
		$("#thingsView").removeClass("active");
	});
	
});