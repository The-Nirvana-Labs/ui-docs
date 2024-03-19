<script setup lang="ts">
defineProps<{
  title?: string,
}>()
</script>

<template>
  <div class="flex-col w-full justify-center my-6 border-2 p-4 rounded border-zinc-900 rounded-xl">
    <div class="text-lg font-bold my-3">{{ title }}</div>
    <div class="my-2">
       <slot name="info"></slot>
    </div>
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" :name="title" role="tab" class="tab" aria-label="Preview" checked />
      <div role="tabpanel" class="tab-content h-auto pt-3 overflow-x-auto">
        <slot name="output" />
      </div>

      <input type="radio" :name="title" role="tab" class="tab" aria-label="Code" />
      <div role="tabpanel" class="tab-content pt-2 overflow-x-auto overflow-y-auto h-auto max-h-72">
        <pre lang="html">
          <slot name="code" />
        </pre>
      </div>
    </div>
  </div>
</template>