async function getAgentes() {
	try {
		const response = await fetch('https://valorant-api.com/v1/agents?language=pt-BR');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching agents:', error);
		throw error;
	}
}
(async function() {
	try {
		const data = await getAgentes();
		const agentesHead = document.getElementById('agentes-head');
		const agentesBody = document.getElementById('agentes-body');

		data.data.forEach((agente) => {
			if (agente.isPlayableCharacter === true) {
				const agenteDiv = document.createElement('div');
				agenteDiv.classList.add('agente-menu', 'bg-body-tertiary', 'border', 'border-1', 'rounded-2', 'cursor-pointer', 'text-center');
				agenteDiv.innerHTML = `
					<a href="#${agente.displayName}">
						<img src="${agente.displayName != "Breach" && agente.displayName != "Jett" ? agente.killfeedPortrait : agente.displayName == "Breach" ? "/img/breach_killfeed.png" : "/img/jett_killfeed.png"}" alt="${agente.displayName}" title="${agente.displayName}" class="img-fluid" />
					</a>
				`;
				agentesHead.appendChild(agenteDiv);
			}
		});

		data.data.forEach((agente) => {
			if (agente.isPlayableCharacter === true) {
				const agenteDiv = document.createElement('div');
				agenteDiv.classList.add('agente-detalhes', 'd-flex', 'flex-column', 'flex-md-row', 'mt-5', 'pt-5', 'border-top', 'gap-md-5');
				agenteDiv.setAttribute('id', agente.displayName);
				agenteDiv.innerHTML = `
					<div class="border border-1 rounded-2 bg-body-tertiary align-content-center w-auto" style="background: url('${agente.background}') no-repeat center; background-size: contain; max-width: 600px;">
						<img src="${agente.fullPortraitV2}" alt="${agente.displayName}" title="${agente.displayName}" class="img-fluid" />
					</div>
					<div class="d-flex flex-column justify-content-center justify-content-md-between align-items-center mt-4 mt-md-0">
						<div class="text-center">
							<h2 class="text-uppercase">${agente.displayName}</h2>
							<p class="m-0">${agente.description}</p>
						</div>
						<div class="text-center mt-4">
							<h3>Classe</h3>
							<div class="border border-1 rounded-2 bg-body-tertiary p-4">
								<p class="m-0">${agente.role.displayName}</p>
								<img src="${agente.role.displayIcon}" alt="${agente.role.displayName}" title="${agente.role.description}" width="50" height="50" />
							</div>
						</div>
						<div class="text-center mt-4 w-100 p-0">
							<h3>Habilidades</h3>
							<div class="d-flex row row-cols-2 row-cols-lg-4 row-gap-3 justify-content-between border border-1 rounded-2 bg-body-tertiary mx-lg-0 m-0 align-items-center py-2 py-md-3">
								<div class="text-center col p-2">
									<img src="${agente.abilities[0].displayIcon}" alt="${agente.abilities[0].displayName}" title="${agente.abilities[0].description}" width="40" height="40" />
									<p class="m-0">${agente.abilities[0].displayName}</p>
								</div>
								<div class="text-center col p-2">
									<img src="${agente.abilities[1].displayIcon}" alt="${agente.abilities[1].displayName}" title="${agente.abilities[1].description}" width="40" height="40" />
									<p class="m-0">${agente.abilities[1].displayName}</p>
								</div>
								<div class="text-center col p-2">
									<img src="${agente.abilities[2].displayIcon}" alt="${agente.abilities[2].displayName}" title="${agente.abilities[2].description}" width="40" height="40" />
									<p class="m-0">${agente.abilities[2].displayName}</p>
								</div>
								<div class="text-center col p-2">
									<img src="${agente.abilities[3].displayIcon}" alt="${agente.abilities[3].displayName}" title="${agente.abilities[3].description}" width="40" height="40" />
									<p class="m-0">${agente.abilities[3].displayName}</p>
								</div>
							</div>
						</div>
					</div>
				`;
				agentesBody.appendChild(agenteDiv);
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
})();