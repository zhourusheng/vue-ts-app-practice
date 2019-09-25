<template>
  <div class="child">
    {{ childName }}{{ num }}
    <van-button type="default" @click="handleAdd">加</van-button>
    <van-button type="danger" @click="handleRedure">减</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Button } from 'vant'

Vue.use(Button)

@Component
export default class Child extends Vue {
  private childName: string = '这里是子组件'
  private num: number = 10

  private handleAdd() {
    this.num++
  }

  private handleRedure() {
    this.num--
  }
}
</script>

<style lang="scss" scoped></style>
