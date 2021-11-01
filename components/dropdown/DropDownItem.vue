<template>
    <button
        :class="{ 'bg-gray-100': hover }"
        class="w-full text-left"
        @mouseenter="toggleIn"
        @mouseleave="toggleOut"
        @click="$emit('item-click', label)"
    >
        <p class="p-2">
            {{ label }}
        </p>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'label',
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
            this.$emit('item-enter', this.label);
        },
        toggleOut() {
            this.hover = false;
            this.$emit('item-leave', null);
        },
    },
};
</script>
