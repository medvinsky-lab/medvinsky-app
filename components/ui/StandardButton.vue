<template>
  <button
    :class="{ 'bg-yellow-400': hover, 'text-gray-900': hover }"
    class="p-1.5 bg-gray-900 text-gray-50 rounded w-28"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    hover: false,
  }),
};
</script>