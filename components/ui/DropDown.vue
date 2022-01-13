<template>
  <div>
    <p id="dropdownlabel" class="text-sm font-bold mb-1">{{ label }}</p>
    <div ref="dropdown" class="flex flex-col w-full" @mouseleave="close">
      <button class="bg-white py-1 px-2 text-left rounded" @click="toggle">
        <div class="flex justify-between">
          <p
            class="truncate text-sm font-medium"
            :class="this.selection ? 'text-gray-700' : 'text-gray-400'"
          >
            {{ description }}
          </p>
          <i v-if="!active" class="gg-chevron-down text-gray-700"></i>
          <i v-if="active" class="gg-chevron-up text-gray-700"></i>
        </div>
      </button>
      <div class="relative mt-2">
        <div
          v-show="active"
          class="bg-white rounded ring-2 ring-gray-200 absolute z-10 dd-content"
        >
          <drop-down-item
            v-for="item in items"
            :key="item.id"
            :item="item"
            @item-enter="hover"
            @item-leave="hover"
            @item-click="dispatch"
          ></drop-down-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    selection: {
      type: String,
    },
    defaultDescription: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ['hover', 'dispatch'],
  data: () => ({ active: false }),
  methods: {
    toggle() {
      this.active = !this.active;
    },
    close() {
      this.active = false;
    },
    hover(value) {
      this.$emit('hover', value);
    },
    dispatch(value) {
      this.$emit('dispatch', value);
      this.close();
    },
  },
  computed: {
    description() {
      if (this.selection) {
        const selection = this.items.find((item) => item.id === this.selection);
        return selection.label;
      } else if (this.defaultDescription) {
        return this.defaultDescription;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.dd-content {
  width: 20vw;
}
</style>
