<template>
  <div class="excel">
    <Row :rowData="title" :rowNum="0"></Row>
    <Row v-for="(row, index) in datas" :rowData="row":rowNum="index+1" :key="row.id"></Row>
  </div>
</template>

<script>
import Row from './Row'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'excel',
  components: {
    Row
  },
  computed: mapGetters([
    'title',
    'datas'
  ]),
}
</script>

<style scoped>
.excel {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 170px;
}
</style>
