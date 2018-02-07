import firebase from 'firebase';
let config = {
  apiKey: "AIzaSyAxllcQc0eYQVUnyu2WQHO7eH9G6mKKdBE",
  authDomain: "roombooking-80143.firebaseapp.com",
  databaseURL: "https://roombooking-80143.firebaseio.com",
  projectId: "roombooking-80143",
  storageBucket: "roombooking-80143.appspot.com",
  messagingSenderId: "986075411769"
};
firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();
