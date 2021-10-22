<template>
    <div class="z-10">
        <p class="mb-1 text-sm font-bold">{{ label }}</p>
        <button
            class="bg-white w-full text-left p-2 flex justify-between rounded"
            @click="toggle"
        >
            <slot></slot>
            <i v-if="active" class="gg-chevron-up"></i>
            <i v-else class="gg-chevron-down"></i>
        </button>
        <drop-down-content :active="active">
            <drop-down-item></drop-down-item>
            <drop-down-item></drop-down-item>
            <drop-down-item></drop-down-item>
        </drop-down-content>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'title',
        },
    },
    data() {
        return { active: false }
    },
    methods: {
        toggle() {
            this.active = !this.active
        },
    },
}
</script>
