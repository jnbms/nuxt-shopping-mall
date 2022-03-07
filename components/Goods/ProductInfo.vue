<template>
  <div class="container">
      <div  class="column width-50">
        <img v-if="product" width="100%" :src="`http://localhost:3001/images/clothes/${product.sort}/${product.name}.jpg`"/>
      </div>
      <div class="column width-50 info-box">
        <div v-if="product" class="padding">
            <strong>Product Info</strong>
            <div>브랜드명 : {{product.brand}}</div>
            <div>상품명 : {{product.name}}</div>
            <div>조회수 : {{product.viewCount}}</div>
            <div>누적판매 : {{product.salesRate}}</div>
            <div>좋아요 : {{product.likeCount}}</div>
            <div>상품 설명 : {{product.description}}</div>
            <div>상품 가격 : {{product.price}} 원</div>
            <div>19 ~ 28세, <span style="color:hotpink; font-weight: bold;">여성</span>에게 인기 많은 상품</div>
            <hr width="100%"/>
            <strong>Delivery Info 배송정보</strong>
            <div>배송 방법 국내 배송 / 무신사 직배송</div>
            <div>출고 기간 도움말 보기 평균 1.0일 / 주말, 공휴일 제외</div>

            <Button class="like-button" @click.native="asd">
              <!-- <Icon icon="il:heart" /> -->
              <Icon icon="akar-icons:heart" />
              좋아요
            </Button>
            <Button class="add-to-cart" @click.native="addToCart">장바구니에 담기</Button>
            <!-- to listen in children component, you need to use "navtive" -->
            <Button class="order" @click.native="addToCart">주문하기</Button>
        </div>
      </div>
      <!-- <div>id is {{id}}</div> -->
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { mapState, mapMutations } from 'vuex';
export default {
    props: ["product"],
    components: { Icon },
    // store를 이용할 경우, 초기 렌더링에 있던 값이 먼저 렌더링되서 깜빡이는 문제가 발생한다.
    // computed: mapState({
    //   product : state => state.product.product
    // }),
    methods: {
    ...mapMutations({'addItem': 'acount/addItem', 'setProduct': 'product/setProduct'}),
    addToCart() {
      alert('장바구니에 담겼습니다.')
      this.addItem(this.product)
    }
  }
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
  Button{
    /* border: 1px solid lightgray; */
    margin-block: 0.3em;
    height: 3em;
    /* width: 50%; */
    &.order{
      background-color: rebeccapurple;
      color: white;
    }
    &.add-to-cart{
      border: 1px solid rebeccapurple;
      color: rebeccapurple;
    }
  }
  .like-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4em;
    background-color: white;
    color: rebeccapurple;
    border: 1px solid;
  }
</style>