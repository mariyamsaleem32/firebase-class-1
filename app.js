import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "./firebase.js";

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user);
    } else {
        console.log("user not exist");
    }
});

const signUp = () => {

    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g; 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*@).{8,}$/gm; 

    if (emailRegex.test(email) && passwordRegex.test(password)) {

        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                alert("Account successfully signed up");
                console.log("user", response.user);
            })
            .catch((error) => {
                alert(error.code);
                console.log("error", error.message); 
            });
    } else {
        console.log("Invalid email or password.");
    }

}

let signUpBtn = document.getElementById("signup");
signUpBtn.addEventListener("click", signUp);

