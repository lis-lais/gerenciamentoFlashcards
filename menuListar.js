const prompt = require('prompt-sync')();

const { listarBaralhos } = require('./gerenciamentoBaralho.js');
const { listarFlashcards } = require('./gerenciamentoFlashcards.js');
const { menuPrincipal } = require('./menu.js');

function menuListar() {
    console.log (`
        **********MENU LISTAR**********
        1. LISTAR BARALHO
        2. LISTAR FLASHCARD
        3. VOLTAR
    `);
    const opcao = prompt('Digite a opção desejada: ').trim();

    menuOptions(opcao);
};

function menuOptions(opcao) {
    switch (opcao.trim()) {
        case '1':
            listarBaralhos();
            break;
        case '2':
            listarFlashcards();
            break;
        case '3':
            console.log('Busca cancelada.');
            menuPrincipal();
            return;
        default:
            console.log('Opção inválida!');
            menuPrincipal();
            
    }
};

module.exports = { menuListar, menuOptions }