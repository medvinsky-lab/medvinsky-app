<template>
    <button
        :class="{ 'bg-gray-100': hover }"
        class="w-full text-left"
        @mouseenter="hoverToggle"
        @mouseleave="hoverToggle"
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
    },
};
</script>
