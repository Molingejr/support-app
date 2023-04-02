<template>
  <div class="my-2">
    <div
      class="rounded-full px-4 py-2 mb-1"
      :class="
        isCurrentUser
          ? 'bg-green-400 text-green-950'
          : 'bg-sky-700 text-gray-50'
      "
    >
      {{ message.text }}
    </div>
    <div
      class="text-xs text-gray-50 px-4"
      :class="isCurrentUser ? 'text-end' : 'text-start'"
    >
      {{ message.time }}
    </div>
  </div>
</template>

<script>
export default {
  props: { message: Object },
  computed: {
    isCurrentUser() {
      return this.message.userId == 1
    }
  }
}
</script>
