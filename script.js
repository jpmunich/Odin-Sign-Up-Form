const pword = document.getElementById("pword");
const pword2 = document.getElementById("pword2");
const phoneNumber = document.getElementById("phone-number");
const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
    if (pword.value !== pword2.value) {
        e.preventDefault();
        alert("Passwords must match!");
    }

    if (phoneNumber.value.length !== 10) {
        e.preventDefault();
        alert("Enter only 10 digits for your phone number with no spaces or other extra characters!");
    }
})