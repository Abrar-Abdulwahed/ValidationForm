const form = document.getElementById('form');
// Select elements
let username = document.getElementById('name');
let email = document.getElementById('email');
let password1 = document.getElementById('password');
let password2 = document.getElementById('confirm_password');
let age = document.getElementById('age');
let phone = document.getElementById('phone');
let url = document.getElementById('url');
let message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    username = username.value.trim();
    email = email.value.trim();
    password1 = password1.value.trim();
    password2 = password2.value.trim();
    age = age.value.trim();
    phone = phone.value.trim();
    url = url.value.trim();
    message = message.value;

    validInputs();
});
const validInputs = ()=>{
    validationName(username);
    validationEmail(email);
    validationPassword(password1);
    validationConfirmPassword(password2);
    validationAge(age);
    validationPhone(phone);
    validationURL(url);
    validationMessage(message);
}
const validationName = (username)=>{
    validName=/^[A-Za-z]+$/;
    nameErr=document.getElementById('nameError');
    if(username === '')
        nameErr.innerHTML = "Name is required";
    else{
        if(!validName.test(username)){
            nameErr.innerHTML="Name must be only string without numbers or symbols";
        }
        else{
            usernameLength = username.length;
            if (usernameLength < 3 || usernameLength > 10)
                nameErr.innerHTML = "It must be more than 3 and less than 10 characters";
        }
        
    }
}
const validationEmail = (email) => {
    emailAddressErr=document.getElementById('emailError');
    validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email === ''){
        emailAddressErr.innerHTML="Email Address is required";
    }else if(!validEmailAddress.test(email)){
        emailAddressErr.innerHTML="Email Addre must be in valid formate with @ symbol";
    }

}

const validationPassword = (password1)=>{
    passwordErr=document.getElementById('pswError');
    validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(password1 === ''){
        passwordErr.innerHTML="Password is required";
    }else if(!validPassword.test(password1)){
        passwordErr.innerHTML="Password must contain an uppercase letter, symbol, lowercase letters, and numbers, at less 6 letter";
    }
}

const validationConfirmPassword = password2 =>{
    confirmPasswordErr = document.getElementById('conPSWError');
    if(password2 === ''){
        confirmPasswordErr.innerHTML="Password Confirmation is required";
    }else if(password1 !== password2){
        confirmPasswordErr.innerHTML="Password and password confirmation is not identical";
    }
}

const validationAge = age =>{
    ageErr = document.getElementById('ageError');
    if(age === "")
        ageErr.innerHTML = "age is required";
    else if(age < 18 )
        ageErr.innerHTML = "age must be over 18 years old";
}

const validationPhone = phone =>{
    validPhoneNumber=/^[0-9]*$/;
    phoneErr=document.getElementById('phoneError');
    if(phone === "")
        phoneErr.innerHTML = "Phone Number is required";
    else if(!validPhoneNumber.test(phone))
        phoneErr.innerHTML = "Phone Number must be a number";
    else if(phone.length!=9)
        phoneErr.innerHTML = "Phone Number must have 9 digits";
    else if(!phone.startsWith("777"))
        phoneErr.innerHTML = "Phone Number must start with 777";
}

const validationURL = url =>{
    validURL=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    urlErr=document.getElementById('urlError');
    if(url === "")
        urlErr.innerHTML = "URL is required";
    else if(!validURL.test(url))
        urlErr.innerHTML = "Invalid URL";
}

const validationMessage = message =>{
    msgErr=document.getElementById('msgError');
    if(message === "")
        msgErr.innerHTML = "Message is required";
    else if(message.length < 20)
        msgErr.innerHTML = "must be more than 20 characters";
}


