import{ auth, createUserWithEmailAndPassword, onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
    console.log("user",user);
    } else {
        console.log("user not exist");
    }
});

    const signUp = () => {
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");
    
        let email = emailInput.value;
        let password = passwordInput.value;
    
        if (email.includes("@") && password.length >= 6) {  
            createUserWithEmailAndPassword(auth, email, password)

                .then((response) => {
                    console.log("user", response.user);
                })
                .catch((error) => {
                    console.log("error", error.code);
                });

        } else {
            console.log("Invalid email or password.");
        }
    }
    
    let signUpBtn = document.getElementById("signup");
    signUpBtn.addEventListener("click", signUp);
    


    
