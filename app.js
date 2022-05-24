const express = require ('express');
const path = require('path');
const port = process.env.PORT || 3030;
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Servidor corriendo en puerto 3030')
})

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})