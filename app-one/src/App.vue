<template>
  <div class="border blue">
    <h1>app one</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/route-one">About</router-link> |
      <a href="/app-two" @click="navigate">Naviagte to app two</a>
    </nav>
  </div>
  <div class="border red">
    <router-view />
  </div>
</template>

<script lang="ts">
import { navigateToUrl } from "single-spa";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    function navigate(e: MouseEvent) {
      if (!e.target) return;

      const target = e.target as HTMLAnchorElement;
      const url = target.getAttribute("href");
      if (!url) return;

      e.preventDefault();

      const targetUrl = `${window.location.origin}${url}`;
      console.info(targetUrl);
      navigateToUrl(targetUrl);
    }

    return {
      navigate,
    };
  },
});
</script>

<style lang="scss" scoped>
.border {
  border: 3px solid;
  padding: 10px;
}

.red {
  border-color: red;
}

.blue {
  border-color: blue;
}
</style>
