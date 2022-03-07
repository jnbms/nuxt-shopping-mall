<template>
    <div class="flex-container">
        <!-- <div>|</div> -->
        <div class="scroll-down">
            <div>랭킹</div>
        </div>
        <div>|</div>
        <!-- <NuxtLink to="/news">신상품</NuxtLink> -->
        <!-- <div>|</div> -->
        <NuxtLink to="/"><div @click="redirect">상의/T-Shirts</div></NuxtLink>
        <div>|</div>
        <NuxtLink to="/pants">하의/Pants</NuxtLink>
        <div>|</div>
        <div>세일/이벤트</div>

        <!-- <div>|</div> -->
    </div>
</template>

<style lang="scss" scoped>
    .flex-container{
        display: flex;
        /* width: 1080px; */
        flex-direction: row;
        width: 100%;
        /* hei */
        /* gap: 4em; */
        padding-top: 1em; padding-bottom: 1em;
        /* border-top: 1px solid; */
        /* border-bottom: 1px solid lightgray; */
        border: 1px solid lightgray;
        justify-content: space-evenly;
        /* padding-inline: 4em; */
        /* .scroll-down{
            height: 0px;
            transition: 0.5s;
            &:hover{
                height: 200px;
            }
        } */
    }
    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        &:hover{
            /* text-decoration: underline; */
            color: lightgray;
        }
    }
</style>

<script>
import {mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations({'setCategory': 'category/setCategory'}),
        redirect() {
            this.setCategory(undefined)
        }
    }
}
</script>
