<template>
    <div class="column">
        <!-- <div class="loginContainer">
            <Button>로그인</Button>
            <Button>회원가입</Button>
        </div> -->
        <div class="header">
            <nuxt-link to="/" class="title">신상마켓</nuxt-link>
            <input placeholder="상품이나 매장을 검색해보세요."/>
            <div class="myPage">
                <div>내 상품</div>
                <div>장바구니</div>
                <div>마이페이지</div>
                <nuxt-link to="/login">로그인</nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .column{
        /* border: 1px solid; */
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    .loginContainer{
        display: flex;
        flex-direction: row;
        /* align-items: flex-end; */
        justify-content: right;
        width: 90%;
    }
    .header{
        height: 8em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        @media (min-width: 768px) {
            flex-direction: row;
            height: 5em;
            justify-content: space-around;
        }
        width: 100%;
        align-items: center;
        .title{
            font-size: 1.5em;
            color: rebeccapurple;
        }
        input{
        text-align: center;
        height: 3em;
        width: 90%;
        order: 2;
         @media (min-width: 768px) {
            /* flex-direction: row; */
            text-align: left;
            height: 2em;
            width: 30%;
            order: 0;
        }
        border: 1px solid gainsboro;
        /* background-color: rgb(223, 223, 223); */
        padding-inline: 1em;
        /* border-color: lightblue; */
        }
        .myPage{
        display: flex;
        flex-direction: row;
        width: 30em;
        justify-content: space-around;
        }
    }

</style>

<script lang="ts">
import Vue from 'vue';
// import {Icon} from '@iconify/vue';

export default {
    // components: Icon,
    name:"Head"
}
</script>