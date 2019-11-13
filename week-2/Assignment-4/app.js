const openButton = document.querySelector('.open');
const sideNav = document.querySelector('.main-nav');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', () => {
  sideNav.style.width = '50%';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  sideNav.style.width = '';
  openButton.style.display = 'block';
});


// 當展開 sidebarNav 時，若更動視窗則重新讀取網頁
window.addEventListener('resize', () => {
  window.location.reload();
});
