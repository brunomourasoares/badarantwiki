const result = fetch(`https://valorant-api.com/v1/maps?language=pt-BR`)
	.then((res) => res.json())
	.then((data) => {
	return data;
});

const mapas = document.getElementById('mapas');

result.then((data) => {
	data.data.forEach((mapa) => {
		const mapaMenuDiv = document.createElement('div');
		mapaMenuDiv.classList.add('mapa-menu', 'bg-body-tertiary', 'border', 'border-1', 'rounded-2', 'm-2');
		mapaMenuDiv.innerHTML = `
			<a href="#${mapa.displayName}" title="${mapa.displayName}">
				<img src="${mapa.listViewIcon}" alt="${mapa.displayName}" width="200" height="80" />
			</a>
		`;
		mapas.appendChild(mapaMenuDiv);
	})
});

mapaDistrictDescricao = 'Baseado no mapa Split, District é um mapa de combate de curto alcance com muitos corredores e áreas de cobertura.';
mapaKasbahDescricao = 'Baseado no mapa Bind, Kasbah é um mapa mais aberto, com muitas áreas de combate a medio alcance na parte externa e curto na parte interna.';
mapaDriftDescricao = 'Baseado no mapa Breeze, Drift é um mapa de medio e curto alcance com muitas áreas de combate e alguns corredores estreitos.';
mapaPiazzaDescricao = 'Baseado no mapa Ascent, Piazza é um mapa com muitos corredores curtos e de combate direto.';
mapaTheRangeDescricao = 'As ilhas em ruínas da Cordilheira são apenas alguns dos muitos pedaços de terra veneziana permanentemente suspensos a centenas de metros no céu após o desastre de 10 AFL na cidade causado por uma explosão de pico. Anteriormente parte das ilhas de Poveglia, o Range é agora utilizado pelo Protocolo VALORANT como campo de treinamento, contendo também alguns escritórios para alguns de seus agentes seniores.';
mapaTheRangeLocalizacao = ['Ponto de partida do Parkour', 'Alvo de precisão', 'Boneco de treinamento', 'Alvo de treinamento flutuantes', 'Entrada para o porão do escritório de Brimstones', 'Escritório de Cyphers', 'Quadro de avisos', 'Campo de tiro', 'Alcance Aberto', 'Teletransportador para desarmar e plantar Spike'];

result.then((data) => {
	data.data.forEach((mapa) => {
			const mapaDetDiv = document.createElement('div');
			mapaDetDiv.classList.add('mapa-detalhes', 'd-flex', 'flex-column', 'mt-5', 'pt-5', 'border-top');
			mapaDetDiv.setAttribute('id', mapa.displayName);
			let calloutCount = 1;
			mapaDetDiv.innerHTML = `
				<h2 class="text-center">${mapa.displayName.toUpperCase()}</h2>
				<p>${
						mapa.narrativeDescription != null ? mapa.narrativeDescription : mapa.displayName == 'District' ? mapaDistrictDescricao : mapa.displayName == 'Kasbah' ? mapaKasbahDescricao : mapa.displayName == 'The Range' ? mapaTheRangeDescricao : 'Descrição não disponível'
					}
				</p>
				<div class="d-flex flex-column justify-content-center">
					<div class="container d-flex flex-column justify-content-center flex-md-row p-0 mb-3 border border-1 rounded-2 bg-body-tertiary">
						<div class="me-md-5 p-3">
							<h3>Modo</h3>
							<span class="text-secondary" style="cursor: default;">
							${
								mapa.tacticalDescription != null ? mapa.tacticalDescription : mapa.displayName == 'The Range' ? 'Praticar' : 'Mata-Mata em Equipe'
							}
							</span>
						</div>
						<div class="ms-md-5 p-3">
							<h3>Localizações</h3>
							<div class="d-flex flex-column flex-md-row flex-wrap">
								${
									mapa.callouts != null
										? mapa.callouts
												.map((callout) => {
													if (callout.regionName != null && callout.superRegionName != null) {
														return `<div> ${calloutCount++}. <span class="text-secondary lh-lg mb-5" style="cursor: default;">${callout.regionName} ${callout.superRegionName}</span>&nbsp;</div>`;
													} else {
														return `<span class="text-secondary" style="cursor: default;">Localização não disponível</span>`;
													}
												})
												.join('')
										: mapa.displayName == 'The Range'
										? (() => {
												let result = '';
												for (let i = 0; i < mapaTheRangeLocalizacao.length; i++) {
													result += `<div>${calloutCount++}. <span class="text-secondary lh-lg mb-5" style="cursor: default;">${mapaTheRangeLocalizacao[i]}</span>&nbsp;</div>`;
												}
												return result;
											})()
										: `<div><span class="text-secondary lh-lg mb-5" style="cursor: default;">Localização não disponível</span></div>`
								}
							</div>
						</div>
					</div>
					<div class="d-flex flex-column flex-md-row justify-content-center align-items-center border border-1 rounded-2 bg-body-tertiary p-2">
						<div class="me-5">
							<img src="${mapa.splash}" alt="${mapa.displayName}" width="100%" height="100%">
						</div>
						<div>
							${
								mapa.displayIcon != null ? `<img src="${mapa.displayIcon}" alt="${mapa.displayName}" width="100%" height="100%" />` : `<img src="/assets/img/${mapa.displayName.replace(' ', '_')}_minimap.png" alt="${mapa.displayName}" width="100%" height="100%" />`
							}
						</div>
					</div>
				</div>
			</div>
			`;
			mapas.appendChild(mapaDetDiv);
	});
});