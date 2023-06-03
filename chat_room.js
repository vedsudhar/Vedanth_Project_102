
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD8iDh2l8yY8F5TDKdUao1Ih6OiPTdJHYk",
    authDomain: "chat-room-e6045.firebaseapp.com",
    projectId: "chat-room-e6045",
    storageBucket: "chat-room-e6045.appspot.com",
    messagingSenderId: "122807895376",
    appId: "1:122807895376:web:1e46bfab02b449fb785855",
    measurementId: "G-8T9YTCX77G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("User_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name",room_name);

    window.location = "chat_room.html";
}

function getData()
{
    firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;

        console.log("Room Name - " + Room_names);

        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

        document.getElementById("output").innerHTML += row;

    });});}
    
    getData();

    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "chat_room.html";
    }

    function logout()
    {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
    }