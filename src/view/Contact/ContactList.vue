<template>
	<div>
		<h2 class="h2">
			{{ title }}
			<b-badge
				variant="secondary"
				pill
				tag="small"
				class="float-right font-weight-light"
				:data-test="`total-${this.total}`"
				>{{ total }}</b-badge
			>
		</h2>
		<b-list-group v-if="contacts.length">
			<contact-item v-for="contact in contacts" :key="contact.id" :contact="contact"></contact-item>
		</b-list-group>
		<b-card :title="empty.title" v-else data-test="sem-contatos">
			<b-card-text>
				{{ empty.text }}
			</b-card-text>
			<b-button variant="primary" :to="{ name: 'Create' }" data-test="novo-contato">Novo contato</b-button>
		</b-card>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ContactItem from '@/components/ContactItem';

export default {
	components: {
		ContactItem,
	},
	data() {
		return {
			title: 'Contatos',
			empty: {
				title: 'Nenhum contato',
				text: 'Clique no botão abaixo para criar um novo contato',
			},
		};
	},
	computed: {
		...mapGetters({
			contacts: 'getAllContacts',
			total: 'countAllContacts',
		}),
	},
};
</script>
