// define(function(require) {
//   var q = require("q");

<<<<<<< HEAD
//   // This function should return a promise
//   function() {
//     $.ajax({
//       url: "your favorites Firebase URL here",
//       method: "POST"
//     })
//     .done(function(response) {
//       // Resolve the promise
//     }
//     .fail(function(xhr, status, error) {
//       // Reject the promise
//     });
//   };
// });


//     define(["jquery"], function($){
//   return {
//     popMainJs : function (cb) {
//       $.ajax({
//         url: "https://lampgroupproject.firebaseio.com/DealBreakers"
//         }).done(cb);
//     }
//   };
// });
=======
  // This function should return a promise
  function() {
    $.ajax({
      url: "https://lampgroupproject.firebaseio.com/",
      method: "POST"
    })
    .done(function(response) {
      // Resolve the promise
    }
    .fail(function(xhr, status, error) {
      // Reject the promise
    });
  };
});

>>>>>>> getData
