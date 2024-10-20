const prompt = require('prompt-sync')();

let baralhos = [];

function novoBaralho(callbacks) {
    const titulo = prompt('Título: ');

    const baralho = {
        baralhoId: Date.now(),
        titulo: titulo.trim(),
    };
    callbacks(baralho);
};

function adicionarBaralho() {
    novoBaralho((baralho) => {
        const existe = baralhos.some(b => b.titulo === baralho.titulo);

        if (existe) {
            console.log('Já existe um baralho com esse título.');
            return;
        } else {
        baralhos.push(baralho);
        console.log('Baralho adicionado com sucesso!');
        }
    });
};

function listarBaralhos() {
    if (baralhos.length === 0) {
        console.log('Nenhum baralho cadastrado.');
        return;
    } 

    console.log('--- Lista de Baralhos ---');
    console.log(baralhos);
};

function atualizarBaralho() {

    listarBaralhos();
    const baralhoId = parseInt(prompt('ID do Baralho que deseja atualizar: '));
    
    const baralho = baralhos.find(b => b.baralhoId === baralhoId); 
    
    if (baralho) {
        const novoTitulo = prompt('Novo título do Baralho: ').trim();
        
        if (novoTitulo) baralho.titulo = novoTitulo;

        console.log('Baralho atualizado com sucesso!');
    } else {
        console.log('Baralho não encontrado.');
    }
}

function deletarBaralho() {
    const baralhoId = prompt('ID do Baralho que deseja remover: ');
    const index = baralhos.findIndex(b => b.baralhoIdId === parseInt(baralhoId));

    if (index !== -1) {
        baralhos.splice(index, 1);
        console.log('Baralho removido com sucesso!');

        flashcards = flashcards.filter(flashcard => flashcard.baralhoId !== parseInt(baralhoId));
        console.log('Flashcards associados ao baralho também foram removidos.');
    } else {
        console.log('Baralho não encontrado.');
    }   
}

module.exports = { adicionarBaralho, listarBaralhos, atualizarBaralho, deletarBaralho };
