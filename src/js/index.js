const listaSelecaoMedicinais = document.querySelectorAll('.medicinais');

listaSelecaoMedicinais.forEach(item => {

   item.addEventListener('click', () => {

      esconderCartao();

      const idSelecionado = mostrarCartaoSelecionado(item);

      desativarItemListagem();

      selectMedicinalItem(idSelecionado);

   });

});


function selectMedicinalItem(idSelecionado) {
   const medicinaisSelecionado = document.getElementById(idSelecionado);
   medicinaisSelecionado.classList.add("ativo");
}

function desativarItemListagem() {
   const medicinaisAtivo = document.querySelector(".ativo");
   medicinaisAtivo.classList.remove("ativo");
}

function mostrarCartaoSelecionado(item) {
   const idSelecionado = item.attributes.id.value;

   const idCartaoAbrir = "cartao-" + idSelecionado;

   const cartaoAbrir = document.getElementById(idCartaoAbrir);
   cartaoAbrir.classList.add("aberto");
   return idSelecionado;
}

function esconderCartao() {
   const cartaoAberto = document.querySelector(".aberto");
   cartaoAberto.classList.remove("aberto");
}

