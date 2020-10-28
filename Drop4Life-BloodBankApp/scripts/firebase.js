var firebaseConfig = {
    apiKey: "AIzaSyD94ea5OU7ZVM-9BsopYF8Olod2gdjPMAU",
    authDomain: "blood-bank-app-36f9b.firebaseapp.com",
    databaseURL: "https://blood-bank-app-36f9b.firebaseio.com",
    projectId: "blood-bank-app-36f9b",
    storageBucket: "blood-bank-app-36f9b.appspot.com",
    messagingSenderId: "1051555229022",
    appId: "1:1051555229022:web:b81598b70732a292"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore()