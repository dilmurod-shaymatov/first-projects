const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name === "" || message === "") {
    formMsg.textContent = "Iltimos, ism va xabarni to'ldiring.";
  } else {
    formMsg.textContent = "Rahmat, " + name + "! Xabaringiz qabul qilindi.";
    form.reset();
  }
});