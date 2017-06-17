<template>
  <div class="row">
    <div class="col">
      <input type="checkbox" v-model="checks[rowNum]">
    </div>
    <div class="col" v-for="(col, index) in rowData">
      <input class="input" type="text" v-model.lazy="rowData[index]">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'row',
  props: ['rowData', 'rowNum'],
  computed: mapState([
    'checks'
  ])
}
</script>

<style scoped>
.col {
  position: relative;
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.input {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  border: none;
  text-align: center;
}
</style>
