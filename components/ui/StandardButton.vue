<template>
  <button
    :class="{
      active: activated,
      'text-gray-900': activated,
    }"
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
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  data: () => ({
    hover: false,
  }),
  computed: {
    activated() {
      if (this.hover | this.active) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #f7c59f;
}
</style>
