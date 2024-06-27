document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'Admin' && password === 'BwK54dm1n') {
      localStorage.setItem('isAdmin', true);
      window.location.href = 'admin';
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'block';
    }
  });
  