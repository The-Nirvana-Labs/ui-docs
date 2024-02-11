<template>
  <DemonstrationsList :demonstrations="demonstrations" />
</template>

<script>
export default {
  name: "DemonstrationComposer",
  props: {
    demonstrations: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formattedDemonstrations() {
      return this.demonstrations.map((demo) => ({
        ...demo,
        // Perform necessary formatting
        previewCode: JSON.stringify(demo.previewCode),
      }));
    },
  },
};
</script>
