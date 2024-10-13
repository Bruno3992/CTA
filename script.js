// Lista de TCCs simulada
const tccs = [
    {
        titulo: 'TCC 1 - Repositório Digital de TCCs',
        autores: 'Bruno, Gabriel, Guilherme e Pablo',
        icone: 'https://via.placeholder.com/50'
    },
    {
        titulo: 'TCC 2 - Segurança de Redes Wi-Fi',
        autores: 'Ana, João, Pedro e Maria',
        icone: 'https://via.placeholder.com/50'
    },
    {
        titulo: 'TCC 3 - Implementação de Sistemas de Informação',
        autores: 'Carlos, Luiza, Sofia e Diego',
        icone: 'https://via.placeholder.com/50'
    }
];

// Função para renderizar a lista de TCCs
function renderTCCs(tccList) {
    const tccListElement = document.getElementById('tcc-list');
    tccListElement.innerHTML = ''; // Limpa a lista antes de renderizar
    tccList.forEach(tcc => {
        const tccItem = document.createElement('div');
        tccItem.classList.add('tcc-item');
        tccItem.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/6802/6802306.png" alt="Ícone TCC">
            <h4>${tcc.titulo}</h4>
            <p>${tcc.autores}</p>
        `;
        tccListElement.appendChild(tccItem);
    });
}

// Função de busca
function searchTCC() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredTCCs = tccs.filter(tcc => tcc.titulo.toLowerCase().includes(query) || tcc.autores.toLowerCase().includes(query));
    renderTCCs(filteredTCCs);
}

// Renderiza a lista inicial de TCCs
renderTCCs(tccs);
