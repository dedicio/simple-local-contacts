<template>
	<b-list-group-item class="flex-column align-items-start">
		<div class="d-flex w-100 justify-content-between">
			<div class="list-item-content">
				<h5>{{ contact.name }}</h5>
				<p>
					<b-icon-envelope-fill></b-icon-envelope-fill>
					{{ contact.email }}
				</p>
				<p>
					<b-icon-phone></b-icon-phone>
					{{ contact.phone }}
				</p>
			</div>
			<b-button-group vertical>
				<b-button size="sm" variant="outline-secondary" @click="editContact" data-test="editar">Editar</b-button>
				<b-button size="sm" variant="outline-danger" @click="deleteContact" data-test="apagar">Excluir</b-button>
			</b-button-group>
		</div>
	</b-list-group-item>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	props: {
		contact: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...mapActions(['removeContact']),
		editContact() {
			this.$router.push({
				name: 'Edit',
				params: { id: this.contact.id },
			});
		},
		deleteContact() {
			this.removeContact(this.contact);
		},
	},
};
</script>

<style lang="scss" scoped>
.list-item-content h5,
.list-item-content p {
	margin: 0;
}
</style>
