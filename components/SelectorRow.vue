<template>
    <div class="grid grid-cols-3 gap-2 mb-2 h-16">
        <drop-down label="Dataset" description="Select dataset">
            <drop-down-item type="dataset" value="cs13"
                >LCM-Seq CS13</drop-down-item
            >
            <drop-down-item type="dataset" value="cs14"
                >LCM-Seq CS14</drop-down-item
            >
            <drop-down-item type="dataset" value="cs15"
                >LCM-Seq CS15</drop-down-item
            >
            <drop-down-item type="dataset" value="umap"
                >UMAP CS13-CS15</drop-down-item
            >
        </drop-down>
        <drop-down label="Ligand" description="Select ligand population">
            <drop-down-item type="ligand" value="do"
                >Dorsal outer</drop-down-item
            >
            <drop-down-item type="ligand" value="di"
                >Dorsal inner</drop-down-item
            >
            <drop-down-item type="ligand" value="vo"
                >Ventral outer</drop-down-item
            >
            <drop-down-item type="ligand" value="vi"
                >Ventral inner</drop-down-item
            >
            <drop-down-item type="ligand" value="geo"
                >Gonadal epithelium outer</drop-down-item
            >
            <drop-down-item type="ligand" value="gei"
                >Gonadal epithelium inner</drop-down-item
            >
        </drop-down>
        <drop-down label="Receptor" description="Select receptor population">
            <drop-down-item type="receptor" value="do"
                >Dorsal outer</drop-down-item
            >
            <drop-down-item type="receptor" value="di"
                >Dorsal inner</drop-down-item
            >
            <drop-down-item type="receptor" value="vo"
                >Ventral outer</drop-down-item
            >
            <drop-down-item type="receptor" value="vi"
                >Ventral inner</drop-down-item
            >
            <drop-down-item type="receptor" value="geo"
                >Gonadal epithelium outer</drop-down-item
            >
            <drop-down-item type="receptor" value="gei"
                >Gonadal epithelium inner</drop-down-item
            >
        </drop-down>
    </div>
</template>
