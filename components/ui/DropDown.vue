<template>
  <div>
    <p class="text-sm font-bold mb-1">{{ label }}</p>
    <div class="flex flex-col w-full" @mouseleave="close">
      <button class="bg-white py-1 px-2 text-left rounded" @click="toggle">
        <div class="flex justify-between">
          <p class="truncate">{{ description }}</p>
          <i v-if="!active" class="gg-chevron-down"></i>
          <i v-if="active" class="gg-chevron-up"></i>
        </div>
      </button>
      <div class="relative mt-2">
        <div
          v-show="active"
          class="bg-white rounded ring-2 ring-gray-200 absolute w-auto z-10"
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
    selected: {
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
      if (this.selected) {
        const selectedItem = this.items.find(
          (item) => item.id === this.selected
        );
        return selectedItem.label;
      } else if (this.defaultDescription) {
        return this.defaultDescription;
      }
      return null;
    },
  },
};
</script>
