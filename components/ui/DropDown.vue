<template>
  <div class="z-50">
    <p class="text-sm font-bold mb-1">{{ label }}</p>
    <div>
      <button class="bg-white w-48 py-1 px-2 text-left rounded" @click="toggle">
        <div class="flex justify-between">
          <p class="truncate">{{ getDescription() }}</p>
          <i v-if="!active" class="gg-chevron-down"></i>
          <i v-if="active" class="gg-chevron-up"></i>
        </div>
      </button>
      <div
        v-if="active"
        class="bg-white w-60 rounded mt-2 ring-2 ring-gray-200 absolute"
      >
        <drop-down-item
          v-for="item in items"
          :key="item.id"
          :label="item.label"
          @item-enter="propagate"
          @item-leave="propagate"
          @item-click="dispatch"
        ></drop-down-item>
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
    description: {
      type: String,
      default: 'Description',
    },
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ['hover', 'dispatch'],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    close() {
      this.active = false;
    },
    propagate(value) {
      this.$emit('hover', value);
    },
    dispatch(value) {
      const label = this.label.toLowerCase();
      if (label === 'dataset') {
        this.$store.dispatch('setDataset', value);
        this.$store.dispatch('setLigand', null);
        this.$store.dispatch('setReceptor', null);
      }
      if (label === 'ligand') {
        this.$store.dispatch('setLigand', value);
      }
      if (label === 'receptor') {
        this.$store.dispatch('setReceptor', value);
      }
      this.close();
      this.$emit('dispatch');
    },
    getDescription() {
      const label = this.label.toLowerCase();
      if (label === 'dataset') {
        const activeDataset = this.$store.getters.activeDataset;
        return activeDataset;
      }
      if (label === 'ligand') {
        const activeLigand = this.$store.getters.activeLigand;
        if (activeLigand === null) {
          return this.description;
        } else {
          return activeLigand;
        }
      }
      if (label === 'receptor') {
        const activeReceptor = this.$store.getters.activeReceptor;
        if (activeReceptor === null) {
          return this.description;
        } else {
          return activeReceptor;
        }
      }
    },
  },
};
</script>
