define(function(require) {
  var firebase = require("firebase");
  var uid = require("uid");
  var ref = new Firebase("https://lampgroupproject.firebaseio.com/");
  var authData = ref.getAuth();
  if(authData === null) {
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        uid.setUid(authData.uid);
      }
    },
    {remember: "sessionOnly"});
  } else {
    uid.setUid(authData.uid);
  }
});