<template>
	<b-navbar type="dark" variant="dark" class="mb-3">
		<div class="container">
			<b-navbar-brand to="/">Agenda</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-navbar-nav class="ml-auto">
				<b-button variant="primary" :to="{ name: 'Create' }" data-test="novo-contato">Novo contato</b-button>
			</b-navbar-nav>
		</div>
	</b-navbar>
</template>
