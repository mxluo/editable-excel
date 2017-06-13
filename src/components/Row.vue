<template>
  <div class="row">
    <div class="col">
      <input type="checkbox" v-if="rowNum == 0" @click="checkAll" v-model="checks[0]">
      <input type="checkbox" v-else v-model="checks[rowNum]">
    </div>
    <div class="col" v-for="(col, index) in rowData">
      <span @click="showInp(rowNum+'-'+index)">{{col}}</span>
      <input type="text" v-if="rowNum != 0" v-model="rowData[index]" v-show="isCurInp(rowNum+'-'+index)" v-focus="isCurInp(rowNum+'-'+index)" @blur="showInp('')">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'row',
  props: ['rowData', 'rowNum'],
  computed: mapGetters([
    'checks',
    'curInput'
  ]),
  methods: {
    ...mapActions([
      'checkAll',
      'showInp'
    ]),
    isCurInp: function(inp) {
      return inp == this.curInput
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
}
.row:first-child {
  font-weight: bold;
  background-color: #eee;
}
.col {
  position: relative;
  flex: 1;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 3px 5px;
}
.col span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.col input[type="text"] {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  border: none;
  text-align: center;
}
</style>
