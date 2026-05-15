// Educa. Authentication System (localStorage)

document.addEventListener('DOMContentLoaded', function () {
   loadUserName();
});

function loadUserName() {
   const currentUser = JSON.parse(localStorage.getItem('educa_current_user'));
   const displayName = currentUser ? currentUser.name : 'Guest';

   const headerName = document.getElementById('header-user-name');
   if (headerName) headerName.textContent = displayName;

   const sidebarName = document.getElementById('sidebar-user-name');
   if (sidebarName) sidebarName.textContent = displayName;

   const profileName = document.getElementById('profile-user-name');
   if (profileName) profileName.textContent = displayName;

   if (currentUser) {
      document.querySelectorAll('.flex-btn').forEach(function(btn) {
         btn.innerHTML = '<a href="#" class="option-btn"'
            + ' onclick="logoutUser(); return false;">Logout</a>';
      });
   }
}

function registerUser(name, email, password) {
   const users = JSON.parse(localStorage.getItem('educa_users')) || [];
   if (users.find(u => u.email === email)) {
      return { success: false, message: 'An account with this email already exists!' };
   }
   users.push({ name, email, password });
   localStorage.setItem('educa_users', JSON.stringify(users));
   localStorage.setItem('educa_current_user', JSON.stringify({ name, email }));
   return { success: true, message: 'Registration successful!' };
}

function loginUser(email, password) {
   const users = JSON.parse(localStorage.getItem('educa_users')) || [];
   const user = users.find(u => u.email === email && u.password === password);
   if (!user) return { success: false, message: 'Invalid email or password!' };
   localStorage.setItem('educa_current_user', JSON.stringify({ name: user.name, email: user.email }));
   return { success: true, message: 'Login successful!' };
}

function logoutUser() {
   localStorage.removeItem('educa_current_user');
   window.location.href = 'index.html';
}
