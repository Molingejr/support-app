<template>
  <div class="bg-sky-950 py-4 px-2 rounded-t-lg mx-auto mb-2">
    <div class="text-center text-xs text-gray-400">{{ day }}</div>
    <div v-for="message in messages" :key="message.id">
      <div
        class="flex my-2"
        :class="message.userId == 1 ? 'justify-end ms-4' : 'justify-start me-4'"
      >
        <ChatBubble :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia"
import { useMessagesStore } from "~/stores/messages"
export default {
  data() {
    return {
      day: "Today",
      userId: 1
    }
  },
  computed: {
    ...mapState(useMessagesStore, ["messages"])
  }
}
</script>
