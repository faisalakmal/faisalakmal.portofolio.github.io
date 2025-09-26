const typingText = document.querySelector(".typing");
const text = typingText.textContent;
typingText.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

window.addEventListener("load", type);

document
  .getElementById("scrollToProjects")
  .addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
