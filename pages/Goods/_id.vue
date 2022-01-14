<template>
  <div class="body">
    <product-info
      :image="list[id].image"
      :product="list[id].product"
      />
    <info/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Info from '~/components/Goods/Info.vue';
import ProductInfo from '~/components/Goods/ProductInfo.vue';
export default {
  components :{ProductInfo, Info},
  async asyncData({params}){
    console.log(params)
    const id = params.id;
    return {id}
  },
  computed: mapState({
    list : state => state.products.list
  })
}
</script>

<style scoped>
  .body{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0.5em;
  }
  
</style>

<style>

</style>