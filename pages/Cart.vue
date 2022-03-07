<template>
    <div class="box">
        <div style="margin-bottom: 2em; padding-inline: 0.8em;">
            <H3>장바구니</H3>
            <div>로그인 후 이용하시면 장바구니 목록을 기록하실 수 있습니다.</div>
        </div>
        <div class="space"/>
        <table>
            <thead>
                <tr>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th width="16%">수량</th>
                    <th width="16%">가격</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.key">
                    <td>
                        <nuxt-img class="image" :src="`${baseURL}/${item.sort}/${item.name}.jpg`" width="200px" height="250px"/>
                    </td>
                    <td>
                        <div class="brand">{{item.brand}}</div>
                        <div>{{item.name}}</div>
                    </td>
                    <td>
                        <input type="button" @click="decrease(item._id)" value="-" class="button-minus" data-field="quantity">
                        <!-- v-model이 아닌 vuex여서 그런지 max length is not working -->
                        <input type="number" max="100" maxlength="3" @keyup.enter="submit(item._id,$event.target)" :value="`${item.count}`" name="quantity" class="quantity-field">
                        <input type="button" @click="increase(item._id)" value="+" class="button-plus" data-field="quantity">
                    </td>
                    <td>{{item.price * item.count}} 원</td>
                </tr>
                <!--  -->
            </tbody>
        </table>
        <div class="result">
            <div class="count">
                <div>총 금액</div>
                <h2>{{total}} 원</h2>
            </div>
            <div class="row">
                <button class="line">쇼핑 계속하기</button>
                <button>구매하기</button>
            </div>
        </div>
    </div>

</template>

<script>
import Button from '~/components/Button.vue'
import {mapMutations} from 'vuex'
export default {
    // 새로고침하면 sessionStorage와 연결된 vuex를 asyncdata가 인식하지 못한다.
    mounted(){
        // console.log(list)

        // this.$axios.post(
        //     '/api' + '/clothes/list',
        //     {list}
        //     )
        //     .then(({data}) => console.log(data))
    },
    data(){
        return {
            list : this.$store.state.acount.cart,
            baseURL : 'http://localhost:3001/images/clothes'
        }
    },
    computed : {
        total(){
            return this.list.map(({price, count}) => price * count).reduce((accumulator, current) => accumulator + current, 0)
        }
    },
    methods: {
        ...mapMutations({'setCount': 'acount/setCount', 'addCount': 'acount/addCount'}),
        increase(id) { 
            this.addCount({id: id, value: 1})
        },
        decrease(id) {
            this.addCount({id: id, value: -1})
        },
        submit(id, target) {
            if(target.value <= 0) {
                target.value = 1
            }
            let value = target.value
            this.setCount({id, value})
            document.activeElement.blur()
        },
    }
}
</script>

<style lang="scss" scoped>

    .box {
        display: flex;
        flex-direction: column;
        align-content: left;
        width: 100%;
        padding-block: 0.4em;
        /* padding-inline: 0.2em; */
        box-sizing: border-box;


        table {
            /* border-collapse: collapse; */
            border-spacing: 1px;
            text-align: center;
            thead {
                /* background-color: rebeccapurple; */
                color: rebeccapurple;
                height: 4em;
                

                tr {
                    th {
                        border: 1px solid lightgray;

                    }
                }
            }
            tbody {
                tr {
                    td {
                        .image{
                            display: block;
                            object-fit: cover;
                        }
                        &:first-child {
                            width: 30px;
                        }
                        .brand {
                            color: rebeccapurple;
                            font-size: 80%;
                        }

                        border: 1px solid lightgrey;
                    }
                }
            }
        }
    }
    /*  */
    input {
            border: none;
            width: 30px;
            height: 30px;

        &[type="number"] {
            width: 30px;
            height: 25px;
            -moz-appearance: textfield;
            text-align: center;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .result {
        padding-inline: 0.8em;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;

        .count {
            margin-block: 0.8em;
            text-align: right;
            h2 {
                margin-block: .2em;
            }
        }

        .row {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: flex-end;
            gap: 0.4em;
        button {
            color:  white;
            border: none;
            background: rebeccapurple;
            width: 20%;
            height: 4em;
            }
            .line {
                background-color: white;
                border: 1px solid;
                color:  rebeccapurple;
            }
        }
    }

</style>