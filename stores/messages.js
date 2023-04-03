export const useMessagesStore = defineStore("messages", {
  state: () => ({
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
  }),
  actions: {
    sendMessage(message) {
      this.messages.push(message)
    }
  }
})
