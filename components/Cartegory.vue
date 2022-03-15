<template>
<div class="body">
    <div class="title">카테고리</div>
        <div class="container" >
            <div class="container-list" v-for="list in categories" :key="list.id" >
                #<span class="span" :class="{strong : list == category}" @click="selectCategory">{{list}}</span>
            </div>
        </div>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
    props: 
        ["categories"]
        ,
    mounted(){
        // this.$store.commit("category/setCategory",this.categories[0])
    },
    computed:{
        ...mapState({
            category: state => state.category.category
        })
    },
    methods:{
        selectCategory(target){
            this.$store.commit("category/setCategory",target.srcElement.innerHTML)
        },
    }
}
</script>

<style lang="scss" scoped>
    .span {
        white-space: nowrap;
    }
    .strong{
        font-weight: bold;
        text-decoration: underline;
    }
    .body{
        width: 100%;
        /* padding: 1em; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title {
        /* height: 1em; */
        /* border: 1px solid; */
        font-size: 1.5em;
        font-weight: bold;
    }
    .container{
        /* border: 1px solid; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* height: 2em; */
        align-items: center;
        height: 3em;
        width: 80%;
        
        .container-list:hover{
            text-decoration: underline;
        }
    }
</style>