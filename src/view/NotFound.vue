<template>
	<b-card :title="title" :sub-title="subtitle">
		<br />
		<b-button to="/" variant="outline-primary">Voltar</b-button>
	</b-card>
</template>

<script>
export default {
	data() {
		return {
			title: 'Página não encontrada',
			subtitle: 'O conteúdo que tentou acessar não existe',
		};
	},
};
</script>
