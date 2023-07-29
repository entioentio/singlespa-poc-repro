<template>
  <nav class="app">
    <a href="/" @click="navigate">Home</a>
    <a href="/app-one/" @click="navigate">AppOne</a>
    <a href="/app-one/route-one" @click="navigate">AppOne/RouteOne</a>
    <a href="/app-two" @click="navigate">AppTwo</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "MainMenu",
  props: {
    singleSpa: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { singleSpa } = toRefs(props);

    function navigate(e: MouseEvent) {
      if (!e.target) return;

      const target = e.target as HTMLAnchorElement;
      const url = target.getAttribute("href");
      if (!url) return;

      e.preventDefault();

      singleSpa.value.navigateToUrl(url);
      // navigateToUrl(`${window.location.origin}${url}`);
    }

    return {
      navigate,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ffffff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
