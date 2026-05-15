var toggleBtn = document.getElementById('toggle-btn');
var userBtn   = document.getElementById('user-btn');
var profile   = document.querySelector('.header .flex .profile');
var body = document.body;
var darkMode = localStorage.getItem('dark-mode');

var enableDarkMode = function() {
   if (toggleBtn) toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
};

var disableDarkMode = function() {
   if (toggleBtn) toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
   enableDarkMode();
}

if (toggleBtn) {
   toggleBtn.onclick = function() {
      darkMode = localStorage.getItem('dark-mode');
      if (darkMode === 'disabled') {
         enableDarkMode();
      } else {
         disableDarkMode();
      }
   };
}

if (userBtn && profile) {
   userBtn.onclick = function() {
      profile.classList.toggle('active');
   };
}

window.onscroll = function() {
   if (profile) profile.classList.remove('active');
};