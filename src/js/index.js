const listaSelecaoCarros = document.querySelectorAll(".esportivo");

listaSelecaoCarros.forEach(esportivo => {
	esportivo.addEventListener("click", () => {
		esconderCartaoEsportivo();

		const idEsportivoSelecionado = mostrarCartaoEsportivoSelecionado(esportivo);

		desativarEsportivoNaListagem();
		ativarEsportivoSelecionadoNaListagem(idEsportivoSelecionado);

	})
})


function ativarEsportivoSelecionadoNaListagem(idEsportivoSelecionado) {
	const esportivoSelecionadoNaListagem = document.getElementById(idEsportivoSelecionado);
	esportivoSelecionadoNaListagem.classList.add("ativo");
}

function desativarEsportivoNaListagem() {
	const esportivoAtivoNaListagem = document.querySelector(".ativo");
	esportivoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoEsportivoSelecionado(esportivo) {
	const idEsportivoSelecionado = esportivo.attributes.id.value;
	const idDoCartaoEsportivoParaAbrir = "cartao-" + idEsportivoSelecionado;
	const cartaoEsportivoParaAbrir = document.getElementById(idDoCartaoEsportivoParaAbrir);
	cartaoEsportivoParaAbrir.classList.add("aberto");
	return idEsportivoSelecionado;
}

function esconderCartaoEsportivo() {
	const cartaoEsportivoAberto = document.querySelector(".aberto");
	cartaoEsportivoAberto.classList.remove("aberto");
}