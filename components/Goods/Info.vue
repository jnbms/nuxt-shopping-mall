<template>
  <div class="column">
    <hr width="100%">
    <h2 class="title">INFOMATION</h2>
    <div>상품 정보</div>
    <div class="infomation">
      <img src="/fashion-model04.jpg"/>
      <h3>항공 점퍼</h3>
      <div> 이런 날씨에 딱 입기 좋은 옷</div>
    </div>
  </div>
</template>

<script>
export default {

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
        }
    }
</style>