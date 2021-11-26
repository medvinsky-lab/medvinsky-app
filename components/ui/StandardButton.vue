<template>
  <button
    :class="{ 'bg-yellow-400': hover, 'text-gray-900': hover }"
    class="py-1 px-2 bg-gray-900 text-gray-50 rounded"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="$emit('click')"
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
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  data: () => ({
    hover: false,
  }),
};
</script>