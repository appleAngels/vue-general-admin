<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="isFooterShow" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    isFooterShow() {
      return this.$route.meta.footer;
    }
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
