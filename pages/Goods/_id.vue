<template>
  <div class="body">
    <product-info :product="product"/>
    <info :product="product"/>
    <div class="section"/>
    <recomand :product="product"/>
    <div class="section"/>
    <review :product="product"/>
    <div class="section"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Info from '~/components/Goods/Info.vue';
import ProductInfo from '~/components/Goods/ProductInfo.vue';
import Recomand from '~/components/Goods/recomand.vue';
import Review from '~/components/Goods/review.vue';
export default {
  components :{ProductInfo, Info, Recomand, Review},
  async asyncData({params, $axios}){
    const id = params.id;
    
    let product
    await $axios.get('/api/clothes?id=' + id)
    .then(result => {
      product = result.data
    })
    await $axios.post('/api/clothes/viewCount?id=' + id)
  
    return {
      product
    } 
  },

  computed: mapState({
    list : state => state.products.list
  })
}
</script>

<style lang="scss" scoped>
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0.5em;

    .section {
      padding-bottom: 3em;
    }
  }
  
</style>

<style>

</style>