<template>
  <div class="body">
    <div class="title">
      <img src="@/assets/Group_1081.png" alt="" class="UED_logo">
      <div class="line"></div>
      <div class="UED_left">
        友益典·
      </div>
      <div class="UED_right">
        AI算法分析系统
      </div>
    </div>
    <div class="layout">
      <div class="time_charts">
        <div class="time">
          <div class="upper_case">
            <div class="detail_time">
              <span>时间</span>
              <div class="seconds">{{ nowTime }}</div>
            </div>
            <div class="detail_date">
              <span>日期</span>
              <div class="date">{{ year }}年{{ month }}月{{ day }}日</div>
            </div>
          </div>

          <div class="lower_case">
            <div class="item"></div>
            <div class="gotoQuery">
              <div class="URqueryText">进入UR查询系统</div>
            </div>
          </div>


        </div>
        <div class="charts">
          <div class="charts_title">


            <span>AI交互量</span>
            <div class="top">Top10</div>
            <div class="categories_title">
              <button class="industry_title" :class="{ active_title: activeButton === 'industry' }"
                @click="gotoIndustry">行业
              </button>
              <button class="keyword_title" :class="{ active_title: activeButton === 'keyword' }"
                @click="gotoKeyword">关键词
              </button>
            </div>


          </div>


          <div class="charts_content">
          </div>
        </div>
      </div>


      <div class="trending">
        <div class="trending_header">
          <div class="trending_title">
            AI结果优化(AIRO)行业分析
          </div>
          <div class="trending_search">
            <input class="searchInput" placeholder="搜索行业"></input>
            <button class="searchButton">搜索</button>
          </div>

        </div>
        <div class="trending_content">
          <div class="left_content">
            <div class="active">行业趋势</div>

            <div>关键词趋势</div>


          </div>
          <div class="right_content">
            <div class="card">
              <div class="first_letter">

              </div>
              <div class="industry_info">
                <div class="industry_name">智能制造</div>
                <div class="industry_compare">企业竞争度</div>
                <div class="industry_index">行业指数</div>
                <div class="AIrecognise">AI认知层级</div>
                <div class="degree">优化程度</div>
              </div>

              <button class="queryButton">查询关键词</button>

            </div>
            <div class="card">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
@media (max-width: 500px) {
  .body {
    padding: 0;
  }
}

.body {

  background: url("@/assets/pcbj.png") no-repeat center fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  padding: 0 6%;
  /* 确保容器有足够高度 */
}

