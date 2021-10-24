<template>
    <button
        :class="{ 'bg-gray-100': hover }"
        class="w-full text-left"
        @mouseenter="hoverToggle"
        @mouseleave="hoverToggle"
        @click="updateState"
    >
        <p class="p-2">
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    emits: ['item-click'],
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        hoverToggle() {
            this.hover = !this.hover;
        },
        updateState() {
            if (this.type === 'dataset') {
                this.$store.dispatch('setDataset', this.value);
            } else if (this.type === 'ligand') {
                this.$store.dispatch('setLigand', this.value);
            } else if (this.type === 'receptor') {
                this.$store.dispatch('setReceptor', this.value);
            }
            this.$emit('item-click');
        },
    },
};
</script>
