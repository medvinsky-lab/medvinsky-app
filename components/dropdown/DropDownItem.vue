<template>
    <div
        :class="{ 'bg-gray-100': hover }"
        @mouseenter="hoverToggle"
        @mouseleave="hoverToggle"
    >
        <p class="p-2">This is a dropdown item</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
        }
    },
    methods: {
        hoverToggle() {
            this.hover = !this.hover
        },
    },
}
</script>
