const contactinfo = document.getElementsByClassName("description")[0]

const text = [
    "Aru",
    "Bhopal, Madhya Pradesh"

];

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function typeWriter(message, contactinfo) {
    for (let char of message) {
        contactinfo.innerHTML += char;
        await new Promise(resolve => setTimeout(resolve, 50)); // Typing speed
    }
    contactinfo.innerHTML += "<br>"; // Move to next line
}
async function display() {
    for (const item of text) {
        await delay(300); // suspense between messages
        await typeWriter(item, contactinfo);
    }

}
async function name() {
    await delay(2000)
    display();
}
name();
const container = document.querySelector('.container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animatedIcons = container.querySelectorAll('.language > div');
      animatedIcons.forEach(icon => {
        icon.style.animationPlayState = 'running';
      });

      observer.unobserve(container); // Optional: only trigger once
    }
  });
}, {
  threshold: 0.5
});

observer.observe(container);
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const aboutPopup = document.getElementById("about-popup");
const contactPopup = document.getElementById("contact-popup");

function closeAllPopups(except = null) {
  if (except !== aboutPopup) aboutPopup.classList.remove("active");
  if (except !== contactPopup) contactPopup.classList.remove("active");
}

aboutBtn.addEventListener("click", () => {
  const isVisible = aboutPopup.classList.contains("active");
  closeAllPopups(isVisible ? null : aboutPopup);
  if (!isVisible) aboutPopup.classList.add("active");
});

contactBtn.addEventListener("click", () => {
  const isVisible = contactPopup.classList.contains("active");
  closeAllPopups(isVisible ? null : contactPopup);
  if (!isVisible) contactPopup.classList.add("active");
});