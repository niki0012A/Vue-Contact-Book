<script>
import { ref, computed } from 'vue';
import { getContacts } from '../utils/localStorage';
import ContactItem from '../components/ContactItem.vue';

export default {
  components: { ContactItem },
  setup() {
    const search = ref('');
    const contacts = ref(getContacts());
    const filteredContacts = computed(() =>
      contacts.value
        .filter(c =>
          `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.value.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    );

    return { search, filteredContacts };
  }
};
</script>

<template>
  <div class="wrapper">
    <h1>Contact Book</h1>
    <div class="search-add">
      <input v-model="search" placeholder="Search..." />
      <router-link to="/add">Add Contact</router-link>
    </div>
    <ul>
      <ContactItem
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contact="contact"
      />
    </ul>
  </div>
</template>