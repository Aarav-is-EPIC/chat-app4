
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCfMysK1o6wjU2odFIfkkBSYUD0FASLaYw",
      authDomain: "chat-app-f177a.firebaseapp.com",
      databaseURL: "https://chat-app-f177a-default-rtdb.firebaseio.com",
      projectId: "chat-app-f177a",
      storageBucket: "chat-app-f177a.appspot.com",
      messagingSenderId: "833542720052",
      appId: "1:833542720052:web:d45f2f7b98b7e70bf5d861"
    };
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("h3user_name").innerHTML = "welcome " + username + "!";
    function addroom(){
          room_name = document.getElementById("room-name").value;
          console.log(room_name);
          localStorage.setItem("roomname",room_name);
          firebase.database().ref("/").child(room_name).update({
            AI:"HI"
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

           
           console.log("room name - " + Room_names);
           row="<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
           document.getElementById("output").innerHTML += row;
     
          
     
     
     function redirectToRoomName(name){
           console.log(name);
           localStorage.setItem("room_name",name);
           window.location = "chatapp_page.html";
     }
      //End code

      });});}
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
