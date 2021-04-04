
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDSt7s_rOmR68t9QPE8j-EpWuYLAci3BIs",
      authDomain: "lets-chat-app-2cb0e.firebaseapp.com",
      projectId: "lets-chat-app-2cb0e",
      storageBucket: "lets-chat-app-2cb0e.appspot.com",
      messagingSenderId: "558417531831",
      appId: "1:558417531831:web:00439cb7803c68a9898e32",
      measurementId: "G-BWEHPMJD3Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
