 document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/academias')
        .then(r => r.json())
        .then(academias => {
            const select = document.getElementById('opi');
            select.innerHTML = ''; // clear old options
            academias.forEach(a => {
                const option = document.createElement('option');
                option.value = a.nome_academia;
                option.textContent = `${a.nome_academia} - ${a.endereco_academia}`;
                select.appendChild(option);
            });
        })
        .catch(err => console.error('Erro ao carregar academias:', err));
});