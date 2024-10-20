const prompt = require('prompt-sync')();

const { deletarBaralho } = require('./gerenciamentoBaralho.js');
const { deletarFlashcard } = require('./gerenciamentoFlashcards.js');
const { menuPrincipal } = require('./menu.js');

function menuDeletar() {
    console.log (`
        **********MENU DELETAR**********
        1. DELETAR BARALHO
        2. DELETAR FLASHCARD
        3. VOLTAR
    `);
    const opcao = prompt('Digite a opção desejada: ').trim();

    menuOptions(opcao);
};

function menuOptions(opcao) {
    switch (opcao) {
        case '1':
            deletarBaralho();
            break;
        case '2':
            deletarFlashcard();
            break;
        case '3':
            console.log('Busca cancelada.');
            menuPrincipal(); 
            break;            
        default:
            console.log('Opção inválida!');
            menuPrincipal();            
    }
};

module.exports = { menuDeletar }