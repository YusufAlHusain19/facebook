/*
* I have "commented out" this entire function.
* It was preventing your form from submitting to Formspree.
* By commenting it out, the <form> tag in your HTML will now
* work correctly when the "Log in" button is clicked.
*/

// function toggleSubmit() {
//   let email, psw;
//   email = document.getElementById("email").value;
//   psw = document.getElementById("psw").value;
// 
//   let logValue = {
//     email: email,
//     psw: psw,
//   };
//   logValue = JSON.stringify(logValue);
//   localStorage.setItem("LogIn-Data", logValue);
// 
//   body.innerHTML = `<h1>Welcome, ${email}.</h1>`;
// 
// 
// }

// function toggleBlue() {
//  let email, psw;
//  email = document.getElementById("email");
//  psw = docu
// ment.getElementById("psw");

//  if (email && psw.style.border != "1px solid #1877f2") {
//    email && psw.style.border == "1px solid #1877f2";
//  } else {
//    email && psw.style.border == "1px solid #dddfe2";
//  }
// }

// const btn = document.createElement('a')
// if(email == 'amansamad@gmail.com'){
//    btn.href ="https://www.facebook.com/samad.aman.336"
// } else{
//    localStorage.setItem("LogIn-Data", logValue);
// }


// This dark mode function is fine and does not need to be changed.
function toggleDark() {
  let btnDark = document.getElementById('btnDark');
  let body = document.getElementById('body');
  let form = document.getElementById('form');
  let box = document.getElementById('box');
  let link = document.getElementById('link');

  body.classList.toggle('dark');
  form.classList.toggle('formDark');
  box.classList.toggle('boxDark');
  link.classList.toggle('linkDark');

  const saveLocal =  localStorage.setItem('dark', 'on')
  const saveDark = localStorage.getItem('dark')
  // if(saveLocal==)
}
