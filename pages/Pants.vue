<template>
    <div class="container">
        <Banner/>
        <!-- <Cartegory :categories="categories"/> -->
        <ImageContainer sort="bottom"/>
        <Mid/>
    </div>
</template>

<script>
import Vue from 'vue'
import Cartegory from '../components/Cartegory.vue'
import ImageContainer from "~/components/ImageContainer.vue"
import Mid from '../components/Mid.vue'
import Navi from '../components/Navi.vue'
import {mapMutations} from 'vuex'
export default Vue.extend({
    components: {Navi, Cartegory, ImageContainer, Mid},

    data() {
        return {
            categories : ["청바지","블랙진","가죽바지","치마"]
        }
    },
    methods: {
        ...mapMutations({setCategory: "category/setCategory"})
    },
    mounted(){
        this.setCategory(undefined)
    },
})
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