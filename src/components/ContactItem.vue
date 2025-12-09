<template>
  <li>
    <router-link :to="`/contact/${contact.id}`">{{ contact.firstName }} {{ contact.lastName }}</router-link>
  </li>
</template>

<script>
export default {
  props: ['contact']
};
</script>
