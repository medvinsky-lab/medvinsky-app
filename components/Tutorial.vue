<template>
  <main-card class="flex flex-col justify-between">
    <div class="mb-6">
      <h1>Tutorial</h1>
    </div>
    <ol class="list-decimal list-inside">
      <li>
        Select dataset using the <span class="font-bold">dataset</span> dropdown
        menu
      </li>
      <li>
        Select ligand population using the
        <span class="font-bold">ligand</span> dropdown menu
      </li>
      <li>
        Select receptor population using the
        <span class="font-bold">receptor</span> dropdown menu
      </li>
      <li>
        Toggle between the heatmap and interaction plots using the buttons
      </li>
      <li>
        Use the heatmap to view overall interaction strengh between populations
      </li>
      <li>
        The interaction plot shows the top
        <span class="text-green-500 font-bold">15</span> interactions between
        selected populations
      </li>
    </ol>
  </main-card>
</template>
