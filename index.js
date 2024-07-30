document.addEventListener('DOMContentLoaded', () => {
    verificarTema();
});

function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    if (temaArmazenado) {
        document.body.setAttribute
            ('data-tema', temaArmazenado);
    }
}


function alterarTema() {
    const tema =
        document.body.getAttribute("data-tema");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}

corpo.classList.toggle('modo-noturno');
if (corpo.classList.contains('modo-noturno')) {
    // Modo noturno ativado
    titulo.style.color = '#fff'; // Cor do título no modo noturno
    paragrafo.style.color = '#ddd'; // Cor do parágrafo no modo noturno
} else {
    // Modo claro ativado (retornar às cores padrão definidas no CSS)
    titulo.style.color = ''; // Reverte para a cor padrão do título
    paragrafo.style.color = ''; // Reverte para a cor padrão do parágrafo
}