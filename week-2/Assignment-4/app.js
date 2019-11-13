/* ==============================
---------- Selector ----------
============================== */

/* ---------- Change Text ---------- */
const banner = document.querySelector('.banner h1');

/* ---------- Side Navbar ---------- */
const openButton = document.querySelector('.open');
const sideNav = document.querySelector('.main-nav');
const closeButton = document.querySelector('.close');

/* ---------- Show More ---------- */
const button = document.querySelector('.button');
const secondContent = document.querySelector('.second');


/* ==============================
---------- Function ----------
============================== */

function openNav() {
  sideNav.style.width = "50%";
  openButton.style.display = "none";
}

function closeNav() {
  sideNav.style.width = "";
  openButton.style.display = "block";
}

function addContent() {
  secondContent.style.display = "block";
}


/* ==============================
---------- EventListener ----------
============================== */

/* ---------- Change Text ---------- */
banner.addEventListener('click', () => {
  banner.textContent = "Have a Good Time!";
});

/* ---------- Side Navbar ---------- */
openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);


// 若視窗大小變動中，則收合 sidebarNav
window.addEventListener('resize', () => {
  if (window.innerWidth <= 800) {
      closeNav();
  } else if (window.innerWidth > 800) {
    sideNav.style.width = "";
    openButton.style.display = "none";
  }
});

/* ---------- Show More ---------- */
button.addEventListener('click', addContent);
