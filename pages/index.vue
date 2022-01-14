<template>
    <div class="container">
        <Banner/>
        <Cartegory/>
        <ImageContainer/>
        <Mid/>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1em;
    }
    
    
</style>

<script lang="ts">
import Vue from 'vue'
import Cartegory from '../components/Cartegory.vue'
import ImageContainer from "~/components/ImageContainer.vue"
import Head from '../components/Head.vue'
import Mid from '../components/Mid.vue'
import Navi from '../components/Navi.vue'
export default Vue.extend({
  components: {Navi, Head, Cartegory, ImageContainer, Mid},
    name:"IndexPage",
})
</script>