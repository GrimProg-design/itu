const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.classList.add("active");
  openBtn.classList.add("close");
}

function closeMenu() {
  sideMenu.classList.remove("active");
  openBtn.classList.remove("close");
}

openBtn.addEventListener("click", () => {
  if (sideMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeBtn.addEventListener("click", closeMenu);

sideMenu.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (link) {
    closeMenu();
  }
});

let startX = 0;
let startY = 0;
let startTarget = null;

document.addEventListener("pointerdown", (e) => {
    if (!sideMenu.classList.contains("active")) return;

    startX = e.clientX;
    startY = e.clientY;
    startTarget = e.target;

}, true);


document.addEventListener("pointerup", (e) => {
    if (!sideMenu.classList.contains("active")) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    if (
        deltaX < -60 &&
        Math.abs(deltaX) > Math.abs(deltaY)
    ) {
        closeMenu();
        return;
    }

    if (
        startTarget &&
        !sideMenu.contains(startTarget) &&
        !openBtn.contains(startTarget)
    ) {
        closeMenu();
    }

}, true);