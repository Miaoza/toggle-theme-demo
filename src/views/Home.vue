<template>
  <div class="home">
    <header>
      <div
        :class="['theme-button', n === theme && '.active']"
        v-for="n in 3"
        :key="n"
        @click="toggleTheme(n)"
      >
        主题{{ n }}
      </div>
    </header>

    <section class="main">
      <div class="back-img">
        <div v-for="item in 5" :key="item" class="item">
          <span class="label">标题{{ item }}：</span>
          <div class="value">
            背景图片：文案文案文案文案文案文案文案文案文案文案文案
          </div>
        </div>
      </div>
      <div class="back-color">
        <div v-for="item in 5" :key="item" class="item">
          <span class="label">标题{{ item }}：</span>
          <div class="value">
            背景颜色：文案文案文案文案文案文案文案文案文案文案文案
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  computed: {
    theme() {
      return this.$store.state.theme || 1;
    },
  },
  methods: {
    // 切换主题
    toggleTheme(n) {
      this.$store.dispatch("toggleTheme", n);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  header {
    background: $header-back-color;
    height: 48px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;

    .theme-button {
      width: 80px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border: 1px solid $primary;
      color: $primary;
      border-radius: 3px;
      cursor: pointer;
      margin-right: 8px;
      &:hover {
        border-color: $primary-active;
      }
      &.active {
        border-color: $primary-active;
        color: $primary-active;
      }
    }
  }

  .main {
    padding: 20px;
    .back-img {
      width: 300px;
      height: 600px;
      background: var(--back-img);
      background-size: 100% 100%;
    }

    .back-color {
      background: var(--back-color);
      margin-top: 20px;
    }
    .item {
      &:first-child {
        border-top: 1px solid $border-color;
      }
      border-bottom: 1px solid $border-color;
      display: flex;
      .label {
        display: inline-block;
        color: $label-color;
        width: 80px;
      }
      .value {
        color: $text-color;
        flex: 1;
        text-align: left;
      }
    }
  }
}
</style>