// Filtragem de moedas por ano na página de Coleção
const searchForm = document.getElementById('searchForm');
const coinList = document.getElementById('coinList');

if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const year = document.getElementById('yearInput').value;
        filterCoins(year);
    });

    function filterCoins(year) {
        const coins = coinList.querySelectorAll('.coin');
        coins.forEach(coin => {
            const coinYear = coin.getAttribute('data-year');
            if (coinYear.includes(year) || year === '') {
                coin.style.display = 'block';
            } else {
                coin.style.display = 'none';
            }
        });
    }
}

// Validação de formulário de contato
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            event.preventDefault(); // Impede o envio se os campos estiverem vazios
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    });
}

// Adicionar funcionalidade de navegação no Catálogo (exemplo de ordenação)
const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        const sortValue = sortSelect.value;
        sortCoins(sortValue);
    });

    function sortCoins(criteria) {
        const coins = Array.from(coinList.querySelectorAll('.coin'));
        coins.sort((a, b) => {
            const aPrice = parseFloat(a.getAttribute('data-price').replace('R$', '').replace(',', '.'));
            const bPrice = parseFloat(b.getAttribute('data-price').replace('R$', '').replace(',', '.'));

            if (criteria === 'price-asc') {
                return aPrice - bPrice;
            } else if (criteria === 'price-desc') {
                return bPrice - aPrice;
            } else {
                return 0; // Nenhuma ordenação
            }
        });

        // Reorganizar o DOM com a lista ordenada
        coins.forEach(coin => coinList.appendChild(coin));
    }
}
