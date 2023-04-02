<template>
  <div class="flex py-4 items-center">
    <div class="flex-none px-2">
      <nuxt-icon name="back-arrow" filled />
    </div>
    <div class="grow">
      <div class="flex justify-center text-lg text-white">{{ tabTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabTitle: "Support"
    }
  }
}
</script>
