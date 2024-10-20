const prompt = require('prompt-sync')();

const { adicionarBaralho } = require('./gerenciamentoBaralho.js');
const { adicionarFlashcard } = require('./gerenciamentoFlashcards.js');
const { menuListar } = require('./menuListar.js');
const { menuAtualizar } = require('./menuAtualizar.js');
const { menuDeletar } = require('./menuDeletar.js');
const { buscarFlashcard } = require('./gerenciamentoFlashcards.js');

function menuPrincipal() {
    console.log (`
        **********MENU**********
        1. ADICIONAR BARALHO
        2. ADICIONAR FLASHCARDS
        3. LISTAR
        4. ATUALIZAR
        5. DELETAR
        6. BUSCAR FLASHCARDS
        7. SAIR
    `);
};

function menuOptions(opcao) {
    switch (opcao.trim()) {
        case '1':
            adicionarBaralho();
            break;
        case '2':
            adicionarFlashcard();
            break;
        case '3':
            menuListar();
            break;
        case '4':
            menuAtualizar();
            break;
        case '5':
            menuDeletar();
            break;
        case '6':
            buscarFlashcard();
            break;
        case '7':
            console.log('Saindo do Programa.');
            process.exit();
        default:
            console.log('Opção inválida!');
            menuPrincipal();
            
    }
};

function menuLoop() {
    while (true) {
        menuPrincipal();
        const opcao = prompt('Digite a opção desejada: ').trim();
        menuOptions(opcao);
    }
};

module.exports = { menuPrincipal, menuOptions, menuLoop }