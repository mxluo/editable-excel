<template>
  <div class="row">
    <div class="col" v-if="isActiveRow">
      <input type="checkbox" v-if="rowNum == 0" @click="checkAll" v-model="checks[0]">
      <input type="checkbox" v-else v-model="checks[rowNum]">
    </div>
    <div class="col" v-for="(col, index) in rowData" v-if="isActiveRow">
      <span class="text" @click="showInput([rowNum, index])">{{col}}</span>
      <input class="input" type="text" v-if="rowNum != 0" v-model="rowData[index]" v-show="isActiveInput([rowNum, index])" v-focus="isActiveInput([rowNum, index])" @blur="showInput([0, 0])">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'row',
  props: ['rowData', 'rowNum', 'isActiveRow'],
  computed: mapState([
    'checks',
    'activeInputPosition'
  ]),
  methods: {
    ...mapMutations([
      'checkAll',
      'showInput'
    ]),
    isActiveInput: function(inputPosition) {
      return inputPosition[0] == this.activeInputPosition[0] && inputPosition[1] == this.activeInputPosition[1]
    }
  },
  directives: {
    focus: {
        update: function (el, {value}) {
          if (value) {
              el.focus();
          }
        }
    }
  },
}
</script>

<style scoped>
.row {
  display: flex;
  height: 30px;
  line-height: 30px;
}
.row:first-child {
  font-weight: bold;
  background-color: #eee;
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
.text {
  display: inline-block;
  width: 100%;
  height: 100%;
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
