const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

const pages = ['agentes', 'armas', 'pacotes', 'protecao', 'mapas', 'modos', 'sprays', 'eventos'];

pages.forEach(page => {
    router.get(`/${page}`, function(req, res) {
        res.sendFile(path.join(__dirname, `/public/${page}.html`));
    });
});

router.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});