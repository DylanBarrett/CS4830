//references our players that we added to database and prints them to the console
//var ref = firebase.database().ref('players');
//
//console.log(ref);

//setting method replaces data on a specific path
//var playersRef = firebase.database().ref("players/");
//
//playersRef.set ({
//   John: {
//      number: 1,
//      age: 30
//   },
//	
//   Amanda: {
//      number: 2,
//      age: 20
//   }
//});

//update method works in a similar way to set method
//var johnRef = firebase.database().ref("players/John");
//
//johnRef.update ({
//   "number": 10
//});

//the push method creates a unique id when data is pushed to the database
//you will need to replace this link with the link that is provided to you on your 
//firebase database 
//var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');
//
//var playersRef = ref.child("players");
//playersRef.push ({
//   name: "John",
//   number: 1,
//   age: 30
//});
//
//playersRef.push ({
//   name: "Amanda",
//   number: 2,
//   age: 20
//});

//reading data from my firebase database and printing it to the console
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});





////signin process
//
//var email = "test@email.com";
//var password = "password";
//
//firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   console.log(error.code);
//   console.log(error.message);
//});
//
//
//
//
////signout function
//firebase.auth().signOut().then(function() {
//   console.log("Logged out!")
//}, function(error) {
//   console.log(error.code);
//   console.log(error.message);
//});