const prompt = require('prompt-sync')();

const { atualizarBaralho } = require('./gerenciamentoBaralho.js');
const { atualizarFlashcard } = require('./gerenciamentoFlashcards.js');
const { menuPrincipal } = require('./menu.js');

function menuAtualizar() {
    console.log (`
        **********MENU ATUALIZAR**********
        1. ATUALIZAR BARALHO
        2. ATUALIZAR FLASHCARD
        3. VOLTAR
    `);
    const opcao = prompt('Digite a opção desejada: ').trim();

    menuOptions(opcao);
};

function menuOptions(opcao) {
    switch (opcao) {
        case '1':
            atualizarBaralho();
            break;
        case '2':
            atualizarFlashcard();
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

module.exports = { menuAtualizar }