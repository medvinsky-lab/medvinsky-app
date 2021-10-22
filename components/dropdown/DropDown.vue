<template>
    <div>
        <p class="mb-1 text-sm font-bold">{{ title }}</p>
        <button class="bg-white w-full text-left p-1.5 flex justify-between">
            <slot></slot>
            <i class="gg-chevron-down"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'title',
        },
    },
}
</script>
