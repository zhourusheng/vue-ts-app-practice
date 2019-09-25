<template>
  <div class="layout__page">
    <div class="layout__header">
      {{ num }}
    </div>
    <div class="layout__body">
      <Child />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Child from './Child.vue'

@Component({
  // 引入子组件
  components: {
    Child
  }
})
export default class Demo extends Vue {
  private num: number = 10

  // 生命周期
  public created(): void {
    console.log('created')
  }

  public mounted(): void {
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_mixins.scss';
.layout__body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
}
</style>
