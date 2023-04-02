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
export default {
  data() {
    return {
      day: "Today",
      userId: 1,
      messages: [
        {
          id: 1,
          text: "Hi, I have some issues",
          userId: 1,
          time: "4.13 pm"
        },
        {
          id: 2,
          text: "Always happy to help, what is it?",
          userId: 2,
          time: "4.13 pm"
        },
        {
          id: 3,
          text: "I have been trying to fund my account but keep getting errors",
          userId: 1,
          time: "4.14 pm"
        },
        {
          id: 4,
          text: "Have you checked with the admin?",
          userId: 2,
          time: "4.14 pm"
        },
        {
          id: 5,
          text: "No, not yet.",
          userId: 1,
          time: "4.15 pm"
        },
        {
          id: 6,
          text: "It is most likely an admin rule",
          userId: 2,
          time: "4.15 pm"
        }
      ]
    }
  }
}
</script>
