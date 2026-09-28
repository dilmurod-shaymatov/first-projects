console.log("Salom JavaScript!")
const tugma = document.getElementById("salomTugma");

tugma.addEventListener("click", function(){
    tugma.textContent = "Rahmat, siz tugmani bosdingiz!";
    tugma.style.backgroundColor = "lightgreen";
});

const salomlashTugma = document.getElementById("salomlashTugma");
const natija = document.getElementById("natija");

salomlashTugma.addEventListener("click", function(){
    const ism = document.getElementById("ismInput").value;
    if (ism === "") {
        natija.textContent = "Iltimos, ismingizni kiriting!";
    }else{
        natija.textContent= "Salom, " + ism + "! Xush kelibsiz!"
    }
    
});

const konikmalar = ["HTML", "CSS", "JavaScript"];
console.log(konikmalar[0]); //"HTML" chiqadi
console.log(konikmalar.length);