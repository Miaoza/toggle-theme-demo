<template>
  <div id="app" :style="theme">
    <router-view />
  </div>
</template>

<script>
import { initTheme } from "./themes";
export default {
  computed: {
    theme() {
      const theme = this.$store.state.theme || 1;
      return initTheme(theme);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: var(--primary);
}
</style>
