const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")
const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".content")


// Log in // 
const textInputs = document.querySelectorAll("input");
const passwordInput = document.querySelector(".password-input")
const eyeBtn = document.querySelector(".eye-btn")



const signUpBtn = document.querySelector(".sign-up-btn")
const signInBtn = document.querySelector(".sign-in-btn")
const signUpForm = document.querySelector(".sign-up-form")
const signInForm = document.querySelector(".sign-in-form")

eyeBtn.addEventListener("click", function() {
    if(passwordInput.type === "password") {
        passwordInput.type = "text"
        eyeBtn.innerHTML = "<i class='fa-solid fa-eye'></i></div>"
    }
    else {
        passwordInput.type = "password"
        eyeBtn.innerHTML = "<i class='fa-solid fa-eye-slash'></i></div>"
    }
})


textInputs.forEach(function(textInput) {
    textInput.addEventListener("focus", function() {
        let parent = textInput.parentNode;
        parent.classList.add("active")
    })
    textInput.addEventListener("blur", function() {
        let parent = textInput.parentNode;
        parent.classList.remove("active")
    })
})

// Sliding

signUpBtn.addEventListener("click",function() {
    signInForm.classList.add('hide');
    signUpForm.classList.add("show")
    signInForm.classList.remove("show")
})
signInBtn.addEventListener("click",function() {
    signInForm.classList.remove('hide');
    signUpForm.classList.remove("show")
    signInForm.classList.add("show")
})


/////




const containerLogIn = document.querySelector(".form-container-main")
const containerGallery = document.querySelector(".container-gallery")
const card1 = document.querySelector(".num1")
const card2 = document.querySelector(".num2")
const card3 = document.querySelector(".num3")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")

const homeBtn = document.getElementById("home-btn")
const galleryBtn = document.getElementById("gallery-btn")
const pageBtns = document.querySelectorAll(".page-item.current-page")
const logInBtn = document.getElementById("logIn-btn")
const mediaIcons = document.querySelectorAll(".icons")


function switchPage(manual) {
pageBtns.forEach(function(button) {
    button.classList.remove("activeBtn")
});
pageBtns[manual].classList.add("activeBtn")
}

pageBtns.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        switchPage(i);
    })
})


galleryBtn.addEventListener("click", function() {
    containerGallery.style.display = "block"
    document.querySelectorAll(".content").forEach(function(content){
        content.style.display = "none"
    })
    document.querySelector(".slider-navigation").classList.add("disable")
    mediaIcons.forEach(function(icon){
        icon.classList.remove("disable")
    })
    containerLogIn.classList.add("disableImportant")
    homeBtn.style.visibility = "visible"
})

homeBtn.addEventListener("click", function() {
    containerGallery.style.display = "none";
    containerLogIn.classList.add("disableImportant")
    mediaIcons.forEach(function(icon){
        icon.classList.remove("disable")
    })
    document.querySelector(".slider-navigation").classList.remove("disable")
    document.querySelector(".content.active").style.display = "block"
    homeBtn.style.visibility = "hidden"

   
})

logInBtn.addEventListener("click", function() {
    containerGallery.style.display = "none";
    document.querySelectorAll(".content").forEach(function(element) {
        element.style.display = "none"
    })
    document.querySelector(".slider-navigation").classList.add("disable")
    mediaIcons.forEach(function(icon){
        icon.classList.add("disable")
    })
    containerLogIn.classList.remove("disableImportant")
    homeBtn.style.visibility = "visible"


})

btn1.addEventListener("click", function() {
    card1.setAttribute("src","images/card (-1).jpeg")
    card2.setAttribute("src","images/card (0).jpeg")
    card3.setAttribute("src","images/card (1).jpeg")
})
btn2.addEventListener("click", function() {
    card1.setAttribute("src","images/card (2).jpeg")
    card2.setAttribute("src","images/card (3).jpeg")
    card3.setAttribute("src","images/card (4).jpeg")
})
btn3.addEventListener("click", function() {
    card1.setAttribute("src","images/card (5).jpeg")
    card2.setAttribute("src","images/card (6).jpeg")
    card3.setAttribute("src","images/card (7).jpeg")
})
btn4.addEventListener("click", function() {
    card1.setAttribute("src","images/card (8).jpeg")
    card2.setAttribute("src","images/card (9).jpeg")
    card3.setAttribute("src","images/card (10).jpeg")
})
btn5.addEventListener("click", function() {
    card1.setAttribute("src","images/card (11).jpeg")
    card2.setAttribute("src","images/card (12).jpeg")
    card3.setAttribute("src","images/card (13).jpeg")
})
btn6.addEventListener("click", function() {
    card1.setAttribute("src","images/card (14).jpeg")
    card2.setAttribute("src","images/card (16).jpeg")
    card3.setAttribute("src","images/card (17).jpeg")
})
btn7.addEventListener("click", function() {
    card1.setAttribute("src","images/card (18).jpeg")
    card2.setAttribute("src","images/card (19).jpeg")
    card3.setAttribute("src","images/card (20).jpeg")
})




function sliderNav(manual) {
    btns.forEach(function(btn) {
        btn.classList.remove("active")
    })

    slides.forEach(function(slide) {
        slide.classList.remove("active")
    })

    contents.forEach(function(content) {
        content.classList.remove("active")
    })


    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}

btns.forEach(function(btn, i){
btn.addEventListener("click", function() {
    sliderNav(i);
})
})

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})