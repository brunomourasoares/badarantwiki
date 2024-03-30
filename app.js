const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/agents', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/agents.html'));
})

app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});