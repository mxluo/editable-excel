<template>
  <div id="app">
    <Excel></Excel>
    <Panel></Panel>
  </div>
</template>

<script>
import Excel from './components/Excel'
import Panel from './components/Panel'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Excel,
    Panel
  },
  methods: mapMutations([
    'initData',
    'updateActiveRow'
  ]),
  created: function() {
    this.initData(400);
    window.onscroll = function () {
      this.updateActiveRow();
    }.bind(this)
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
