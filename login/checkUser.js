firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    var email_verified = user.emailVerified;

    if(user != null){
        if (email_verified) {
            document.getElementById("user_para").innerHTML = "Lets do this!"
            document.getElementById("verify_btn").style.display = "none";
        } else {
            window.location.href = "login/verifyEmail.html";
            document.getElementById("user_para").innerHTML = "Please verify email to continue!"
            document.getElementById("user_para").innerHTML += "<br>Verified : " + email_verified;
            document.getElementById("verify_btn").style.display = "block";
        }  
    }

    } else {
    // No user is signed in.

    window.location.href = ("login.html");

    }
});