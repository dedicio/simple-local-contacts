import Vue from 'vue';
import Vuex from 'vuex';
import Persistence from 'vuex-persist';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const local = new Persistence({
	storage: window.localStorage,
});

export default new Vuex.Store({
	state: {
		contacts: [],
	},

	mutations: {
		insertContact(state, payload) {
			state.contacts.push(payload);
		},
		updateContact(state, { index, payload }) {
			state.contacts[index] = payload;
		},
		removeContact: (state, payload) => {
			state.contacts.splice(payload, 1);
		},
	},

	getters: {
		countAllContacts: (state) => state.contacts.length,
		getAllContacts: (state) => state.contacts,
		getContactById: (state) => (id) => {
			if (!id) return {};

			return state.contacts.find((contact) => contact.id === id);
		},
	},

	actions: {
		insertContact: ({ commit }, payload) => {
			payload.id = uuidv4();

			commit('insertContact', payload);
		},

		updateContact: ({ state, commit }, payload) => {
			const { id } = payload;
			const index = state.contacts.findIndex((contact) => contact.id === id);
			const updateData = {
				index,
				payload,
			};

			commit('updateContact', updateData);
		},

		removeContact: ({ state, commit }, { id }) => {
			const index = state.contacts.findIndex((contact) => contact.id === id);

			commit('removeContact', index);
		},
	},

	plugins: [local.plugin],
});
