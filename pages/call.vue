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
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Chinedu",
          phone: "0803 997 3902"
        },
        {
          id: 2,
          name: "Tope",
          phone: "0818 424 6512"
        },
        {
          id: 3,
          name: "Mohammed",
          phone: "0807 971 7958"
        },
        {
          id: 4,
          name: "Benita",
          phone: "0907 886 7093"
        }
      ]
    }
  }
}
</script>
