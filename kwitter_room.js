
 var firebaseConfig = {
      apiKey: "AIzaSyC455f4ZKeud8Rk-maPlk692_7syvTgZn0",
      authDomain: "kwitterrrr-b8e27.firebaseapp.com",
      databaseURL: "https://kwitterrrr-b8e27-default-rtdb.firebaseio.com",
      projectId: "kwitterrrr-b8e27",
      storageBucket: "kwitterrrr-b8e27.appspot.com",
      messagingSenderId: "303908782239",
      appId: "1:303908782239:web:52ca8f27c76f9a814f22aa",
      measurementId: "G-P7H5B40PJW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem(user_name);
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"Rooooom nameeeeeee" 
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name-" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById=("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Rooooom_nameeeee", name);
  window.location="kwitter_page.html";
}
