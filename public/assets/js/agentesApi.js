const result = fetch(`https://valorant-api.com/v1/agents?language=pt-BR`)
	.then((res) => res.json())
	.then((data) => {
	return data;
});

const agentes = document.getElementById('agentes');

result.then((data) => {
	data.data.forEach((agente) => {
		if (agente.isPlayableCharacter === true) {
			const agenteDiv = document.createElement('div');
			agenteDiv.classList.add('agente-menu', 'bg-body-tertiary', 'text-center', 'border', 'border-1', 'rounded-2', 'm-2');
			agenteDiv.innerHTML = `
				<a href="#${agente.displayName}">
					<img src="${agente.killfeedPortrait}" alt="${agente.displayName}" title="${agente.displayName}" width="120" height="60">
				</a>
			`;
			agentes.appendChild(agenteDiv);
		}
	});
});

result.then((data) => {
	data.data.forEach((agente) => {
		if (agente.isPlayableCharacter === true) {
			const agenteDiv = document.createElement('div');
			agenteDiv.classList.add('agente-detalhes', 'd-flex', 'mt-5', 'pt-5', 'border-top');
			agenteDiv.setAttribute('id', agente.displayName);
			agenteDiv.innerHTML = `
				<div class="me-5 border border-1 rounded-2 bg-body-tertiary" style="background: url('${agente.background}') center;">
					<img src="${agente.fullPortraitV2}" alt="${agente.displayName}" width="600" height="500">
				</div>
				<div class="d-flex flex-column justify-content-between align-items-center">
					<div class="text-center">
						<h2 class="m-0 text-uppercase">${agente.displayName}</h2>
						<p class="m-0">${agente.description}</p>
					</div>
					<div class="text-center">
						<h3>Classe</h3>
						<div class="border border-1 rounded-2 bg-body-tertiary p-3 px-4 ">
							<p class="m-0">${agente.role.displayName}</p>
							<img src="${agente.role.displayIcon}" alt="${agente.role.displayName}" title="${agente.role.description}" width="50" height="50"/>
						</div>
					</div>
					<div class="text-center container-fluid">
						<h3 class="m-0">Habilidades</h3>
						<div class="d-flex border border-1 rounded-2 bg-body-tertiary p-3 px-4 justify-content-between">
							<div class="text-center">
								<img src="${agente.abilities[0].displayIcon}" alt="${agente.abilities[0].displayName}" title="${agente.abilities[0].description}" width="50" height="50">
								<p class="m-0">${agente.abilities[0].displayName}</p>
							</div>
							<div class="text-center">
								<img src="${agente.abilities[1].displayIcon}" alt="${agente.abilities[1].displayName}" title="${agente.abilities[1].description}" width="50" height="50">
								<p class="m-0">${agente.abilities[1].displayName}</p>
							</div>
							<div class="text-center">
								<img src="${agente.abilities[2].displayIcon}" alt="${agente.abilities[2].displayName}" title="${agente.abilities[2].description}" width="50" height="50">
								<p class="m-0">${agente.abilities[2].displayName}</p>
							</div>
							<div class="text-center">
								<img src="${agente.abilities[3].displayIcon}" alt="${agente.abilities[3].displayName}" title="${agente.abilities[3].description}" width="50" height="50">
								<p class="m-0">${agente.abilities[3].displayName}</p>
							</div>
						</div>
					</div>
				</div>
			`;
			agentes.appendChild(agenteDiv);
		}
	});
});