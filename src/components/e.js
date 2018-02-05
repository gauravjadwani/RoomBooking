import * as firebase from 'firebase'
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyAxllcQc0eYQVUnyu2WQHO7eH9G6mKKdBE",
    authDomain: "roombooking-80143.firebaseapp.com",
    databaseURL: "https://roombooking-80143.firebaseio.com",
    projectId: "roombooking-80143",
    storageBucket: "roombooking-80143.appspot.com",
    messagingSenderId: "986075411769"
  };
  firebase.initializeApp(config)
  database = firebase.database();
  // console.log('firebase ',database.ref('/roombooking-80143/'));

  var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
}
