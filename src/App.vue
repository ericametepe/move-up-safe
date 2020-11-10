<template>
  <div id="app">
  <Header/>
  <CustomerTab/>
  <NativeTable/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CustomerTab from './components/CustomerTab.vue'
import NativeTable from "./components/NativeTable";

export default {
  name: 'App',
  components: {
    NativeTable,
    Header,
    CustomerTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
