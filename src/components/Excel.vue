<template>
  <div class="excel">
    <div class="row title">
      <div class="col">
        <input type="checkbox" @click="checkAll" v-model="checks[0]">
      </div>
      <div class="col" v-for="col in title">
        <span class="text">{{col}}</span>
      </div>
    </div>
    <div v-bind:style="{ marginTop: marginTop + 'px',  marginBottom: marginBottom + 'px'}">
      <Row v-for="(row, index) in activeData" :rowData="row":rowNum="activeRowLow+index+1" :key="row.id"></Row>
    </div>
  </div>
</template>

<script>
import Row from './Row'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'excel',
  components: {
    Row
  },
  computed: {
    ...mapState([
      'title',
      'checks',
      'activeRowLow'
    ]),
    ...mapGetters([
      'activeData',
      'marginTop',
      'marginBottom'
    ])
  },
  methods: mapMutations([
    'checkAll'
  ])
}
</script>

<style scoped>
.excel {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 170px;
}
.row {
  display: flex;
  height: 30px;
  line-height: 30px;
}
.col {
  position: relative;
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.title {
  font-weight: bold;
  background-color: #eee;
}
</style>
