<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath" />
  </div>  
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  direction: rtl;
  font-family: Arimo, system-ui;
}

*{
  box-sizing: border-box;
}
</style>
