// Importando os módulos necessários
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Configuração da pasta estática para servir arquivos públicos
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

// Configuração das rotas
app.use('/', router);
const pages = ['mapas', 'modos', 'rankings', 'agentes', 'armas', 'pacotes', 'sprays', 'eventos'];
pages.forEach(page => {
    router.get(`/${page}`, function(req, res) {
        res.sendFile(path.join(__dirname, 'views', `${page}.html`));
    });
});

// Tratamento de erro para rota não encontrada (404)
router.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Tratamento de erro interno do servidor (500)
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`
=============================================
|  Servidor Express iniciado na porta ${PORT}  |
=============================================
    `);
});