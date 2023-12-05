const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzRruY6njgU9pVaOzH0AGLm8p0bpP9vvk",
    authDomain: "weddingeventplanner-d4f3c.firebaseapp.com",
    databaseURL: "https://weddingeventplanner-d4f3c-default-rtdb.firebaseio.com",
    projectId: "weddingeventplanner-d4f3c",
    storageBucket: "weddingeventplanner-d4f3c.appspot.com",
    messagingSenderId: "724914702017",
    appId: "1:724914702017:web:821556ab87b273a58d7640",
    measurementId: "G-6WY11EEB1Y"
  });
  
  const auth = firebaseApp.auth();
  const currentUser=null;
  const email = document.getElementById("emailInput");
  const password = document.getElementById("passwordInput");  
  const booknow = document.getElementById("booknow");
  const realTime = firebase.database();
  const dbRef = firebase.database().ref();
  const detailsRef = dbRef.child('userdetails');
  detailsRef.on("child_added", function (snapshot, prevChildKey) {
      var newPost = snapshot.val();
  });
  
  

  //checking if user is logged in or not
  auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, allow access to the protected route
        console.log("User is signed in");
        window.location.href = "homepage.html"; // Redirect to the protected page
    } else {
        // No user is signed in, redirect to the login page or show a message
        console.log("No user is signed in");
    }
  });

  // Sign up and Sign in event listeners
  booknow.addEventListener("click", () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email.value);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user);
        currentUser=res.user;
        alert("New user created successfully !");
        send();
      })
      .catch((err) => {
        alert(err.message);
      });
  });
  
  
 
