const header = document.getElementById('header');
const siteName = 'Badarant Wiki';

const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-lg', 'bg-light', 'bg-body-tertiary');
nav.innerHTML = `
<div class="container-fluid">
    <a class="navbar-brand" href="/">
        <img src="/img/favicon.png" alt="${siteName}" title="${siteName}" width="50" height="50" />BADARANT WIKI
    </a>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header justify-content-between">
            <img src="/img/favicon.png" alt="${siteName}" title="${siteName}" width="30" height="30" class="pt-1" />
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
            <button type="button" title="Fechar" class="btn-close m-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav row-gap-1 column-gap-2 w-100">
                <li class="nav-item border border-0 text-center flex-grow-1">
                    <a class="nav-link fw-bold active" aria-current="page" href="/" title="Início" role="button">INÍCIO</a>
                </li>
                <li class="nav-item dropdown border border-0 text-center flex-grow-1">
                    <a class="nav-link dropdown-toggle fw-bold active" title="Sobre o Jogo" role="button" data-bs-toggle="dropdown" aria-expanded="false">SOBRE O JOGO</a>
                    <ul class="dropdown-menu border border-0 bg-transparent p-0 m-0 w-100">
                        <li><a class="dropdown-item" title="Mapas" href="/mapas/">MAPAS</a></li>
                        <li><a class="dropdown-item" title="Modos de Jogo" href="/modos/">MODOS DE JOGO</a></li>
                        <li><a class="dropdown-item" title="Ranking" href="/rankings/">RANKINGS</a></li>
                    </ul>
                </li>
                <li class="nav-item border border-0 text-center flex-grow-1">
                    <a class="nav-link fw-bold active" aria-current="page" href="/agentes/" title="Agentes" role="button">AGENTES</a>
                </li>
                <li class="nav-item dropdown border border-0 text-center flex-grow-1">
                    <a class="nav-link dropdown-toggle fw-bold active" title="Armamentos" role="button" data-bs-toggle="dropdown" aria-expanded="false">ARSENAL</a>
                    <ul class="dropdown-menu border border-0 bg-transparent p-0 m-0 w-100">
                        <li><a class="dropdown-item" title="Armas" href="/armas/">ARMAS</a></li>
                        <li><a class="dropdown-item" title="Pacotes" href="/pacotes/">PACOTES</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown border border-0 text-center flex-grow-1">
                    <a class="nav-link dropdown-toggle fw-bold active" title="Diversos" role="button" data-bs-toggle="dropdown" aria-expanded="false">DIVERSOS</a>
                    <ul class="dropdown-menu border border-0 bg-transparent p-0 m-0 w-100">
                        <li><a class="dropdown-item" title="Sprays" href="/sprays/">SPRAYS</a></li>
                        <li><a class="dropdown-item" title="Eventos" href="/eventos/">EVENTOS</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="w-25">
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
</div>`;
header.appendChild(nav);