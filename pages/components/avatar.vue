<template>
  <DemonstrationComposer :demonstrations="avatarData" />
</template>

<script>
import AvatarData from "../../data/avatarData.vue";

export default {
  name: "Avatar",
  data() {
    return {
      avatarData: AvatarData.data // Assuming the data is exported under a `data` key
    };
  }
};
</script>
