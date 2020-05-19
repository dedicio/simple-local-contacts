<template>
	<b-card :title="title">
		<b-form @submit.prevent="saveContact">
			<b-form-group label="Nome" :disabled="isLoading">
				<b-form-input v-model="contact.name" :state="messages.name.valid" data-test="nome"></b-form-input>
				<b-form-invalid-feedback id="input-live-feedback">
					O campo Nome é obrigatório
				</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group label="E-mail" :disabled="isLoading">
				<b-form-input v-model="contact.email" :state="messages.email.valid" data-test="email"></b-form-input>
				<b-form-invalid-feedback id="input-live-feedback">
					{{ messageEmail }}
				</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group label="Telefone" :disabled="isLoading">
				<b-form-input v-model="contact.phone"></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary" :disabled="isLoading" :data-test="buttonDataTest">
				<b-spinner small type="grow" v-if="isLoading"></b-spinner>
				{{ buttonLabel }}
			</b-button>
		</b-form>
	</b-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

export default {
	props: {
		contact: Object | String,
	},
	data() {
		return {
			isLoading: false,
			messages: {
				name: {
					valid: null,
				},
				email: {
					valid: null,
				},
			},
		};
	},
	validations: {
		contact: {
			name: {
				required,
			},
			email: {
				required,
				email,
			},
		},
	},
	methods: {
		...mapActions(['updateContact', 'insertContact']),
		saveContact() {
			this.isLoading = true;
			this.$v.$touch();

			const { contact, $invalid, $pending } = this.$v;

			if ($invalid || $pending) {
				this.isLoading = false;

				this.messages = {
					name: {
						valid: !contact.name.$invalid,
					},
					email: {
						valid: !contact.email.$invalid,
					},
				};
			} else {
				const saveContact = this.id ? 'updateContact' : 'insertContact';

				this[saveContact](this.contact)
					.then(() => {
						this.$router.push({ name: 'ContactList' });
					})
					.finally(() => {
						this.isLoading = false;
					});
			}
		},
	},
	computed: {
		...mapGetters({
			getContactById: 'getContactById',
		}),
		id() {
			return this.$route.params.id;
		},
		title() {
			return this.id ? 'Editar contato' : 'Criar contato';
		},
		messageEmail() {
			return !this.$v.contact.email.email ? 'O endereço precisa ser uma e-mail válido' : 'O campo E-mail é obrigatório';
		},
		buttonLabel() {
			return this.id ? 'Salvar contato' : 'Criar novo contato';
		},
		buttonDataTest() {
			return this.id ? 'salvar' : 'criar';
		},
	},
};
</script>
