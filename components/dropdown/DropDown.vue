<template>
    <div class="z-10" @mouseleave="away">
        <p class="mb-1 text-sm font-bold">
            {{ label }}
        </p>
        <button
            class="bg-white w-full text-left p-2 flex justify-between rounded"
            @click="toggle"
        >
            {{ fieldtext() }}
            <i v-if="active" class="gg-chevron-up"></i>
            <i v-else class="gg-chevron-down"></i>
        </button>
        <div
            v-if="active"
            class="bg-white w-full text-left rounded mt-2 ring-2 ring-gray-200"
        >
            <drop-down-item
                v-for="item in items"
                :key="item.id"
                :type="type"
                :value="item.name"
                @item-click="toggle"
                >{{ item.name }}
            </drop-down-item>
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
        return { active: false };
    },
    computed: {
        activateDataset() {
            return this.$store.getters.activeDataset;
        },
        activateLigand() {
            return this.$store.getters.activeLigand;
        },
        activateReceptor() {
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
        fieldtext() {
            if (this.type === 'dataset') {
                return this.activateDataset;
            } else if (this.type === 'ligand') {
                const ligand = this.activateLigand;
                if (ligand === null) {
                    return 'Select ligand population';
                } else {
                    return ligand;
                }
            } else if (this.type === 'receptor') {
                const receptor = this.activateReceptor;
                if (receptor === null) {
                    return 'Select receptor population';
                } else {
                    return receptor;
                }
            }
        },
    },
};
</script>
