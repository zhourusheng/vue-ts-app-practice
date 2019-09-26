<template>
  <div class="layout__page">
    <div class="layout__header">
      <van-nav-bar
        title="江湖英雄帖"
        left-text="返回"
        left-arrow
        @click-left="goBack"
      />
    </div>
    <div class="layout__body">
      <van-cell-group>
        <van-field
          v-model="formData.name"
          clearable
          label="尊姓大名"
          placeholder="请输入大名"
        />
        <van-field
          v-model="formData.skill"
          clearable
          label="会啥绝招"
          placeholder="请输入绝招"
        />
        <van-cell
          title="何方门派"
          is-link
          :value="textData.sectStr"
          @click="goToSelect('sect')"
        />
        <van-cell
          title="几时入坑"
          is-link
          :value="textData.pitDateStr"
          @click="goToSelect('pitDate')"
        />
      </van-cell-group>
    </div>
    <van-popup
      v-model="showDatePicker"
      @click-overlay="goBack"
      position="bottom"
    >
      <van-datetime-picker
        v-model="formData.pitDate"
        type="date"
        title="入坑时间"
        :max-date="new Date()"
        :formatter="formatterDate"
        @cancel="goBack"
        @confirm="onSelectPitDate"
      />
    </van-popup>
    <van-popup
      v-model="showSectsPicker"
      @click-overlay="goBack"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="sects"
        @cancle="goBack"
        @confirm="onSelectSect"
      />
    </van-popup>
    <div class="bottom-button--submit" id="fixed-bottom">
      <van-button type="primary" size="large" @click="onSubmit">
        提交
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import {
  NavBar,
  Button,
  Cell,
  Field,
  CellGroup,
  Popup,
  Picker,
  Toast,
  DatetimePicker
} from 'vant'
import moment from 'moment'

import ValidateUtils from '@/assets/utils/validate'
import { ValidateError } from '@/types'

Vue.use(NavBar)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(CellGroup)
  .use(Popup)
  .use(Picker)
  .use(Toast)
  .use(DatetimePicker)

@Component
export default class Form extends Vue {
  private validator!: ValidateUtils

  private showSectsPicker = false

  private showDatePicker = false

  private sects = ['武当派', '少林派', '峨嵋派', '华山派', '丐帮']

  private formData = {
    name: '',
    skill: '',
    sect: '',
    pitDate: ''
  }

  private textData = {
    sectStr: '',
    pitDateStr: ''
  }

  private rules = {
    name: [
      { required: true, message: '请输入大名' },
      { max: 10, message: '大名不能超过10个字哦~' }
    ],
    skill: [
      { required: true, message: '请输入绝招' },
      { max: 10, message: '绝招不能超过10个字哦~' }
    ],
    sect: { required: true, message: '请选择门派' },
    pitDate: { required: true, message: '请选择入坑时间' }
  }

  private formatterDate(type: string, value: string) {
    switch (type) {
      case 'year':
        return `${value}年`
      case 'month':
        return `${value}月`
      case 'day':
        return `${value}日`
      default:
        return value
    }
  }

  private onSelectPitDate(pitDate: Date) {
    const time = moment(pitDate).format('YYYY年MM月DD日')
    this.textData.pitDateStr = time
    this.formData.pitDate = time
    this.goBack()
  }

  private onSelectSect(sect: string) {
    this.formData.sect = sect
    this.textData.sectStr = sect
    this.goBack()
  }

  private goToSelect(popupName: string) {
    this.$router.push({ name: 'form', query: { [popupName]: 'true' } })
  }

  private goBack() {
    this.$router.go(-1)
  }

  private onSubmit() {
    this.validator
      .validate()
      .then(() => {
        this.$router.push({ name: 'info-list' })
      })
      .catch((errors: ValidateError[]) => {
        this.$toast(errors[0].message)
      })
  }

  @Watch('$route.query')
  private handlePopup(val: AnyObject) {
    switch (true) {
      case val.sect && val.sect === 'true':
        this.showSectsPicker = true
        break
      case val.pitDate && val.pitDate === 'true':
        this.showDatePicker = true
        break
      default:
        this.showSectsPicker = false
        this.showDatePicker = false
        break
    }
  }

  private created() {
    this.validator = new ValidateUtils({
      rules: this.rules,
      data: this.formData
    })
  }
}
</script>

<style lang="scss" scoped></style>
