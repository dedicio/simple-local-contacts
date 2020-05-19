<template>
	<div>
		<contact-form :contact="contact"></contact-form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ContactForm from '@/components/ContactForm';

export default {
	components: {
		ContactForm,
	},
	data() {
		return {
			contact: {},
		};
	},
	methods: {
		setContact() {
			const id = this.$route.params.id;
			const contact = this.getContactById(id);

			if (id && !contact) {
				this.$router.push({ name: 'notFound' });
			}

			this.contact = contact || {};
		},
	},
	computed: {
		...mapGetters({
			getContactById: 'getContactById',
		}),
		id() {
			return this.$route.params.id;
		},
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => vm.setContact());
	},
};
</script>
