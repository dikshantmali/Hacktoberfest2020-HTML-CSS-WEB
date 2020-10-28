// THE METHODS OF USER AUTHENTICATION

// 1) register the account 
function register() {
    const auth = firebase.auth()
    const email = document.getElementById("Email").value
    const password = document.getElementById("PWD").value
    auth.createUserWithEmailAndPassword(email, password).catch(e =>
        
        document.getElementById("errorRegister").innerHTML="***"+ e.message
    )
}

// 2) Logging in the account
function logIn() {
    
    const auth = firebase.auth();
    const email = document.getElementById("userEmail").value
    const pwd = document.getElementById("userPWD").value
    auth.signInWithEmailAndPassword(email, pwd).catch(e =>
        document.getElementById("errorLogIn").innerHTML="***"+ e.message
        
        
    )
}

// 3) logging out of the account
function logOut() {
    const auth = firebase.auth();
    auth.signOut().then(function () {
        // Sign-out successful.
        window.location = "index.html"
    }).catch(function (error) {
        // An error happened.
        console.log(error.message)
    });
}

// THE METHODS OF USER AUTHENTICATION ENDS HERE

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        window.location="userMain.html"
        console.log("User Signed In")
        
    }
    
});
