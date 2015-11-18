define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var uid = require("uid");
  
//If your user does not have an existing session, you can prompt the user 
//to login and then invoke the GitHub login popup
  var ref = new Firebase("https://lampgroupproject.firebaseio.com/");

//github authentication
  $("#login").on("click", function() {
    console.log("login clicked");

    var authData = ref.getAuth();
    if (authData === null) {
      ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          // uid.setUid(authData.uid);
          // uid.setProfile(authData.github.profileImageURL);
          // uid.setName(authData.github.displayName);

          var usersFirebase = ref.child("users");
          var userExists = false;
          usersFirebase.once("value", function(dataSnapshot) {
            dataSnapshot.forEach(function(childSnapshot) {
              if (childSnapshot.val().uid === authData.uid) {
                userExists = true;
              }
            });

            if (userExists === false) {
              usersFirebase.push({uid:authData.uid});
            }
            window.location.assign("index.html");
          });
        }
      },{ //session will expire upon browser shutdown
          remember: "sessionOnly",
          scope: "user,gist"
        });

    } else {
      var thingsRef = new Firebase("https://lampgroupproject.firebaseio.com/DealBreakers");
      thingsRef.once("value", function(dataSnapshot) {
        var allThings = dataSnapshot.val();
        console.log("allThings", allThings);

        require(["hbs!../templates/things"], function(tpl) {
          $(".all-the-things").html(tpl({ things:allThings }));
        });
        $("#log-inDiv").addClass("hidden");
        $("#thingsView").addClass("active");
        $("#thingsView").removeClass("hidden");
        $("#navBar").removeClass("hidden");
        $("#navBar").addClass("active");

      });

      // uid.setUid(authData.uid);
      // uid.setProfile(authData.github.profileImageURL);
      // uid.setName(authData.github.displayName);
    }
  });
});