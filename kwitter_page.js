const firebaseConfig = {
      apiKey: "AIzaSyDIV3yQ40GQaHdxHBHbtHzvTdsHKMUR_o0",
      authDomain: "kwitter-1-a53fb.firebaseapp.com",
      databaseURL: "https://kwitter-1-a53fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-a53fb",
      storageBucket: "kwitter-1-a53fb.appspot.com",
      messagingSenderId: "936833652852",
      appId: "1:936833652852:web:18a6d50a55d44b0ffa9921"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name =localStorage.getItem("user_name");
    room_name =localStorage.getItem("room_name");

    function send ()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";

}
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
