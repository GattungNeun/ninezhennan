
const contactBtn = document.getElementById("contactMe");
const contactBox = document.getElementById("contactBox");
const copyBtn = document.getElementById("copyBtn");

contactBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Hi");
    contactBox.classList.toggle("active");
})

copyBtn.addEventListener("click", function(e){
  const email = document.querySelector(".email").textContent.trim();
  navigator.clipboard.writeText(email);

  copyBtn.classList.remove("fa-copy");
  copyBtn.classList.add("fa-check");

  setTimeout(() => {
    copyBtn.classList.remove("fa-check");
    copyBtn.classList.add("fa-copy");
  }, 1000);
})
