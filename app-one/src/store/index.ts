import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("store", () => {
  const stringValue = ref("");

  return {
    stringValue,
  };
});
