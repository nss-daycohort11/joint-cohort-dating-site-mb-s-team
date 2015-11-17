require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    "firebase": "../lib/bower_components/firebase/firebase"
  },
  shim: {
    'bootstrap': ['jquery'],

    "firebase": {
        exports: "Firebase"
      }
  }
});

require(

  ["dependencies", "firebase"], 
  function(_$_, Firebase) {
      console.log("weseeyou");
    var myFirebaseRef = new Firebase("https://lampgroupproject.firebaseio.com/DealBreakers");
      console.log("myFirebaseRef", myFirebaseRef);
      myFirebaseRef.child("ID:Dog").on("value", function(snapshot) {
    var Dog = snapshot.child("ID:Dog").val();
      console.log("Dog", Dog);

  })
});

    // var myFirebaseRef = new Firebase("https://lampgroupproject.firebaseio.com/DealBreakers");
    //  myFirebaseRef.on("value", function(snapshot) {
    //    arrayOfDealBreakers = [];
    //    var DealBreakers = snapshot.val();
    //    $("#popDBs").html(templates.DealBreakers(arrayOfDealBreakers));
 

  ["dependencies", "authentification"], 
  function(dependencies, auth) {


    console.log("weseeyou");
      var myFirebaseRef = new Firebase("https://lampgroupproject.firebaseio.com/");
      console.log("myFirebaseRef", myFirebaseRef);
      myFirebaseRef.child("DealBreakers").on("value", function(snapshot) {
      var DealBreakers = snapshot.val();
      console.log("DealBreakers Object", DealBreakers);
    
  }
)};

 



//     /*
//       You can choose to use the REST methods to interact with
//       Firebase, or you can use the Firebase API with event
//       listeners. It's completely up to each team.

//       If you choose the former, I created two boilerplate modules
//       named `potential-mates.js`, and `add-favorite.js`.
//      */
    
 

