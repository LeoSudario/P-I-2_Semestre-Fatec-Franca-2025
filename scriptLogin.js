document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
    
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
    
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
    
            const result = await response.text();
    
            if(response.ok){
                alert("Login bem-sucedido!");
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'index.html';
            }else{
                alert(result);
            }
        });
})