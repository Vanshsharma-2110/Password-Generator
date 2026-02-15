const password = document.querySelector('#password');
const copybtn = document.querySelector('#copybtn');

const lvalue = document.querySelector('#lengthValue');
const lslider = document.querySelector('#lengthSlider');

const upperCase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');

const generatebtn = document.querySelector('#generatebtn');
const strength = document.querySelector('#strength');

const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const syms = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

lslider.addEventListener('input', function () {
    lvalue.textContent = Number(lslider.value);
    console.log(lslider.value);
    return lslider.value;
})



generatebtn.addEventListener('click', function (e) {
    e.preventDefault();

    copybtn.textContent = "Copy";
    let allowed_char = "";

    if (upperCase.checked) {
        allowed_char += ucase;
    }
    if (lowerCase.checked) {
        allowed_char += lcase;
    }
    if (number.checked) {
        allowed_char += nums;
    }
    if (symbol.checked) {
        allowed_char += syms;
    }

    if (allowed_char === "") {
        alert("Please select at least one option");
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < lslider.value; i++) {
        let randomIndex = Math.floor(Math.random() * allowed_char.length);
        generatedPassword += allowed_char[randomIndex];
    }

    password.value = generatedPassword;

    let typesCount = 0;

    if (upperCase.checked) typesCount++;
    if (lowerCase.checked) typesCount++;
    if (number.checked) typesCount++;
    if (symbol.checked) typesCount++;

    let length = Number(lslider.value);

    if (length < 6 || typesCount === 1) {
        strength.textContent = "Strength: Weak";
        strength.style.color = "red";
    }
    else if (length >= 6 && typesCount >= 2) {
        strength.textContent = "Strength: Medium";
        strength.style.color = "Darkorange";
    }
    if (length >= 10 && typesCount >= 3) {
        strength.textContent = "Strength: Strong";
        strength.style.color = "Darkgreen";
    }

    return generatedPassword;
});

copybtn.addEventListener("click", function (e) {
    e.preventDefault();

    navigator.clipboard.writeText(password.value);
    copybtn.textContent = "copied!!";
});


