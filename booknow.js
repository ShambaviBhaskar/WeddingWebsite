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
var currentUser = null;
const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const booknow = document.getElementById("booknow");
const realTime = firebase.database();
const dbRef = firebase.database().ref();
const detailsPkgRef = dbRef.child('userpackages');
const detailPDRef = dbRef.child('paymentdetails');
detailsPkgRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send() {
  try {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var packages = document.getElementsByName("package");
    var package;
    for (var i = 0; i < packages.length; i++) {
      if (packages[i].checked) {
        package = packages[i].value;
      }
    }
    var eventcost = document.getElementById("budget").value;
    var eventdate = document.getElementById("eventdate").value;
    var comments = document.getElementById("comments").value;
    var zipcode = document.getElementById("zipcode").value;
    var expirydate = document.getElementById("expirydate").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var cvv = document.getElementById("cvv").value;
    var userid = currentUser.uid;
    detailsPkgRef.push().set({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      eventcost: eventcost,
      eventdate: eventdate,
      packagename: package,
      userid: userid,
      comments: comments

    });

    detailPDRef.push().set({
      firstname: firstname,
      lastname: lastname,
      cvv: cvv,
      expirydate: expirydate,
      userid: userid,
      cardnumber: cardnumber
    });
    alert("Successfully register wedding event.")
    window.location.href = "homepage.html";
  }
  catch (err) {
    alert("Failed to register wedding event.")
  }
}

//checking if user is logged in or not
auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in, allow access to the protected route
    console.log("User is signed in");
    currentUser = user;
    // window.location.href = "homepage.html"; // Redirect to the protected page
  } else {
    // No user is signed in, redirect to the login page or show a message
    console.log("No user is signed in");
    alert("Login to book.")
    window.location.href = "login.html";
    
  }
});





