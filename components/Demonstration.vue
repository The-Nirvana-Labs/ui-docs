<script setup lang="ts">
defineProps<{
  title?: string,
}>()
</script>

<template>
  <div class="flex-col w-full justify-center my-6 border p-3 rounded border-secondary">
    <div class="text-lg font-bold my-3">{{ title }}</div>
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" :name="title" role="tab" class="tab" aria-label="Preview" checked />
      <div role="tabpanel" class="tab-content p-8">
        <slot name="output" />
      </div>

      <input type="radio" :name="title" role="tab" class="tab" aria-label="Code" />
      <div role="tabpanel" class="tab-content p-2 overflow-x-scroll">
        <pre lang="html">
          <slot name="code" />
        </pre>
      </div>
    </div>
  </div>
</template>