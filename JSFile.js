const homeMenu = document.getElementById("homeMenu")
const aboutMenu = document.getElementById("aboutMenu")
const contactMenu = document.getElementById("contactMenu")
const portofolioeMenu = document.getElementById("portofolioMenu")
const welcomeTab = document.getElementById("welcome")
const aboutTab = document.getElementById("about")
const contactTab = document.getElementById("contact")
const portofolioTab = document.getElementById("portofolio")
const containerContent = document.getElementById("contentContainer")
const footerContent = document.getElementById("footer")
const footerText = document.getElementById("footerText")
// console.log(portofolioMenu);

function mouseOver(text) {
  text.innerHTML = "Chania Evangelista"
}

function mouseOut(text) {
  text.innerHTML = "Chania's Portofolio"
}

function start() {
    welcomeTab.style.display = "block";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";
    portofolioTab.style.display = "none";
}

function welcomeFunction() {
    welcomeTab.style.display = "block";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";
    portofolioTab.style.display = "none";
    containerContent.style.backgroundColor = "#b2dfdb";
}

function aboutFunction2() {
    welcomeTab.style.display = "none";
    aboutTab.style.display = "block";
    contactTab.style.display = "none";
    portofolioTab.style.display = "none";
    containerContent.style.backgroundColor = "#80cbc4";
}

function contactFunction3() {
    welcomeTab.style.display = "none";
    aboutTab.style.display = "none";
    contactTab.style.display = "block";
    portofolioTab.style.display = "none";
    containerContent.style.backgroundColor = "#b2dfdb";
}

function portofolioFunction4() {
    welcomeTab.style.display = "none";
    aboutTab.style.display = "none";
    contactTab.style.display = "none";
    portofolioTab.style.display = "block";
    containerContent.style.backgroundColor = "#80cbc4";
}

function footerFunction() {
    footerText.innerHTML="Thankyou";
    footerText.style.color="white";
    footerContent.style.backgroundColor = "#00695c";
    footerContent.style.border = "3px solid black"
}