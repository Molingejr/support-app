<template>
  <div class="h-screen">
    <TheHeader />
    <NavTab selected-tab="call" />
    <div class="text-white text-lg ms-4 mb-4">Start a Call</div>
    <div v-for="contact in contacts" :key="contact.id">
      <ContactDetail :contact="contact" />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia"
import { useContactsStore } from "~/stores/contacts"
export default {
  computed: {
    ...mapState(useContactsStore, ["contacts"])
  }
}
</script>
