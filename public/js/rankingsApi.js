async function getRanking() {
	try {
		const response = await fetch('https://valorant-api.com/v1/competitivetiers?language=pt-BR');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching competitive tiers:', error);
		throw error;
	}
}
(async function() {
	try {
		const data = await getRanking();
		const rankingBody = document.getElementById('ranking-body');
		const rankingDescricao = [
			'Nível inicial de habilidade em VALORANT. Os jogadores que ainda não jogaram partidas competitivas ou que não jogaram o suficiente para serem classificados são colocados no nível Sem Ranqueamento. Os jogadores no nível Sem Ranqueamento podem jogar partidas competitivas para subir de nível e alcançar um ranking oficial.',
			'Primeiro nível de habilidade em VALORANT. Os jogadores que alcançam o nível Ferro são considerados iniciantes e estão apenas começando a aprender o jogo. O Ferro é dividido em três níveis, Ferro 1, Ferro 2 e Ferro 3, com Ferro 3 sendo o mais alto.',
			'Segundo nível do ranking Ferro',
			'Terceiro nível do ranking Ferro',
			'Nível baixo de habilidade em VALORANT. Os jogadores que alcançam o nível Bronze são considerados iniciantes. O Bronze é dividido em três níveis, Bronze 1, Bronze 2 e Bronze 3, com Bronze 3 sendo o mais alto.',
			'Segundo nível do ranking Bronze',
			'Terceiro nível do ranking Bronze',
			'Nível baixo - medio de habilidade em VALORANT. Os jogadores que alcançam o nível Prata são considerados jogadores de nível baixo a médio. A Prata é dividida em três níveis, Prata 1, Prata 2 e Prata 3, com Prata 3 sendo o mais alto.',
			'Segundo nível do ranking Prata',
			'Terceiro nível do ranking Prata',
			'Nível médio de habilidade em VALORANT. Os jogadores que alcançam o nível Ouro são considerados habilidosos e são capazes de competir com jogadores de nível médio. O Ouro é dividido em três níveis, Ouro 1, Ouro 2 e Ouro 3, com Ouro 3 sendo o mais alto.',
			'Segundo nível do ranking Ouro',
			'Terceiro nível do ranking Ouro',
			'Nível medio para alto de habilidade em VALORANT. Os jogadores que alcançam o nível Platina são considerados habilidosos e são capazes de competir com jogadores de nível médio a alto. O Platina é dividido em três níveis, Platina 1, Platina 2 e Platina 3, com Platina 3 sendo o mais alto.',
			'Segundo nível do ranking Platina',
			'Terceiro nível do ranking Platina',
			'Nível alto de habilidade em VALORANT. Os jogadores que alcançam o nível Diamante são considerados muito habilidosos e são capazes de competir com jogadores de alto nível. O Diamante é dividido em três níveis, Diamante 1, Diamante 2 e Diamante 3, com Diamante 3 sendo o mais alto.',
			'Segundo nível do ranking Diamante',
			'Terceiro nível do ranking Diamante',
			'Nível muito alto de habilidade em VALORANT. Os jogadores que alcançam o nível Ascendente são considerados muito habilidosos e são capazes de competir com jogadores de alto nível. O Ascendente é dividido em três níveis, Ascendente 1, Ascendente 2 e Ascendente 3, com Ascendente 3 sendo o mais alto.',
			'Segundo nível do ranking Ascendente',
			'Terceiro nível do ranking Ascendente',
			'Nível extremamente alto de habilidade em VALORANT. Os jogadores que alcançam o nível Imortal são considerados extremamente habilidosos e são capazes de competir com os melhores jogadores do mundo. O Imortal é dividido em três níveis, Imortal 1, Imortal 2 e Imortal 3, com Imortal 3 sendo o mais alto.',
			'Segundo nível do ranking Imortal',
			'Terceiro nível do ranking Imortal',
			'Radiante é o nível mais alto de habilidade em VALORANT, e os jogadores que alcançam esse nível são considerados os melhores do mundo. Para alcançar o Radiante, os jogadores devem vencer muitas partidas e ter um desempenho excepcional. O Radiante é o único nível que não possui um limite de classificação, o que significa que os jogadores podem continuar subindo de classificação indefinidamente.',
		];
		let cont = 0;

		data.data[4].tiers.forEach((ranking) => {
			if (ranking.division != 'ECompetitiveDivision::INVALID') {
				const rankingDiv = document.createElement('div');
				rankingDiv.classList.add('ranking-detalhes', 'd-flex', 'flex-column', 'flex-md-row', 'justify-content-center', 'row-gap-3', 'row-gap-md-0', 'column-gap-md-4');
				rankingDiv.innerHTML = `
					<div class="text-center p-4 border border-1 rounded-2 flex-grow-1" style="background-color: #${ranking.backgroundColor == '00000000'?'ffffff':ranking.backgroundColor}; max-width: 300px;">
						<h2 class="text-center" style="color: black; white-space: nowrap;">${ranking.tierName}</h2>
						<img src="${ranking.largeIcon}" alt ="${ranking.tierName}" title="${ranking.tierName}" />
					</div>
					<div class="p-4 flex-md-grow-1 border border-1 rounded-2 bg-body-tertiary">
						<p class="m-0">${rankingDescricao[cont]}</p>
					</div>
				`;
				rankingBody.appendChild(rankingDiv);
				cont++;
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
})();