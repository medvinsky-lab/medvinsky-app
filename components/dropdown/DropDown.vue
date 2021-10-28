<template>
  <div>
    <p class="mb-1 text-xs font-bold text-gray-600">
      {{ label }}
    </p>
    <div @mouseleave="away">
      <button
        class="bg-white w-full text-left p-2 flex justify-between rounded"
        @click="toggle"
      >
        <p class="text-sm font-bold">{{ description }}</p>
        <i v-if="active" class="gg-chevron-up"></i>
        <i v-else class="gg-chevron-down"></i>
      </button>
      <div
        v-if="active"
        class="bg-white text-left rounded mt-2 ring-2 ring-gray-200"
      >
        <drop-down-item
          v-for="item in items"
          :key="item.id"
          :type="type"
          :value="item.name"
          @item-click="updateDesc"
          >{{ item.name }}
        </drop-down-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'title',
    },
    desc: {
      type: String,
      default: 'desc',
    },
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      description: this.desc,
    };
  },
  computed: {
    activeDataset() {
      return this.$store.getters.activeDataset;
    },
    activeLigand() {
      return this.$store.getters.activeLigand;
    },
    activeReceptor() {
      return this.$store.getters.activeReceptor;
    },
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    away() {
      this.active = false;
    },
    updateDesc(value) {
      this.description = value;
      this.toggle();
    },
  },
};
</script>
