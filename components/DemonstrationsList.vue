<template>
  <div>
    <Demonstration
      v-for="(demo, index) in demonstrations"
      :key="index"
      :title="demo.title"
    >
      <template #output>
        <Center>
          <div v-html="demo.previewCode"></div>
        </Center>
      </template>
      <template #code>
        {{ demo.previewCode }}
      </template>
    </Demonstration>
  </div>
</template>

<script>
export default {
  name: "DemonstrationsList",
  props: {
    demonstrations: {
      type: Array,
      required: true,
    },
  },
};
</script>
