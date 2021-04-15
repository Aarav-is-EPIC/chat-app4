
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
  
user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

   function send(){
       msg = document.getElementById("msg").value;
       console.log(msg);
       firebase.database().ref(room_name).push({
           person:user_name,
           message:msg,
           like:0
        });
        document.getElementById("msg").value = "";
   }
   function getData() 
   { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "AI") 
   { firebase_message_id = childKey; 
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);
} }); }); } getData();

