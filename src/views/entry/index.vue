<template>
  <div class="layout__page">
    <div class="layout__header">
      <van-nav-bar title="华山论键" />
    </div>
    <div class="layout__body">
      <div>
        <van-button
          type="primary"
          class="entry__button--apply"
          size="large"
          @click="goToMask"
        >
          报名参加
        </van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavBar, Button } from 'vant'

Vue.use(NavBar).use(Button)

@Component
export default class Entry extends Vue {
  private meetingInfo = {
    id: '0d93cfe7-07f2-4453-a528-fd085fd15460',
    title: '华山论键大会',
    location: '光明顶'
  }
  private goToMask() {
    this.$router.push({ name: 'mask' })
  }
}
</script>

<style lang="scss" scoped></style>
