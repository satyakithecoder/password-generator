const copybtn = document.getElementById("copy");
const result = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const generatebtn = document.getElementById("generate");
const checkboxes = document.querySelectorAll('.inputs');
const specialSymbols = "@#$^&*!";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = uppercaseLetters.toLowerCase();
const numbers = "0123456789";
document.body.onload = function () {
    checkboxes.forEach(Element => Element.checked = false);
    result.value = "";
    document.getElementById("length").value = 10;
    document.querySelector('.message').innerHTML = "";
}
result.addEventListener("focus", () => {
    result.select();
});

generatebtn.addEventListener("click", () => {
    const password_length = document.getElementById("length").value;
    if (![...checkboxes].some(element => element.checked)) {
        document.querySelector('.message').innerHTML = "Select at least any <br> one set of characters";
    } else {
        let password = "";
        let allowed_char = "";
        allowed_char += input1.checked ? uppercaseLetters : "";
        allowed_char += input2.checked ? lowercaseLetters : "";
        allowed_char += input3.checked ? specialSymbols : "";
        allowed_char += input4.checked ? numbers : "";

        for (let i = 0; i < password_length; i++) {
            const random_char = Math.floor(Math.random() * allowed_char.length);
            password += allowed_char[random_char];
        }
        result.value = password;
        document.querySelector('.message').innerHTML = "";
    }
});

copybtn.addEventListener("click", () => {
    result.select();
    const txt = result.value;
    navigator.clipboard.writeText(txt);
});