.title {
  // top: 48px;
  // left: 124px;
  display: flex;
  padding: 2%;
  padding-left: 1%;
  align-items: center;
  // width: 667px;
  // height: 46px;

  .line {
    width: 0px;
    height: 20px;
    margin: 0 3%;
    ;
    border: 1px solid #888888;

  }

  .UED_left {
    // position: absolute;
    // left: 315px;
    text-align: center;
    // line-height: 46px;
    // width: 128px;
    // height: 46px;
    font-family: Source Han Sans CN, Source Han Sans CN;
    font-weight: bold;
    font-size: 32px;
    color: #333333;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .UED_right {
    // position: absolute;
    // left: 443px;
    // width: 224px;
    // height: 46px;
    // line-height: 46px;
    font-family: Source Han Sans CN, Source Han Sans CN;
    font-weight: bold;
    font-size: 32px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(0deg, #2254F4 0%, #9438FC 100%);
  }

}

.layout {

  background: transparent;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 10px 10px;

  .time_charts {


    background: transparent;
    display: flex;
    margin-bottom: 16px;


    .time {
      width: 18%;
      min-width: 250px;
      height: 377px;
      margin-right: 14px;
      border-radius: 10px 10px 10px 10px;
      display: flex;
      flex-direction: column;



      .upper_case {
        height: 294px;
        background: url("@/assets/Group_1079.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 10px;

        .detail_time {
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            display: block;
            font-size: 1rem;
            margin-bottom: 1.4em;
            font-weight: 300;
            color: #b7a6fc;

          }

          .seconds {
            font-size: 3em;
          }
        }

        .detail_date {
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;

          span {
            display: block;
            font-weight: 300;
            font-size: 1rem;
            margin-bottom: 1.4em;
            color: #b7a6fc;
          }

          .date {
            font-weight: 100;
            font-size: 1.5em;
          }
        }
      }



      .lower_case {
        height: 104px;
        margin-top: -20px;
        border-radius: 10px;
        background: linear-gradient(#decafd 1%, #f4f8fe);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 20px 20px;

        .item {
          height: 30%;
          width: 100%;
        }

        .gotoQuery {
          box-sizing: border-box;
          margin: auto auto;
          background: url("@/assets/Group_1080.png") no-repeat;
          width: 100%;
          height: 80%;

          .URqueryText {
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 1.2em;
            color: #FFFFFF;
            text-align: center;
            line-height: 30px;
            margin-left: 40px;
            cursor: pointer;
          }
        }
      }
    }


  }

  .charts {
    width: 82%;
    height: 377px;
    background-color: #fefefe;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;


    .charts_title {

      flex: 22;
      background: linear-gradient(180deg, #FFCA59 0%, #FFEECA 100%);
      display: flex;
      align-items: center;
      padding-right: 3%;

      span {
        margin-left: 2%;
        margin-right: 0.5%;
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: bold;
        color: #4F3600;
        text-align: left;
        font-style: normal;
        font-size: 1.5em;

      }

      .top {
        position: relative;
        width: 93px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        transform: skew(-15deg);
        font-size: 1.2em;
        color: #fffbf9;
        background: linear-gradient(270deg, #E53200 0%, #FFA930 100%);
        border-radius: 6px 6px 6px 6px;

      }

      .categories_title {
        display: flex;
        margin-left: 7%;
        width: 70%;
        height: 60%;
        align-self: flex-end;
        justify-content: space-around;


        .industry_title {
          border: none;
          display: block;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #FFF2DA;
          text-align: center;
          flex: 1;
          font-weight: 500;
          border-radius: 5px 0px 0px 0px;
          cursor: pointer;

        }



        .keyword_title {
          border: none;
          display: block;
          flex: 1;
          display: flex;
          border-radius: 0px 5px 0px 0px;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-weight: 500;
          background-color: #FFF2DA;

          cursor: pointer;
        }
      }




    }

    .charts_content {
      flex: 78;
      background: #FFFFFF;

    }
  }

  .trending {
    border-radius: 10px;
    height: 2000px;
    background-color: #fff;
    overflow: hidden;

    .trending_header {
      padding: 0 2%;
      height: 60px;
      background: linear-gradient(90deg, rgba(34, 84, 244, 0) 50%, #f4ecfe 100%);

      display: flex;
      justify-content: space-between;
      align-items: center;

      .trending_title {
        font-weight: 500;
        font-family: Source Han Sans CN, Source Han Sans CN;
      }

      .trending_search {
        display: flex;
        align-items: center;
        width: 25%;

        .searchInput {
          border: transparent;
          width: 80%;
          height: 100%;
          margin-right: 10px;
        }

        .searchButton {
          background: linear-gradient(to right, #2852f4 1%, #9438fc);
          ;
          width: 15%;
          border: none;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
        }
      }
    }

    .trending_content {
      display: flex;

      .left_content {
        height: 500px;
        flex: 1;
        background-color: #ffffff;

        .active {
          border-left: solid 2px #4734f7;
          background: radial-gradient(#cebbff, #fefeff);
        }

        div {
          text-align: center;
          line-height: 70px;
          height: 70px;

        }
      }

      .right_content {
        flex: 10;
        background-color: #f7f7f7;
        padding-top: 1%;
        padding-left: 1%;
        min-width: 40px;

        .card {
          width: 98%;
          height: 80px;
          border-radius: 5px;
          background: linear-gradient(to right, #fff 70%, #FFE6BE 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;

          .first_letter {

            margin-left: 10px;
            width: 65px;
            height: 65px;
            background: linear-gradient(to right, #2852f4 1%, #9438fc);

          }

          .industry_info {
            display: flex;
            flex: auto;
            margin-left: 20px;

            .industry_name {
              height: 20%;
              flex: 1;
              background-color: pink;
            }

            .industry_compare {
              height: 20%;
              flex: 1;
              background-color: lightblue;
            }

            .industry_index {
              height: 20%;
              flex: 1;
              background-color: lightgreen;
            }

            .AIrecognise {
              height: 20%;
              flex: 1;
              background-color: lightyellow;
            }

            .degree {
              height: 20%;
              flex: 1;
              background-color: lightgray;
            }


          }
        }
      }
    }
  }

}

.active_title {
  background-color: #ffffff !important;
  /* 高亮背景色 */
  border: 2px solid #2852f4;
  /* 高亮边框 */
  color: #2852f4;
  /* 高亮字体颜色 */
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentTime, getCurrentDate } from '@/utils/getCurrentTime.js'
import * as echarts from 'echarts';

let nowTime = ref('');
nowTime.value = getCurrentTime();
setInterval(() => {
  nowTime.value = getCurrentTime();
}, 1000);

let year = ref(new Date().getFullYear());
let month = ref(new Date().getMonth() + 1);
let day = ref(new Date().getDate());

let myOption = ref({
  xAxis: {
    type: 'category',
    data: ['行业1', '行业3', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2'],
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 100, 90, 40],
      type: 'bar'
    }
  ]
});

let myChart;
const activeButton = ref('industry'); // 新增响应式变量

const gotoKeyword = () => {
  activeButton.value = 'keyword'; // 更新激活按钮
  myOption.value.xAxis.data = ['汉格尔', "行业而"];
  myChart.setOption(myOption.value);
}

const gotoIndustry = () => {
  activeButton.value = 'industry'; // 更新激活按钮
  myOption.value.xAxis.data = ['行业1', '行业3', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2', '行业2'];
  myChart.setOption(myOption.value);
}

onMounted(() => {
  let chartDom = document.querySelector('.charts_content');
  myChart = echarts.init(chartDom, null, {
    renderer: 'svg'
  });
  myChart.setOption(myOption.value);
});
</script>
