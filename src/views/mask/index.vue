<template>
  <div class="layout__page">
    <div class="layout__header">
      <van-nav-bar
        title="选择比赛道具"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="bottom-button--submit" id="fixed-bottom">
      <van-button type="primary" size="large" @click="goToApply">
        前去申请
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavBar, Button } from 'vant'

Vue.use(NavBar).use(Button)

@Component
export default class Masks extends Vue {
  private onClickLeft() {
    this.$router.go(-1)
  }

  private goToApply() {
    this.$router.push({ name: 'form' })
  }
}
</script>

<style lang="scss" scoped></style>
