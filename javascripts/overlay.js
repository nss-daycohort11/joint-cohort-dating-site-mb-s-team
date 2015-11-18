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
	      url: thingsRef+"/"+thing+"/display/.json",
	      method: "PATCH",
	      data : JSON.stringify({display: "hidden"})
	    }).done(function(response) {
	      console.log("response from Firebase:", response);
	      // You'll likely want to execute the code that you're using
	      // on page load here to run the GET XHR and bind to Handlebars
	    });
    	 console.log(thing);
	});    	
 // 	 	thingsRef.once("value", function(dataSnapshot) {
 //        var allThings = dataSnapshot.val();
 //        console.log("allThings", allThings);

	// 	require(["hbs!../templates/things"], function(tpl) {
 //          $(".all-the-things").html(tpl({ things:allThings }));
 //        });
	// });
});

	// Listen for when anything changes on the "songs" key
	// ref.child("").on("value", function(snapshot) {

  // Store the entire songs key in a local variable
  		// var allSongsObject = snapshot.val();

  // Bind the allSongsObject to the song list Handlebar template

  // Bind the unique artists to the artists template

  // Bind the unique albums to the albums template