import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetails from '../views/ContactDetails.vue';
import ContactForm from '../views/ContactForm.vue';

const routes = [
    { path: '/', name: 'Home', component: ContactList },
    { path: '/contact/:id', name: 'Details', component: ContactDetails, props: true },
    { path: '/add', name: 'Add', component: ContactForm },
    { path: '/edit/:id', name: 'Edit', component: ContactForm, props: true }
];

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
