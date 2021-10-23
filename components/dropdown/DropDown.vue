<template>
    <div class="z-10">
        <p class="mb-1 text-sm font-bold">
            {{ label }}
        </p>
        <button
            class="bg-white w-full text-left p-2 flex justify-between rounded"
            @click="toggle"
        >
            {{ description }}
            <i v-if="active" class="gg-chevron-up"></i>
            <i v-else class="gg-chevron-down"></i>
        </button>
        <div
            v-if="active"
            class="bg-white w-full text-left rounded mt-2 ring-2 ring-gray-200"
        >
            <slot></slot>
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
        description: {
            type: String,
            default: 'description',
        },
    },
    data() {
        return { active: false };
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
    },
};
</script>
