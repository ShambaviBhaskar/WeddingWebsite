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
  var currentUser=null;
  const email = document.getElementById("emailInput");
  const password = document.getElementById("passwordInput");
  const signUpBtn = document.getElementById("signUpBtn");
  const signInBtn = document.getElementById("signInBtn");
  const realTime = firebase.database();
  const dbRef = firebase.database().ref();
  const detailsRef = dbRef.child('userdetails');
  detailsRef.on("child_added", function (snapshot, prevChildKey) {
      var newPost = snapshot.val();
  });
  function send() {
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var phone = document.getElementById("phone").value;
      var firstname = document.getElementById("firstname").value;
      var lastname = document.getElementById("lastname").value;
      var userid=currentUser.uid;
      detailsRef.push().set({
          firstname:firstname,
          lastname:lastname,
          email: email,
          username: username,
          password: password,
          phone:phone,
          userid:userid

      });
  }
  


  // Sign up and Sign in event listeners
  signUpBtn.addEventListener("click", () => {
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
  
 

