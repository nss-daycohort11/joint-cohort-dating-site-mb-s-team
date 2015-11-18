define(function(require) {
	var _ = require("lodash");
	var Q = require("q");
	var $ = require("jquery");
	var hbs = require("hbs/handlebars");	
	var firebase = require("firebase");

	var thingsRef = new Firebase("https://lampgroupproject.firebaseio.com/DealBreakers");
	
 	$(document).on("click", ".dealBreakerBtn", function() {
    	console.log("click is regitsering");
    	var thing = $(this).attr("id");
    	console.log(thing);

	   	$.ajax({
	      url: thingsRef+"/"+thing+"/.json",
	      method: "PATCH",
	      data : JSON.stringify({undo: "show", dbButton: "hidden"})
	    }).done(function(response) {
	      console.log("response from Firebase:", response);
	      // You'll likely want to execute the code that you're using
	      // on page load here to run the GET XHR and bind to Handlebars
	    });
    	 console.log(thing);
	}); 

 	$(document).on("click", ".undoBtn", function() {
    	console.log("click is regitsering");
    	var thing = $(this).attr("id");
    	console.log(thing);

	   	$.ajax({
	      url: thingsRef+"/"+thing+"/.json",
	      method: "PATCH",
	      data : JSON.stringify({undo: "hidden", dbButton: "show"})
	    }).done(function(response) {
	      console.log("response from Firebase:", response);
	      // You'll likely want to execute the code that you're using
	      // on page load here to run the GET XHR and bind to Handlebars
	    });
    	 console.log(thing);
	}); 
});    	
 