// Pega os elementos do HTML pelo id
const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('btn-toggle');
// Escuta o clique no botão
btn.addEventListener('click', () => {
    // toggle adiciona a classe se não tem, remove se já tem
    sidebar.classList.toggle('fechada');
    // contains verifica se a classe existe agora
    const fechada = sidebar.classList.contains('fechada');
    // Muda o ícone do botão dependendo do estado
    btn.textContent = fechada ? '☰' : '✕';
});