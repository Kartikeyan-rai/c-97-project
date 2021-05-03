  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWIXATqJmLZI5DEnoYU3SJb3hvB04L-s8",
    authDomain: "chat-app-592d2.firebaseapp.com",
    databaseURL: "https://chat-app-592d2-default-rtdb.firebaseio.com",
    projectId: "chat-app-592d2",
    storageBucket: "chat-app-592d2.appspot.com",
    messagingSenderId: "65585058068",
    appId: "1:65585058068:web:5cc7c620daadddf32ab201"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names);
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     });});}
     function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("Room Name",name);
       window.location="chat_page.html";
     }
     username=localStorage.getItem("user_name");
document.getElementById("Welcome").innerHTML="Welcome "+ username +"!";
function room(){
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({purpouse:"adding a room"});
 localStorage.setItem("Room Name",room_name);
 window.location="chat_page.html";
}
getData();

