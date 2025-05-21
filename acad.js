document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formAcademia');
    const msg = document.getElementById('msg');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nomeAcademia = document.getElementById('nomeAcademia').value;
        const enderecoAcademia = document.getElementById('enderecoAcademia').value;

        fetch('http://localhost:3000/academias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeAcademia,
                endereco: enderecoAcademia
            })
        })
        .then(r => r.json())
        .then(data => {
            msg.textContent = data.message || 'Academia registrada!';
            form.reset();
        })
        .catch(err => {
            msg.textContent = 'Erro ao registrar academia';
            console.error(err);
        });
    });
});