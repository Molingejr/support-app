<template>
  <div
    class="flex rounded-lg bg-sky-700 p-2 mx-4 my-2 text-gray-50 items-center"
  >
    <div class="ms-6 me-2">
      <nuxt-icon name="call" filled />
    </div>
    <div>
      <div>{{ contact.name }}</div>
      <div class="text-xs">{{ contact.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { contact: Object }
}
</script>
