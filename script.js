document.addEventListener('DOMContentLoaded', function () {
   
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');

    if (loginForm) {
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
    
            if (response.ok) {
                alert("Login bem-sucedido!");
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'index.html';
            } else {
                alert(result);
            }
        });
    }

    if (signUpForm) {
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
    }

    const welcomeMessage = document.getElementById('Welcome');
    const userPhoto = document.querySelector('#user');
    if (welcomeMessage) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        welcomeMessage.textContent = `Bem-vindo, ${loggedInUser}!`;
        userPhoto.style.display = "flex";

    }

    function updateTime() {
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById("hour").textContent = `${hour}:${minutes}:${seconds}`;
    }
    setInterval(updateTime, 1000);
    updateTime();

    const warning = document.getElementById('warning');
    const warning1 = document.getElementById('warning1');
    const warning2 = document.getElementById('warning2');
    const checar = document.getElementById('checar');
    const academi = document.getElementById('opi');
    const treino = document.querySelector('#treinos')
    const simbol = document.querySelector('.simbol')

    simbol.addEventListener('click',() => {
        if (treino.style.display === 'flex') {
            treino.style.display = 'none';
        } else {
            treino.style.display = 'flex';
        }
    })
    
    function resetWarnings() {
        treino.style.display = 'none';
        warning.style.display = 'none';
        warning1.style.display = 'none';
        warning2.style.display = 'none';
    }

    if (checar && academi) {
        checar.onclick = function () {
            resetWarnings();
            const now = new Date();
            const hora = now.getHours();
            const opit = academi.value;
            
            if (hora > 22 || hora < 6) {
                warning2.style.display = 'flex';
            } else {
                const isPeakHour = hora > 12 && hora <= 21;
                if (isPeakHour) {
                    warning.style.display = 'flex';
                } else {
                    warning1.style.display = 'flex';
                }
            }
        };

       simbol.addEventListener('change', resetWarnings)
        academi.addEventListener('change', resetWarnings);
    }
});
