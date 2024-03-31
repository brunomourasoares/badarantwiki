const header = document.getElementById('header');
const nav = document.createElement('nav');

nav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary');
nav.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="/assets/img/favicon.png" alt="Badarant" width="50" height="50" />BADARANT WIKI
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item border border-0 text-center">
                    <a class="nav-link fw-bold active" aria-current="page" href="/" role="button">INÍCIO</a>
                </li>
                <li class="nav-item border border-0 text-center">
                    <a class="nav-link fw-bold active" aria-current="page" href="/agentes/" role="button">AGENTES</a>
                </li>
                <li class="nav-item dropdown border border-0 text-center">
                    <a class="nav-link dropdown-toggle fw-bold active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ARMARIA</a>
                    <ul class="dropdown-menu border border-0 rounded-0 p-0 bg-transparent">
                        <li><a class="dropdown-item" href="/armas/">ARMAS</a></li>
                        <li><a class="dropdown-item" href="/pacotes/">PACOTES</a></li>
                        <li><a class="dropdown-item" href="/escudos/">ESCUDOS</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown border border-0 text-center">
                    <a class="nav-link dropdown-toggle fw-bold active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">O JOGO</a>
                    <ul class="dropdown-menu border border-0 rounded-0 p-0 bg-transparent">
                        <li><a class="dropdown-item" href="/mapas/">MAPAS</a></li>
                        <li><a class="dropdown-item" href="/modos/">MODOS DE JOGO</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown border border-0 text-center">
                    <a class="nav-link dropdown-toggle fw-bold active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">OUTROS</a>
                    <ul class="dropdown-menu border border-0 rounded-0 p-0 bg-transparent">
                        <li><a class="dropdown-item" href="/sprays/">SPRAYS</a></li>
                        <li><a class="dropdown-item" href="/eventos/">EVENTOS</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>`;
    header.appendChild(nav);