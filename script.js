document.addEventListener('DOMContentLoaded', function() {
    var card = document.getElementById('card');
    var cardContent = document.getElementById('cardContent');
    var eyeIcon = document.getElementById('eye');
    var eyeOffIcon = document.getElementById('eyeOff');

    card.addEventListener('click', function() {
        cardContent.classList.toggle('show');
        toggleEyeIcon(); // Chama a função para alternar o ícone do olho se necessário
    });

    function toggleEyeIcon() {
        if (eyeIcon.style.display === 'none') {
            eyeIcon.style.display = 'block';
        } else {
            eyeIcon.style.display = 'none';
        }
    }
});
