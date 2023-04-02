<template>
  <div class="px-4 pb-4">
    <div class="container mx-auto rounded-lg bg-sky-700 p-2">
      <div class="flex justify-center gap-4 text-white">
        <NuxtLink
          to="/"
          class="basis-1/2 rounded-md py-2 text-center"
          :class="selectedTab == 'chat' && 'bg-sky-500'"
        >
          <button type="button">Chat</button>
        </NuxtLink>

        <NuxtLink
          to="/call"
          class="basis-1/2 rounded-md py-2 text-center"
          :class="selectedTab == 'call' && 'bg-sky-500'"
        >
          <button type="button">Call</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { selectedTab: String }
}
</script>
