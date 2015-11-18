define(function(require) {
//dependencies

  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");

    // ******* navigation links *******//

	// *** dealbreakers view ***//
	$("#dealbreakerTab").click(function() {
		$("#profileView").addClass("hidden");
		$("#profileView").removeClass("active");

		$("#thingsView").addClass("active");
		$("#thingsView").removeClass("hidden");
	});

	// *** profile view ***//
	$("#profileTab").click(function() {
		$("#profileView").addClass("active");
		$("#profileView").removeClass("hidden");

		$("#thingsView").addClass("hidden");
		$("#thingsView").removeClass("active");
	});
	
});