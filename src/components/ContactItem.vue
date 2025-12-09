<template>
  <li>
    <router-link :to="`/contact/${contact.id}`">{{ contact.lastName }}, {{ contact.firstName }} </router-link>
  </li>
</template>

<script>
export default {
  props: ['contact']
};
</script>
