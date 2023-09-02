let w = window.innerWidth;
let h = window.innerHeight;

window.addEventListener('resize', (event) => {
    w = window.innerWidth;
    h = window.innerHeight;
    check();
})

function setStyle(style) {
    document.getElementById('style').setAttribute('href', `static/css/${style}.css`)
}

mobile = false;
function check() {
  if (h > w) {
    mobile = true;
    setStyle("mobile");
  } else {
    mobile = false;
    setStyle("style");
  }
}

check()

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
  
function arrow() {
    var elmntToView = document.getElementById("content");
    elmntToView.scrollIntoView({behavior: "smooth"});
}

document.getElementById("content").style.gridTemplateRows = `repeat(${document.getElementById("content").children.length - 1}, 1fr)` // -1 for the sample item

for (
  let i = 0;
  i < document.getElementById("content").children.length - 1;
  i++
) {
  // same reason for -1 here
  const element = document.getElementById("content").children[i];
  console.log(element);
  element.style.gridArea = `${i + 1} / 2 / ${i + 2} / 3`;
  if (!mobile)
    element.style.transform = `translateX(${getRandomArbitrary(
      -200,
      200
    )}px) rotate(${getRandomArbitrary(-1, 1)}deg)`;
}
