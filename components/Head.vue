<template>
    <div class="column">
        <div class="header">
            <nuxt-link to="/" class="title">신상마켓</nuxt-link>
            <input placeholder="상품이나 매장을 검색해보세요."/>
            <div class="myPage">
                <!-- <div>내 상품</div> -->
                <div @click="cart">장바구니</div>
                <!-- <div @click="mypage">마이페이지</div> -->
                <div class="login" @click="login">{{status}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.username = window.sessionStorage.getItem('username')
        },
        data(){
            return {
                username: null
            }
        },
        computed: {
            status() {
                return this.username == null ? '로그인' : '로그아웃'
            }
        },
        methods: {
            cart() {
                this.$router.push('/cart')
            },    
            mypage() {
                this.status == '로그인'
                ? window.alert("로그인이 되지 않았습니다.")
                : ""
            },
            login() {
                if(this.status == '로그인') {
                    this.$router.push('/login')
                } else{
                    window.sessionStorage.removeItem('username')
                    // 없어도 동작이 된다.
                    // this.$auth.logout('google')
                    // 네이버 로그아웃인 경우, 해당 부분 프론트엔드 주소값 넣어줘야함
                    /// 네이버는 로그아웃을 지원하지 않는다.
                    // window.open('http://nid.naver.com/nidlogin.logout','top=0, left=0, width=0, height=0')

                    // i add this beacouse rerendering is not work
                    this.username = null
                    // this.$router.push('/login')
                }
            }
        }
    }
</script>

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
            min-width: 10vh;
            color: rebeccapurple;
        }
        input{
        text-align: center;
        height: 3em;
        width: 80%;
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
        .login {
            color: rebeccapurple;
        }
    }

</style>