<template>
  <div class="excel">
    <Row :rowData="title" :rowNum="0" :isActiveRow="true"></Row>
    <!-- <div class="placeholder" v-bind:style="{ height: topPlaceholderHeight + 'px' }"></div> -->
    <Row v-for="(row, index) in data" :isActiveRow="(index >=activeRowLow && index < activeRowHigh)" :rowData="row":rowNum="index+1" :key="row.id"></Row>
    <!-- <div class="placeholder" v-bind:style="{ height: bottomPlaceholderHeight + 'px' }"></div> -->
  </div>
</template>

<script>
import Row from './Row'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'excel',
  components: {
    Row
  },
  computed: {
    ...mapState([
      'title',
      'data',
      'activeRowLow',
      'activeRowHigh'
    ]),
    // ...mapGetters([
    //   'topPlaceholderHeight',
    //   'bottomPlaceholderHeight'
    // ])
  },
}
</script>

<style scoped>
.excel {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 170px;
}
</style>
