<template>
    <div class="wrap">
        <!-- v-if : when mylist is undefined, its not showing, you can remove first rendering error  -->
        <div class="image-container" v-if="myList">
            <div v-for="list in pleaseList" :key='list.key'>
                <image-card
                    :sort="sort"
                    :id="list._id" :name="list.name" :price="list.price"
                    :discription="list.discription" />
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
import {mapState, mapGetters} from "vuex"
import ImageCard from './ImageCard.vue'
export default {
    components: { ImageCard },
    name:"ImageContainer",
    props : ["sort"],
    data(){
        return{
            myList : undefined
        }
    },
    async fetch(){
        // data보다 순서가 느리기 때문에 초기 렌더링에서 에러가 발생한다.
        let contents
        await this.$axios.get(process.env.baseUrl + '/clothes/' + this.sort).then(result => contents = result.data)
        this.myList = contents
    },

    computed : {
        // ...mapGetters({
        //     top: 'products/top',
        //     bottom: "products/bottom",
        // }),
        pleaseList(){
            return this.$store.state.category.category == undefined ?
                this.myList :
                this.myList.filter(list => list.category == this.$store.state.category.category) 
        }
    },
    mounted(){
    },
    methods: {
    }
}
</script>