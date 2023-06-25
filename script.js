let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let clear = document.querySelector("#clear");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let nameInfo = document.querySelector(".name-message");
let mailInfo = document.querySelector(".mail-message");
let pwdInfo = document.querySelector(".pwd-message");
let confirmPwd = document.querySelector(".confirm-pwd");

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let weak = /[a-zA-Z]/;
let medium = /\d+/;
let strong = /.[!,@,#,$,%,^,&,*,_,-,+,~,(,)]/;

window.addEventListener("change", (e) => {
  e.preventDefault();
  //   name
  if (userName.value !== "") {
    nameInfo.innerText = "Valid name";
    nameInfo.style.color = "green";
  } else {
    nameInfo.innerText = "Invalid name";
    nameInfo.style.color = "red";
  }
  //   email
  if (emailRegex.test(email.value)) {
    mailInfo.innerText = "Valid mail";
    mailInfo.style.color = "green";
  } else {
    mailInfo.innerText = "Invalid mail";
    mailInfo.style.color = "red";
  }
  //  password
  if (
    strong.test(password.value) &&
    weak.test(password.value) &&
    medium.test(password.value) &&
    password.value.length >= 7
  ) {
    pwdInfo.style.color = "green";
    pwdInfo.innerText = "Valid password";
  } else {
    pwdInfo.innerText =
      "Use number, letter, special character and above 7 character";
    pwdInfo.style.color = "red";
  }

  //Confirm password
  if (password.value === confirmPassword.value) {
    confirmPwd.style.color = "green";
    confirmPwd.innerText = "Valid password";
  } else {
    confirmPwd.style.color = "red";
    confirmPwd.innerText = "incorrect password";
  }
});
// submit btn

submit.addEventListener("click", (e) => {
  let inputs = document.querySelectorAll("input");
  e.preventDefault();

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      alert("Something Error !!!");
    }
  }

  alert("Submit successful!");
});
