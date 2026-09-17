// ======================================
// SUPABASE CONNECTION
// ======================================

const SUPABASE_URL = "https://bbrqotvjwqozxfuzivti.supabase.co";

const SUPABASE_KEY = "sb_publishable_NEEhu4DorcD1xgnd4yqhrg_gkOMRVmo";

// Create Supabase connection
const supabaseClient = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

// ======================================
// LOGIN
// ======================================

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");

const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {

event.preventDefault();


const email = emailInput.value.trim();

const password = passwordInput.value;


loginBtn.disabled = true;

loginBtn.textContent = "LOGGING IN...";

message.textContent = "";


// ==================================
// SUPABASE AUTH LOGIN
// ==================================

const { data, error } =
    await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });


// ==================================
// LOGIN ERROR
// ==================================

if (error) {

    message.style.color = "red";

    message.textContent = error.message;

    loginBtn.disabled = false;

    loginBtn.textContent = "LOGIN";

    return;
}


// ==================================
// LOGIN SUCCESS
// ==================================

message.style.color = "green";

message.textContent = "Login Successful!";


console.log("Logged in user:", data.user);


// Shop page ki vellali
setTimeout(function () {

    window.location.href = "shop.html";

}, 1000);

});
