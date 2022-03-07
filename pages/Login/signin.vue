<template>
    <div class="container">
    <div class="login-box">
        <nuxt-link to="/" class="title">신상마켓</nuxt-link>
        <div>{{userList}}</div>
        <div>이름</div>
        <input  maxlength="8" placeholder="NAME" v-model="userName"/>
        <div>아이디</div>
        <input maxlength="12" placeholder="ID" v-model="userID"/>
        <div>비밀번호</div>
        <input maxlength="20" type="password" placeholder="PW" v-model="userPW"/>
        <div>비밀번호 재확인</div>
        <input maxlength="20" type="password" placeholder="PW" v-model="userConfirm"/>
        <div class="logger">{{confirmMessage}}</div>
        <button class="button" @click="pushUserData">회원가입</button>
        <div class="coment">이미 아이디가 있는 경우</div>
        <nuxt-link to="/login">
            <p class="login">로그인</p>
        </nuxt-link>

    </div>
    </div>
</template>

<script>
import Button from '~/components/Button.vue'
import {createNamespacedHelpers} from "vuex";

const {mapState: userMapState, mapActions: userMapActions} = createNamespacedHelpers("account");
export default {
    components: { Button },
    layout: "login",

    data(){
        return {
            userID : '',
            userPW : '',
            userConfirm: '',
            userName : '',            
        }
    },

    computed: {
        ...userMapState({
            userList: state => state.userList
        }),
        confirmMessage : function(){
            if(this.userPW != this.userConfirm) {
                return "비밀번호가 일치하지 않습니다."
            } else {
                return ""
            }
        }
    },
    methods: {
        ...userMapActions(['postUser']),

        pushUserData(){
            var user = {id : this.userID, pw: this.userPW, name: this.userName}
            this.postUser(user);
        }
    }

}
</script>

<style lang="scss" scoped>
    .container{
        background-color: white;
        .button{
            background-color: transparent;
            border: 1px solid darkgray;
            width: 81%;
            background-color: rebeccapurple;
            height: 4em;
            color: white;
            /* color: red; */
            &.google{
                background: transparent;
                border: 1px solid rebeccapurple;
                color: rebeccapurple;
            }
            &:hover{
                cursor: pointer;
                opacity: 0.9;
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
            /* padding-left: 2em; */
            }
            div{
                width: 80%;
                text-align: left;
                /* align-self: flex-start; */
            }
            .logger{
                color: red;
                font-style: italic;
            }
            .coment{
                margin-top: 1em;
                font-size: 14px;
                text-align: center;
                color:gray;
                /* text-decoration: underline; */
            }
            .login{
                text-decoration: underline;
                color: blue;
                margin-top: 0;
            }
        }
        
    }
</style>