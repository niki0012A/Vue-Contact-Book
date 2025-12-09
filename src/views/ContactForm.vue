<template>
  <div class="wrapper">
    <h2>{{ isEdit ? 'Edit Contact' : 'Add Contact' }}</h2>
    <form @submit.prevent="save">
      <input v-model="form.firstName" placeholder="First Name" required />
      <input v-model="form.lastName" placeholder="Last Name" required />
      <input v-model="form.email" placeholder="Email" type="email" required />
      <button type="submit">{{ isEdit ? 'Update' : 'Add' }}</button>
    </form>
    <router-link to="/">← Back to list</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getContacts, saveContacts, getContactById } from '../utils/localStorage';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isEdit = !!route.params.id;
    const form = ref({
      firstName: '',
      lastName: '',
      email: ''
    });

    if (isEdit) {
      const contact = getContactById(route.params.id);
      if (contact) form.value = { ...contact };
    }

    function save() {
      const contacts = getContacts();
      if (isEdit) {
        const index = contacts.findIndex(c => c.id === form.value.id);
        contacts[index] = form.value;
      } else {
        form.value.id = Date.now().toString();
        contacts.push(form.value);
      }
      saveContacts(contacts);
      router.push(`/contact/${form.value.id}`);
    }

    return { form, save, isEdit };
  }
};
</script>