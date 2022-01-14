<template>
    <div class="wrap">
        <div class="image-container">
            <div v-for="list in lists" :key="list.id">
                <image-card
                    :id="list.id" :image="list.image" :product="list.product"
                    :discription="list.discription" :price="list.price"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrap{
        /* border: 1px solid;    */
        width: 99%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .image-container{
        width: 100%;
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(2,1fr);
        @media (min-width: 768px){
            grid-template-columns: repeat(3,1fr);
        }
        @media (min-width: 1024px){
            grid-template-columns: repeat(4,1fr);
            
        }  
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>

<script>
import {mapState} from "vuex"
import ImageCard from './ImageCard.vue'
export default {
    components: { ImageCard },
    name:"ImageContainer",
    computed: mapState({
        lists : state => state.products.list
    })
}
</script>