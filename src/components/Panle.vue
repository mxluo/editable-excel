<template>
  <div class="panel">
    <div class="panel-body" v-if="show">
      <div class="jsons">
        {{JSON.stringify(this.$store.state.datas)}}
      </div>
      <div class="buttons">
        <button @click="addRow">添加</button>
        <button @click="delRows">删除</button>
        <button @click="refreshData">生成</button>
      </div>
    </div>
    <div class="toggle" @click="show = !show">{{show?'收起':'展开'}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'panel',
  data() {
    return {
      show: true
    }
  },
  methods: mapActions([
    'addRow',
    'delRows',
    'refreshData'
  ])
}
</script>

<style scoped>
.panel {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 20px;
}
.panel-body {
  display: flex;
  height: 160px;
  padding: 10px;
  border-top: 1px solid #A3A3A3;
  background-color: #F9F9F9;
  box-sizing: border-box;
  overflow: hidden;
}
.buttons {
  flex: none;
  width: 120px;
  padding-left: 20px;
  box-sizing: border-box;
}
.buttons button {
  display: block;
  width: 60px;
  height: 30px;
  background-color: #F3F3F3;
  border: 1px solid #ccc;
  margin-top: 10px;
  color: #444;
  cursor: pointer;
  outline: none;
}
.jsons {
  flex: auto;
  height: 140px;
  font-size: 0.8em;
  font-style: italic;
  text-align: left;
  overflow: auto;
}
.toggle {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  font-size: 0.8em;
  line-height: 1.5;
  background-color: #ccc;
  cursor: pointer;
}
</style>
