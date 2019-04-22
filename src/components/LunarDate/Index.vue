<template>
    <div>
        <div class="week weekon">
            <div class="w">日</div>
            <div class="w">一</div>
            <div class="w">二</div>
            <div class="w">三</div>
            <div class="w">四</div>
            <div class="w">五</div>
            <div class="w">六</div>
        </div>
        <div class="dateContent">

            <div class='nofloat nofloaton'></div>
            <div class="day" v-for="(items, index) in dateroot"  :key="index">
                <div class='month'>{{items.name}}</div>
                <div v-for="(day, index) in items.root" :key="index" class='daylist' :class="day.nstyle" :data-month="items.month" :data-day="day.d"  @click.stop='onPick' >
                    <div style="pointer-events: none">{{day.d}}</div>
                    <div style="pointer-events: none" v-if="day.d != ''" class='nl' :class="[day.ntips,day.nstyle]">{{day.n}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GetDateDiff, getDate } from '@/utils/common'
import { calendar, GetMonthChinese, cDay, getYearChinese } from '@/utils/date'

export default {
  name: 'Index',
  data () {
    return {
      dateroot: [],
      scrollTop: 0,
      dtype: 'home',
      checkDate: ''
    }
  },
  created () {
    let req = this.$route.path
    /* if (req.dtype === undefined) { req.dtype = 'home' } else {
      this.dtype = 'home'
    } */
    let monthArray = this.getDateRoot(5, req.d)
    this.dateroot = monthArray
    console.log(monthArray[0].root)
  },
  methods: {
    onPick (e) {
      let { day, month } = e.target.dataset
      if (day < 10) { day = '0' + day }
      let date = month + '-' + day
      let today = getDate()
      this.checkDate = date
      // 向父组件传值
      this.$emit('checkDate', date)
      this.$emit('show', false)
      let diffday = GetDateDiff(date, today)
      if (diffday < 0) { return }
      console.log(today, this.checkDate, diffday)
    },
    getDateRoot (num, seldate) {
      var monthArray = []
      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth()
      var day = today.getDate()

      var todayString = year + '-' + (month + 1) + '-' + day

      if (seldate === undefined) { seldate = todayString }

      // first day
      var mFirstDay = new Date(year, month, 1)
      var mfdM = mFirstDay.getMonth()
      console.log(mfdM)
      for (var m = 0; m < num; m++) {
        // The first day of the month
        var currentDate = new Date(year, (mfdM + m), 1)
        console.log(currentDate.getFullYear())
        var cyear = currentDate.getFullYear()
        var cmonth = currentDate.getMonth()
        var mfdWeek = currentDate.getDay()
        var tMonth = cmonth + 1
        if (tMonth < 10) {
          tMonth = '0' + tMonth
        }
        // return
        var nldateroot = calendar(this, cyear, cmonth)

        var tMonthName = cyear + ' 年 ' + tMonth + ' 月'
        // The last day of the month
        var mLastDay = new Date(year, tMonth, 0)
        var lastday = mLastDay.getDate()
        var dayArray = []
        var daynum = 0
        for (var i = 1; i <= 42; i++) {
          if (i <= mfdWeek) {
            dayArray.push({ d: '', n: '', nstyle: '', ntips: '' })
            continue
          }
          daynum++
          var daystring = daynum < 10 ? '0' + daynum : daynum
          if (daynum <= lastday) {
            var nstyle = ''
            var ntips = ''
            var now = cyear + '-' + tMonth + '-' + daystring
            var diff = GetDateDiff(now, todayString)

            if (diff < 0) {
              nstyle = 'lt'
            } else if (diff == 0) {
              nstyle = 'today'
            } else {
              nstyle = 'gt'
            }
            var seldatediff = GetDateDiff(seldate, now)
            if (seldatediff == 0) {
              nstyle += ' date'
            }

            var n = ''
            var model = nldateroot[(daynum - 1)]

            if (model.lunarFestival != '') {
              n = model.lunarFestival// 农历节日
              ntips = ' dtips'
            } else if (model.solarFestival != '') {
              n = model.solarFestival// 国历节日
              ntips = ' gljr'
            } else if (model.solarTerms != '') {
              n = model.solarTerms// 节气
              ntips = ' jq'
            } else {
              if (model.lDay == 1) {
                n = GetMonthChinese(model.lMonth)
                ntips = ' mtips'
              } else {
                n = cDay(model.lDay)
              }
            }
            const {cYear, cMonth, lDay, lMonth, lYear, sDay, sMonth, sYear} = model
            let lCnDay = cDay(model.lDay)

            let lCnMonth = GetMonthChinese(model.lMonth)
            let lCnYear = getYearChinese(model.lYear)
            dayArray.push({ d: daynum, n: n, nstyle: nstyle, ntips: ntips, cDay: model.cDay, cYear, cMonth,lDay, lMonth, lYear,lCnDay, lCnMonth, lCnYear,sDay, sMonth, sYear })
          } else {
            dayArray.push({ d: '', n: '', nstyle: '', ntips: '' })
          }
        }
        var monthJson = { name: tMonthName, month: cyear + '-' + tMonth, root: dayArray }
        monthArray.push(monthJson)

      }
      return monthArray
    }
  }
}
</script>

<style lang="less" scoped>
    .nofloat{height: 1px; clear:both;width: 100%;}
    .dateContent{width: 100%;overflow-x:hidden;}
    .week{float: left;width: 100%; background:#f7f7f7;height: 45px; line-height: 45px;}
    .week .w{width: 14.28%;float:left; text-align: center;}
    .day{clear: both;overflow-x: hidden; width: 100%;}
    .day .month{width: 100%;text-align: center;padding: 20px 0px; font-size:1em;}
    .day .daylist{width: 14.28%;text-align: center; display:inline-block;padding: 10px 0px; color:gray;font-size: 14px}
    .weekon{position:fixed;top:0px;left: 0px; z-index: 99; }
    .nofloaton{margin-top: 44px;}
    .onday{ background:#f7f7f7;color:#000;}
    .day .lt{color:#f2f2f2;}
    .day .today{background:#efefef; }
    .day .gt{color:gray; }
    .day .nl{font-size: 0.6em; color:gray;}
    .day .dtips{color:#ff6600;}
    .day .gljr{color:#e02d2d;}
    .day .jq{color: #4CAF50;}
    .day .mtips{color: blue;}
    .day .date{color: #fff; background: #27B2DB;}
</style>
