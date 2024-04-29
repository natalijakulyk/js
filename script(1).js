let userName = document.querySelector(".userName")
let userPassword = document.querySelector(".userPassword")
let userEmail = document.querySelector(".userEmail")
let phoneNum = document.querySelector(".phoneNum")
let button = document.querySelector(".form-button")
let formWarning = document.querySelector(".form-label-warning")
let formWarningOne = document.querySelector(".form-label-warning-1")
let formWarningTwo = document.querySelector(".form-label-warning-2")
let formWarningTree = document.querySelector(".form-label-warning-3")

let modal = document.getElementById("myModal");
let modalText = document.getElementById("modalText");
let span = document.getElementsByClassName("close")[0];
function openModal(text) {
    modal.style.display = "block";
    modalText.innerHTML = text;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
        
button.addEventListener("click", function () {
    let userNameVal = userName.value
    let userPasswordVal = userPassword.value
    let userEmailVal = userEmail.value
    let phoneNumVal = phoneNum.value
    userName.classList.remove("warning")
    userPassword.classList.remove("warning")
    userEmail.classList.remove("warning")
    phoneNum.classList.remove("warning")
    formWarning.classList.remove("change-form")
    formWarningOne.classList.remove("change-form")
    formWarningTwo.classList.remove("change-form")
    formWarningTree.classList.remove("change-form")
    if (userNameVal.length < 2) {
        userName.classList.add("warning")
        formWarning.classList.add("change-form")
        return
    }
    else if (userPasswordVal.length < 6 || userPasswordVal[0] !== userPasswordVal[0].toUpperCase()) {
        userPassword.classList.add("warning")
        formWarningOne.classList.add("change-form")
        userPassword.value = ""
        userPassword.focus()
        return
    }
    else if (userEmailVal.length < 6 || !userEmailVal.includes("@") || !userEmailVal.includes(".")){
        userEmail.classList.add("warning")
        formWarningTwo.classList.add("change-form")
        return
    }
    else if (phoneNumVal.length !==13 || !phoneNumVal.includes("+")){
        phoneNum.classList.add("warning")
        formWarningTree.classList.add("change-form")
        return
    }
    else {
        setTimeout(function () {
            window.location.href = "http://127.0.0.1:5500/les%206/inex(1).html"
        }, 3000)
    }

})