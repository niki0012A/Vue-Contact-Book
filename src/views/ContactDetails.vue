<template>
  <div class="wrapper">
    <router-link to="/">← Back to list</router-link>
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <br>
    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="deleteContact" class="delete">Delete</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getContacts, saveContacts, getContactById } from '../utils/localStorage';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contact = ref(getContactById(route.params.id));

    function deleteContact() {
      const contacts = getContacts().filter(c => c.id !== contact.value.id);
      saveContacts(contacts);
      router.push('/');
    }

    return { contact, deleteContact };
  }
};
</script>
