<template>
  <div class="layout__page">
    <div class="layout__header">
      <van-nav-bar
        title="论键十日诫"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavBar, Button } from 'vant'

Vue.use(NavBar).use(Button)

@Component
export default class Form extends Vue {
  private onClickLeft() {
    this.$router.go(-1)
  }

  private goToApply() {
    this.$router.push({ name: 'info-list' })
  }
}
</script>

<style lang="scss" scoped></style>
