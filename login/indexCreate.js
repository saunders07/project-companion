firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
      var email_verified = user.emailVerified;

      if(user != null){
        if (email_verified) {
            document.getElementById("user_para").innerHTML = "Lets do this!"
            document.getElementById("verify_btn").style.display = "none";
        } else {
            document.getElementById("user_para").innerHTML = "Please verify email to continue!</br>"
            document.getElementById("user_para").innerHTML += "<br>Verified : " + email_verified;
            document.getElementById("verify_btn").style.display = "block";
        }  
      }
  
    } else {
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }

  function addDisplayName () {
    user.updateProfile({
      displayName: username
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
  }

  function create_account() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);

      });


  }

  function send_verification () {

    var user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {

        window.alert("Verification sent!")
    }).catch(function(error) {
        window.alert("Error : " + error.message)
    });
  }
  
  function logout(){
    firebase.auth().signOut();
    window.location.href("../login.html");
  }
  