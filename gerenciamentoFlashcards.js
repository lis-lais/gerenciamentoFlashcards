const prompt = require('prompt-sync')();

const { listarBaralhos } = require('./gerenciamentoBaralho');

let flashcards = [];

function novoFlashcard(callbacks) {
    const pergunta = prompt('Pergunta: ');
    const resposta = prompt('Resposta: ');

    listarBaralhos();
    const baralhoId = prompt('Id do baralho: ').trim();

    const flashcard = {
        flashcardId: Date.now(),
        pergunta: pergunta.trim(),
        resposta: resposta.trim(),
        baralhoId: parseInt(baralhoId)
    }
    callbacks(flashcard);
};

function adicionarFlashcard() {
    novoFlashcard((flashcard) => {
        flashcards.push(flashcard);
        console.log('Flashcard adicionado com sucesso!');
    });
};

function listarFlashcards() {
    if (flashcards.length === 0) {
        console.log('Nenhum flashcard cadastrado.');
        return;
    } 

    console.log('--- Lista de Flashcards ---');
    console.log(flashcards);
};

function atualizarFlashcard() {

    listarFlashcards();
    const flashcardId = parseInt(prompt('ID do Flashcard que deseja atualizar: '));
    
    const flashcard = flashcards.find(f => f.flashcardId === flashcardId);

    if (flashcard) {
        flashcard.pergunta = prompt('Nova pergunta do Flashcard: ') || flashcard.pergunta;
        flashcard.resposta = prompt('Nova resposta do Flashcard: ') || flashcard.resposta;
        console.log('Flashcard atualizado com sucesso!');
    } else {
        console.log('Flashcard não encontrado.');
    }
}

function deletarFlashcard() {
    const flashcardId = prompt('ID do Flashcard que deseja remover: ');
    const index = flashcards.findIndex(f => f.flashcardId === parseInt(flashcardId));

    if (index !== -1) {
        flashcards.splice(index, 1);
        console.log('Flashcard removido com sucesso!');
    } else {
        console.log('Flashcard não encontrado.');
    }
}

function buscarFlashcard() {
      
    mostrarMenuBuscarFlashcard();  

    const opcao = prompt('Digite a opção desejada para buscar o flashcard: ').trim();

    if (opcao === null || opcao === '') { 
        console.log('Busca cancelada ou entrada inválida.');
        return;
    }

    const resultados = menuOptionsBuscarFlashcard(opcao, flashcards);  

    console.log('Flashcards encontrados:');
    if (resultados.length > 0) {
        resultados.forEach((flashcard, index) => {
            console.log(`${index + 1}. Pergunta: ${flashcard.pergunta} - Resposta: ${flashcard.resposta} - ID Baralho: ${flashcard.baralhoId}`);
        });
    } else {
        console.log('Nenhum flashcard encontrado.');
    }
}

function mostrarMenuBuscarFlashcard() {
    console.log(`
        1. Buscar por Pergunta
        2. Buscar por ID do Baralho
    `);
}

function menuOptionsBuscarFlashcard(opcao, flashcards) {
    switch (opcao) {
        case '1':
            const pergunta = prompt('Digite a pergunta do Flashcard: ').trim().toLowerCase();
            return flashcards.filter(flashcard => flashcard.pergunta.toLowerCase().includes(pergunta));
        case '2':
            listarBaralhos();
            const baralhoId = prompt('Digite o ID do Baralho: ').trim();
            return flashcards.filter(flashcard => flashcard.baralhoId == baralhoId);
        default:
            console.log('Opção inválida!');
            return [];
    }
}


module.exports = { adicionarFlashcard, listarFlashcards, atualizarFlashcard, deletarFlashcard, buscarFlashcard, mostrarMenuBuscarFlashcard, menuOptionsBuscarFlashcard };