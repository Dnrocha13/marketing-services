const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const Arquivo = require('../model/arquivo')

app.post('/mensagens', (req, res ) => {
    const {numero, mensagem } =  req.body;
    const data = {numero,mensagem, horario : new Date().toISOString()};

    const arquivoInstance = new Arquivo();
    arquivoInstance.salvar('mensagens.txt', data);
    res.send("mensagem recebida com sucesso")

});

app.get('/mensagens', (req, res) =>{
    const arquivoInstance = new Arquivo();
    const data = arquivoInstance.ler('mensagens.txt');

    const messages =[];
    data.forEach((message) => {
        if (message !== '') {
          messages.push(JSON.parse(message));
        }
      });
    res.send(messages)
});
const PORT = 3000
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});