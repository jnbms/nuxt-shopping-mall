<template>
  <div class="column">
    <hr width="100%">
    <div class="section">
      <h2 class="title">INFOMATION</h2>
      <i>상품 정보</i>
    </div>
    <div class="infomation">
      <div v-for="(info, key) of infos" :key="key" class="info-table">
        <div class="row-list">
          <h3 class="table-title">{{info.title}}</h3>
            <div v-for="value in 3" :key="value.key">
              <div v-if="product[info.check] == value" class="selected">{{info.list[value - 1]}}</div>
              <div v-else>{{info.list[value - 1]}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ['product'],
  data() {
    return {
      infos: [
        {
          title: "두께",
          check: "thickness",
          list : ["얇음","중간","두꺼움"]
        },
        {
          title: "무게감",
          check: "weight",
          list : ["가벼움","적당함","무거움"]
        },
        {
          title: "신축성",
          check: "flex",
          list : ["낮음","중간","높음"]
        },
        {
          title: "비침",
          check: "through",
          list : ["없음","약간","있음"]
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
    .column{
        margin: 1em;
        width: 100%;
        align-items: center;
        .title{
            font-size: 20;
            font-weight: bold;
        }
        .infomation{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            .info-table{
              /* border: 1px solid; */
              width: 100%;
              /* display: grid; */
              /* place-items: center; */
              /* margin-block: 0.5em; */
              /* align-items: center; */
            .table-title{ 
              margin-block: 0.2em;
              font-size: 18px;
              width: 12em;
            }
            .row-list{
              width: 100%;
              /* border: 1px solid; */
              display: flex;
              flex-direction: row;
              /* gap: 1em; */
              /* justify-content: space-evenly; */
              /* text-align: center; */
              align-items: center;
              justify-content: center;
              /* width: 6em; */
              & div{
                width: 6em;
              }
              
              .selected{
                text-decoration: underline;
              }
            }
            }
        }  
    }
    .section{
      margin-block: 1em;
      text-align: center;
    }
</style>