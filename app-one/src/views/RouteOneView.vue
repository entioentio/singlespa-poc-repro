<template>
  <div class="about">
    <h1>This is route one</h1>
    <input v-model="stringValue" />
  </div>
</template>

<script lang="ts">
import useStore from "@/store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouteOneView",
  setup() {
    const { stringValue } = storeToRefs(useStore());

    return {
      stringValue,
    };
  },
});
</script>
