<template>
  <div class="mx-4 pb-4 flex gap-4">
    <label class="relative block basis-11/12">
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-sky-950 w-full border border-slate-300 text-white rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Type a message"
        type="text"
        name="search"
        v-model="message"
      />
    </label>
    <button
      type="button"
      class="rounded-full bg-green-400 p-3"
      @click="postMessage"
    >
      <nuxt-icon name="up-arrow" filled />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useMessagesStore } from "../stores/messages"

export default {
  data() {
    return {
      message: ""
    }
  },
  computed: {
    ...mapState(useMessagesStore, ["messages"])
  },
  methods: {
    ...mapActions(useMessagesStore, ["sendMessage"]),
    postMessage() {
      let today = new Date()
      let time = today.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })

      let messageObj = {
        id: this.messages.length + 1,
        text: this.message,
        userId: 1,
        time: time
      }
      this.sendMessage(messageObj)
    }
  }
}
</script>
