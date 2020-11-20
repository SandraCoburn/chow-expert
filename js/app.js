function closeDrawer() {
  document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.nav-toggle').style.background =
      'rgba(63, 41, 8, 0.2)';
  } else {
    document.querySelector('.nav-toggle').style.background = 'none';
  }
}
