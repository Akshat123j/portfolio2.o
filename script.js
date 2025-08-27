const file = document.getElementsByClassName("file")[0];
const content = document.getElementsByClassName("content")[0];
const cupboard = document.getElementById("cupboard");
content.style.display = 'none';
cupboard.style.animationPlayState = "paused";

cupboard.addEventListener("dblclick", () => {
    open();
    cupboard.style.animationPlayState = "running";
    file.style.display = 'block';
});

async function open() {
    try {
        await delay(3000);

        file.style.animation = "none";
        file.style.backgroundImage = 'url("2.png")';
        file.style.transform = `rotateY(30deg) rotateX(0deg) rotateZ(30deg)`;

        content.style.display = "block";
        content.style.transform = "rotateZ(0deg)";
        
        // wait for venom spawning to finish
        await spawnvenom();

        // give venom time to "sit" before redirect
        await delay(1000);

        window.location.href = "1.htm";

        content.style.display="none";
        cupboard.style.display="none";
        file.style.display="none";
        document.body.innerHTML=`<a href="https://akshat123j.github.io/portfolio/1.htm"> click</a>`;
    } catch (error) {
        console.error("Error during animation or navigation:", error);
        content.innerText = "Something went wrong. Please try again.";
        content.style.display = "block";
        content.style.color = "red";
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function spawnvenom() {
  const venom = document.getElementsByClassName("content")[0];
  const divs = [];

  for (let i = 0; i < 10; i++) {
    await randomDelay();

    const div = document.createElement("div");
    div.className = `venom-child-${i}`;
    div.style.width = "0vw";
    div.style.height = "10px";
    div.style.position='absolute';
    div.style.top='50%';
    div.style.transformOrigin = "left center";
    div.style.left='50%';
    cupboard.style.display='none';
    // div.style.transformOrigin = "center left"; 

    div.style.animation="growwidth 0.1s ease-out forwards";
    div.style.transform = `rotateZ(${Math.random() * 359 + 1}deg)`;
    div.style.backgroundColor = "black";

    venom.appendChild(div);
    divs.push(div);
  }

  // wait a little after last venom piece
  await delay(500);
}

async function randomDelay(min = 500, max = 1000) {
  const rand = Math.random() * (max - min) + min;
  return new Promise((resolve) => setTimeout(resolve, rand));
}
