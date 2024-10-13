/*
   OBJETIVO - quando clicar na listagem temos que esconder o cartão aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o selecionado na listagem
       PASSO 6 - adicinar a classe ativo selecionado na listagem
*/

const listaSelecaoMedicinais = document.querySelectorAll('.medicinais');


