const fs = require('fs');

class Arquivo {
    
    constructor(){


    };
    ler(caminhoArquivo){
        const data = fs.readFileSync(caminhoArquivo, 'utf-8').split('\n');
        return data
};

    salvar(caminhoArquivo, conteudo){
        let conteudoJson = JSON.stringify(conteudo);
        fs.appendFileSync(caminhoArquivo, conteudoJson + '\n');
    };

};

module.exports = Arquivo;