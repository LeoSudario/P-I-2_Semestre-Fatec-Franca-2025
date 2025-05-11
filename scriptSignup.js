document.addEventListener('DOMContentLoaded', function (){

    const signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;
        
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
        
            const result = await response.text();
        
            if (response.ok) {
                alert("Cadastro bem-sucedido!");
                window.location.href = 'login.html';
            } else {
                alert(result);
            }
        });
    
})