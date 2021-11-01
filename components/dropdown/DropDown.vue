<template>
    <div class="z-50">
        <p class="text-sm font-bold mb-1">{{ label }}</p>
        <div @mouseleave="close">
            <button
                class="bg-white p-2 w-full text-left rounded"
                @click="toggle"
            >
                <div class="w-full flex justify-between">
                    <p class="truncate">{{ getDescription() }}</p>
                    <i v-if="!active" class="gg-chevron-down"></i>
                    <i v-if="active" class="gg-chevron-up"></i>
                </div>
            </button>
            <div
                v-if="active"
                class="bg-white w-full rounded mt-1 ring-2 ring-gray-200"
            >
                <drop-down-item
                    v-for="item in items"
                    :key="item.id"
                    :label="item.label"
                    @item-click="dispatch"
                ></drop-down-item>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Label',
        },
        text: {
            type: String,
            default: 'Description',
        },
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
        close() {
            this.active = false;
        },
        dispatch(value) {
            const label = this.label.toLowerCase();
            if (label === 'dataset') {
                this.$store.dispatch('setDataset', value);
                this.$store.dispatch('setLigand', null);
                this.$store.dispatch('setReceptor', null);
            }
            if (label === 'ligand') {
                this.$store.dispatch('setLigand', value);
            }
            if (label === 'receptor') {
                this.$store.dispatch('setReceptor', value);
            }
            this.close();
        },
        getDescription() {
            const label = this.label.toLowerCase();
            if (label === 'dataset') {
                const activeDataset = this.$store.getters.activeDataset;
                return activeDataset;
            }
            if (label === 'ligand') {
                const activeLigand = this.$store.getters.activeLigand;
                if (activeLigand === null) {
                    return this.text;
                } else {
                    return activeLigand;
                }
            }
            if (label === 'receptor') {
                const activeReceptor = this.$store.getters.activeReceptor;
                if (activeReceptor === null) {
                    return this.text;
                } else {
                    return activeReceptor;
                }
            }
        },
    },
};
</script>
