
document.querySelector('.formSubmit').addEventListener('click', (e) => {

    e.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    //Regular Expression
    const usernameRegex = /^(?=.{3,20}$)[A-Za-z0-9]+(?:_[A-Za-z0-9]+)*$/;
    const phoneRegex = /^[6789][0-9]{9,}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.+_%][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

    //Clear Previous error
    document.querySelectorAll('.error')
        .forEach((currElem) => (currElem.textContent = ""));

    let isValid = true;

    //Validate Username
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError')
            .textContent = "Please enter a valid Username, Username contains lowercase,uppercase,digit and underscore(_)";
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError')
            .textContent = "Phone Number Must be 10 digit long and start with 6 7 8 or 9";
        isValid = false;

    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError')
            .textContent = "Please enter a valid email id";
        isValid = false;

    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError')
        .textContent = "Password must be at least 8 characters include at least one lowercase, uppercase, number and special character";
        isValid = false;

    }

    if (confirmPassword !== password) {
        document.getElementById('passwordError')
        .textContent = "Password is not matching";
        isValid = false;
    }

    let userData = [];

    if (isValid) {
        let formClass = document.getElementsByClassName('form-control');
        Array.from(formClass).forEach((currElem) => userData.push(currElem.value));
        Array.from(formClass).forEach((currElem) => currElem.value = "");
        console.log(userData);
        alert('Registration Sucessful');
    }


})



