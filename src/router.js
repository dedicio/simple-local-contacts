import Vue from 'vue';
import Router from 'vue-router';

import ContactList from '@/view/Contact/ContactList';
import ContactCreate from '@/view/Contact/ContactCreate';
import Main from '@/layout/Main';
import NotFound from '@/view/NotFound';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					name: 'ContactList',
					path: '',
					component: ContactList,
				},
				{
					name: 'Create',
					path: 'create',
					component: ContactCreate,
				},
				{
					name: 'Edit',
					path: '/:id/edit',
					component: ContactCreate,
					props: true,
				},
				{
					name: 'notFound',
					path: '404',
					component: NotFound,
				},
			],
		},
		{
			path: '*',
			redirect: '/404',
		},
	],
});
