<template>
  <button
    :class="{ 'bg-gray-100': hover }"
    class="w-full text-left text-sm font-medium"
    @mouseenter="toggleIn"
    @mouseleave="toggleOut"
    @click="$emit('item-click', item)"
  >
    <p class="p-2">
      {{ item.label }}
    </p>
  </button>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ['item-click', 'item-enter', 'item-leave'],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    toggleIn() {
      this.hover = true;
      this.$emit('item-enter', this.item.id);
    },
    toggleOut() {
      this.hover = false;
      this.$emit('item-leave', null);
    },
  },
};
</script>
