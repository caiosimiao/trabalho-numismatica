        let moedaEscolhida = null;

        // Função para escolher a moeda
        function escolherMoeda(moeda) {
            moedaEscolhida = moeda;
            document.getElementById("instrucoes").textContent = `Você escolheu a moeda ${moeda}. Agora, escolha "cara" ou "coroa":`;

            // Mudar as imagens de "cara" e "coroa" dependendo da moeda escolhida
            document.getElementById("caraEscolha").src = `ima/jogo/CA-${moeda}.png`;
            document.getElementById("coroaEscolha").src = `ima/jogo/CO-${moeda}.png`;

            // Mostrar as opções de "cara" e "coroa"
            document.getElementById("escolha-cara-coroa").style.display = "block";
        }

        // Função para jogar
        function jogar(escolhaUsuario) {
            if (!moedaEscolhida) {
                alert("Por favor, escolha uma moeda primeiro!");
                return;
            }

            // Sorteia o resultado da moeda
            const resultadoMoeda = Math.random() < 0.5 ? "CA" : "CO";
            const caminhoImagem = `ima/jogo/${resultadoMoeda}-${moedaEscolhida}.png`; // Ex.: CA-M1.png ou CO-M1.png

            // Mensagem de vitória ou derrota
            const mensagemResultado = resultadoMoeda === escolhaUsuario
                ? "Parabéns! Você ganhou!"
                : "Que pena! Você perdeu!";

            document.getElementById("resultado").textContent =
                `A moeda caiu: ${resultadoMoeda === "CA" ? "Cara" : "Coroa"}. ${mensagemResultado}`;

            const imagemResultado = document.getElementById("imagem-resultado");
            imagemResultado.src = caminhoImagem;
            imagemResultado.style.display = "block";
        }