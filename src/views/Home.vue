<template>
  <div class="home">
    <CellGroup>
      <Field label="出发日期" v-model="dateValue" placeholder="请选择日期" readonly @click="checkDateFun"></Field>
    </CellGroup>
    <Popup position="right" v-model="show" :lock-scroll="false">
      <LunarDate v-on:checkDate="checkDate" v-on:show="showStatus"></LunarDate>
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
      indexData: ''

    }
  },
  created () {
  },
  methods: {
    checkDate (e) {
      this.dateValue = e
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
