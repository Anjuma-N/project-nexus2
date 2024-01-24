
/*setting up firebase with website*/

const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyADjVfChdAhRq3a6A2IZHVTWdiYgf9ddu0",
  authDomain: "auth-form-bbf61.firebaseapp.com",
  projectId: "auth-form-bbf61",
  storageBucket: "auth-form-bbf61.appspot.com",
  messagingSenderId: "395400364369",
  appId: "1:395400364369:web:262bea8bffc472ff359370"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//signup function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You Are Signed Up");
    console.log(message);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}

const signIn = () =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You Are Signed In");
      console.log(message);
      // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });
}