<template>
    <div class="container">
    <div class="login-box">
        <nuxt-link to="/" class="title">신상마켓</nuxt-link>
        <div>아이디</div>
        <input placeholder="ID"/>
        <div>비밀번호</div>
        <input placeholder="PW"/>
        <button class="button">로그인</button>
        <!-- <button class="button" @click="google">구글s 로그인</button> -->
        <auth-button strategy="google" color="white" backgroundColor="#4C8BF5">구글 로그인</auth-button>
        <auth-button strategy="naver" color="white" backgroundColor="#19CE60">네이버 로그인</auth-button>
        <auth-button strategy="kakao" color="white" backgroundColor="#F9E000">카카오 로그인</auth-button>

        <p>아이디 찾기 | 비밀번호 찾기</p>
    </div>
    </div>
</template>

<script>
import AuthButton from '~/components/AuthButton.vue'
import Button from '~/components/Button.vue'
export default {
    components: { Button, AuthButton },
    layout: "login"
}
</script>

<style lang="scss" scoped>
    .container{
        background-color: white;
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: center; */
        .button{
            background-color: transparent;
            border: 1px solid darkgray;
            height: 8%; width: 81%;
            background-color: rebeccapurple;
            height: 4em;
            color: white;
            /* color: red; */
            &.google{
                /* width: 100%; */
                background: transparent;
                border: 1px solid rebeccapurple;
                color: rebeccapurple;
            }
        }
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
        /* borderB: 1px solid darkgray; */
        height: 100%; width: 30em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        /* padding: 2em; */
        /* gap: 1em; */
        .title{
            margin-top: 1em;
            font-size: 1.5em;
            color: rebeccapurple;
            font-weight: bold;
        }
        .login-box{
            height: 80%; width: 100%;
            /* height: 400px; */
            /* width: 400px; */
            display: flex;
            flex-direction: column;
            align-items: center;
            /* padding: 1em; */
            /* text-align: left; */
            gap: 0.5em;
            input{
            border: 1px solid darkgray;
            width: 80%;
            height: 4em;
            }
            div{
                width: 80%;
                text-align: left;
                /* align-self: flex-start; */
            }
        }
    }
</style>