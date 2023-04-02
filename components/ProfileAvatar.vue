<template>
  <div class="px-2 px-lg-4 mb-4 flex items-center gap-3">
    <div class="relative">
      <img
        :src="user.picture"
        alt="baby with headphones"
        class="w-12 h-12 rounded-full object-cover"
      />
      <span
        class="absolute h-3 w-3 rounded-full bg-green-500 border-2 border-gray-500 bottom-0 right-0"
      />
    </div>

    <div>
      <div class="text-white">{{ user.name }}</div>
      <div class="text-green-300 text-xs">{{ user.position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        picture: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
        name: "Mutty",
        position: "Customer Care"
      }
    }
  }
}
</script>
