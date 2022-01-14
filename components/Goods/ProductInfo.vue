<template>
  <div class="container">
      <div class="column width-50">
        <img :src="image"/>
      </div>
      <div class="column width-50 info-box">
        <div class="padding">
            <strong>Product Info</strong>
            <div>브랜드명 : 해골</div>
            <div>상품명 : {{product}}</div>
            <div>조회수 : 1024회</div>
            <div>누적판매 : 10만개</div>
            <div>좋아요 : 45,000</div>
            <div>상품 설명 : </div>
            <div>상품 가격 : 12800원</div>
            <div>19 ~ 28세, <span style="color:hotpink; font-weight: bold;">여성</span>에게 인기 많은 상품</div>
            <hr width="100%"/>
            <strong>Delivery Info 배송정보</strong>
            <div>배송 방법 국내 배송 / 무신사 직배송</div>
            <div>출고 기간 도움말 보기 평균 1.0일 / 주말, 공휴일 제외</div>
        </div>
      </div>
      <!-- <div>id is {{id}}</div> -->
    </div>
</template>

<script>
export default {
    props: ["image","product"]
}
</script>

<style lang="scss" scoped>
.container{
    /* padding: 1em; */
    display: flex;
    flex-direction: column; 
    @media (min-width: 768px) {
        flex-direction: row;
    }
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 2%;

  }
  .border{
    border: 1px solid red;
  }
  .width-50{
    height: 30em;
    width: 100%;
  }
  .info-box{
    border: 1px solid lightgray;
    /* height: 100%; */
    width: 100%;
    /* position: relative; */
  }
  .padding{
      height: 100%;
      /* width: 90%; */
      margin: 1em;
      /* align-items: center; */
      display: flex;
      flex-direction: column;
      /* border: 1px solid; */
  }
  img{
    border: 1px solid lightgray;
    object-fit: cover;
    height: 100%;
    /* width: 80%; */
    /* background-color: red; */
    /* width: 500px; */
  }
</style>