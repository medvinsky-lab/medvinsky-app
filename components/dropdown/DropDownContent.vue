<template>
    <div
        v-if="active"
        class="bg-white w-full text-left rounded mt-1 ring-2 ring-gray-200"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
