// define(function(require) {
//   var firebase = require("firebase");
//   var $ = require("jquery");
//   var uid = require("uid");
  

//   var thingsRef = new Firebase("https://lampgroupproject.firebaseio.com/DealBreakers");
//       thingsRef.once("value", function(dataSnapshot) {
//         var allThings = dataSnapshot.val();
//         console.log("allThings", allThings);

//         require(["hbs!../templates/things"], function(tpl) {
//           $(".all-the-things").html(tpl({ things:allThings }));
//         });
//   });

//   $(document).on("click", ".dealBreakerBtn", function(e) {
//         thing = $(this).attr("id");



//         });
//     });
// });
