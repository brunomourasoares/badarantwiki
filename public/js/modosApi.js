async function getModos() {
	try {
		const response = await fetch('https://valorant-api.com/v1/gamemodes?language=pt-BR');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching game modes:', error);
		throw error;
	}
}
(async function() {
	try {
		const data = await getModos();
		const modosBody = document.getElementById('modos-body');
		const modoDescricao = [
			'É o modo Plant/Defuse padrão. As equipes jogam 12 rodadas em Ataque ou Defesa e depois trocam para o outro lado nas próximas 12 rodadas. A primeira a 13 rodadas vence, com uma rodada final de final de jogo disputada caso o jogo alcance um placar de 12-12. Tem um tempo de jogo estimado de 30 a 40 minutos.',
			'Mata-Mata ganha o jogador que primeiro alcança 40 eliminações. Neste modo, não há habilidades, os jogadores aparecem aleatoriamente em diferentes partes do mapa e podem escolher qualquer arma ao seu gosto pressionando a tecla B. Após cada morte, marcas vermelhas aparecem no mini-mapa indicando a localização de outros jogadores, e seu objetivo é alcançá-los e eliminá-los.',
			'Disparada é um modo de equipe 5x5, não importa qual agente você joga, já que eles não possuem habilidades. Cada equipe usa o mesmo tipo de arma, e para avançar para o próximo nível, é necessário alcançar um certo número de eliminações. Vence o lado que primeiro consegue passar por todos os desafios ou avançar mais longe dentro do tempo determinado.',
			'Mata-Mata em Equipe ganha quem alcançar 100 eliminações com sua equipe. é dividido em quatro estágios, em cada um dos quais os jogadores podem escolher um de dois a quatro tipos de armas apresentadas. Explorar o mapa levará você a esferas de cura e armas que estão um nível acima do estágio atual da partida.',
			'Replicação é um modo 5v5 onde todos os jogadores de uma equipe jogam como o mesmo agente. Os jogadores votam em um agente com quem desejam jogar e o jogo seleciona aleatoriamente uma das opções.	A replicação tem um tempo de jogo estimado de 10 a 15 minutos.',
			'Disputa da Spike é um modo competitivo cinco contra cinco. Cada round tem suas próprias regras, o que significa que todos os jogadores usam a mesma arma. À medida que o jogo avança, as armas tornam-se mais sofisticadas. A equipe que primeiro alcança quatro vitórias é a vencedora.',
			'Batalha Nevada é um modo Mata-Mata em Equipe 5v5 onde o primeiro time a 50 mortes vence. Todos os jogadores só têm acesso a um lançador de bolas de neve que dispara bolas de neve letais baseadas em projéteis. Também aparecem presentes no mapa que contêm power-ups temporários para o jogador. Tem um tempo de jogo estimado de 5 a 7 minutos.',
			'Frenético é um modo com a característica excepcional de um ritmo de jogo significativamente acelerado. Neste modo, são apenas 9 rounds, e a primeira equipe a alcançar 5 vitórias é declarada vencedora. Frenético se diferencia não apenas pelo número reduzido de rounds, mas também por uma economia aumentada, permitindo que os jogadores já no segundo round comprem Vandal ou Phantom.'
		];
		let cont = 0;

		data.data.forEach((modo) => {
			if (modo.uuid != 'e2dc3878-4fe5-d132-28f8-3d8c259efcc6' && modo.uuid != 'd2b4e425-4cab-8d95-eb26-bb9b444551dc') {
				const modoDiv = document.createElement('div');
				modoDiv.classList.add('modo-detalhes', 'd-flex', 'flex-column', 'flex-md-row');
				modoDiv.setAttribute('id', modo.displayName);
				modoDiv.innerHTML = `
					<div class="d-flex flex-column flex-md-row justify-content-center w-100">
						<div class="border border-1 rounded-2 bg-body-tertiary mb-3 mb-md-0 py-3" style="max-width: 400px;">
							<img src=${modo.displayName == 'Batalha Nevada' ? `"/img/snowball.jpg" class="img-fluid px-3"` : `"${modo.listViewIconTall}" class="img-fluid"`} alt="Modo ${modo.displayName}" title="Modo ${modo.displayName}"
						</div>
					</div>
					<div class="d-flex flex-column justify-content-between w-100 row-gap-4 row-gap-md-0 mx-md-5 border border-1 rounded-2 bg-body-tertiary p-4 p-md-5">
						<div class="text-center">
							<img src="${modo.displayIcon}" alt="Modo ${modo.displayName}" title="Modo ${modo.displayName}" class="" width="100" height="100" />
						</div>
						<div class="text-center">
							<h2>Modo</h2>
							<p>${modo.displayName}</p>
						</div>
						<div class="text-center">
							<h2>Tempo</h2>
							<p>${modo.duration != null ? modo.duration : 'Indefinido'}</p>
						</div>
						<div class="text-center">
							<h2>Descrição</h2>
							<p class="m-0">${modoDescricao[cont]}</p>
						</div>
					</div>`;
			modosBody.appendChild(modoDiv);
			cont++;
			}
		});
		} catch (error) {
		console.error('Error:', error);
	}
})();