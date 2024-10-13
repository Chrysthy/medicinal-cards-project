const listaSelecaoMedicinais = document.querySelectorAll('.medicinais');

listaSelecaoMedicinais.forEach(item => {

   item.addEventListener('click', () => {

      const cartaoAberto = document.querySelector(".aberto")
      cartaoAberto.classList.remove("aberto")

      const idSelecionado = item.attributes.id.value;

      const idCartaoAbrir = "cartao-" + idSelecionado

      const cartaoAbrir = document.getElementById(idCartaoAbrir)
      cartaoAbrir.classList.add("aberto")


      const medicinaisAtivo = document.querySelector(".ativo")
      medicinaisAtivo.classList.remove("ativo")

      const medicinaisSelecionado = document.getElementById(idSelecionado)
      medicinaisSelecionado.classList.add("ativo")

   });

});
