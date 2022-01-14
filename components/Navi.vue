<template>
    <div class="flex-container">
        <!-- <div>|</div> -->
        <NuxtLink to="/ranks" class="scroll-down">
            <div>
                <div>랭킹</div>
                <!-- <div>
                    <div>옷</div>
                    <div>바지</div>
                    <div>팬티</div>
                </div> -->
            </div>
        </NuxtLink>
        <div>|</div>
        <NuxtLink to="/news">신상품</NuxtLink>
        <div>|</div>
        <NuxtLink to="/event">이벤트</NuxtLink>
        <div>|</div>
        <NuxtLink to="/best">인기 상품</NuxtLink>
        <div>|</div>
        <NuxtLink to="/sail">세일</NuxtLink>
        <div>|</div>
        <NuxtLink to="/about">온라인 주문</NuxtLink>
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

<script lang="ts">
import Vue from 'vue';
export default ({
    name: "Navi"   
})
</script>
