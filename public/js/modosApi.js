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

		data.data.forEach((modo) => {
			const modoDiv = document.createElement('div');
			modoDiv.classList.add('modo-detalhes', 'd-flex', 'flex-column', 'my-5', 'pt-5', 'border-top', 'row-gap-3');
			modoDiv.setAttribute('id', modo.displayName);
			modoDiv.innerHTML = `


			<div class="d-flex justify-content-center column-gap-5">
				<div class="d-flex flex-column">
					<div class="text-center">
						<h2 class="m-0 text-uppercase">Modo</h2>
						<h3 class="mt-3">${modo.displayName}</h3>
					</div>
					<div class="text-center mt-5">
						<h2 class="m-0 text-uppercase">Tempo</h2>
						<h3 class="mt-3">${modo.duration}</h3>
					</div>
					<div class="text-center mt-5">
						<img src="${modo.displayIcon}" alt="Modo ${modo.displayName}" title="Modo ${modo.displayName}" width="100" height="100" />
					</div>
				</div>
				<div class="border border-1 rounded-2 bg-body-tertiary" style="max-width: 400px;">
					<img src="${modo.listViewIconTall}" alt="Modo ${modo.displayName}" title="Modo ${modo.displayName}" class="img-fluid" />
				</div>
			</div>
			`;
			modosBody.appendChild(modoDiv);
		});
	} catch (error) {
		console.error('Error:', error);
	}
})();