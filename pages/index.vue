<template>
    <div class="container">
        <Banner/>
        <Cartegory :categories="categories"/>
        <ImageContainer sort="top"/>
        <!-- <Mid/> -->
    </div>
</template>

<script>
import Cartegory from '../components/Cartegory.vue'
import ImageContainer from "~/components/ImageContainer.vue"
import Mid from '../components/Mid.vue'
import Navi from '../components/Navi.vue'
import Button from '~/components/Button.vue'
import {mapMutations} from 'vuex'

export default {
    components: {Navi, Cartegory, ImageContainer, Mid, Button},
    name:"IndexPage",
    
    data() {
        return {
            categories : ["티셔츠","원피스","추리닝","자켓"],
        }
    },
    methods: {
        ...mapMutations({setCategory: "category/setCategory"})
    },
    mounted(){
        this.setCategory(undefined)
    },

}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1em;
    }
    
    
</style>

