<template>
  <div class="home">
    <CellGroup>
      <Field label="阳历日期" v-model="dateValue" placeholder="请选择日期" readonly @click="checkDateFun"></Field>
      <Field label="农历日期" v-model="lDateValue" placeholder="请选择日期" readonly @click="checkDateFun"></Field>
      <Field label="天干地支" v-model="GanZhi" placeholder="请选择日期" readonly @click="checkDateFun"></Field>
      <Field label="生肖" v-model="animal" placeholder="请选择日期" readonly @click="checkDateFun"></Field>
    </CellGroup>
    <Popup position="right" v-model="show" :lock-scroll="false">
      <LunarDate v-on:checkDateObj="checkDate" v-on:show="showStatus"></LunarDate>
    </Popup>
  </div>
</template>

<script>
import LunarDate from '@/components/LunarDate/Index'
import { Popup, Field, CellGroup } from 'vant'
export default {
  name: 'home',
  components: {
    LunarDate,
    Popup,
    Field,
    CellGroup

  },
  data () {
    return {
      dateValue: '',
      show: false,
      indexData: '',
      lDateValue: '',
      GanZhi: '',
      animal: ''
    }
  },
  created () {
  },
  methods: {
    checkDate (e) {
      console.log(e)
      this.dateValue = e.sYear + '-' + e.sMonth + '-' + e.sDay
      this.lDateValue = e.lCnYear + e.lCnMonth + e.lCnDay
      this.GanZhi = e.cYear
      this.animal = e.animal
    },
    showStatus (e) {
      this.show = e
    },
    checkDateFun () {
      this.show = true
    }
  }
}
</script>
<style lang="less" scoped>
.swipe {
  height: 200px;
  .swipe_item {
    /*background: #39a9ed;*/
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
