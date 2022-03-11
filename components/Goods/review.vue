<template>
    <div class="container">
        <h2>Review</h2>
        <div>상품 후기</div>
        <div class="table">
        <div class="row">
            <div class="tag">리뷰</div>
            <div class="tag">최신순</div>
            <div class="tag">평가순</div>
        </div>
        <hr/>
        <div  class="content-box" v-for="coment in coments" :key="coment.key">
            <div class="row content-info">
                <div>{{coment.ratio}}/5 점</div>
                <div class="content-date">{{setFormat(coment.createdAt)}}</div>
            </div>
            <div class="content">
                <div>{{coment.content}}</div>
                <div class="close" @click="deleteContent(coment._id)">X</div>
            </div>
        </div>
        <hr/>
        <div class="input-container row">
            <textarea v-model="review"/>
            <div class="star-container">
                <div>평가하기</div>
                <div class="row stars">
                    <div v-for="index in rating" :key="index.id">
                        <div class="star" @click="setRating(index)">★</div>
                    </div>
                    <div v-for="index in remainRating" :key="index.id">
                        <div class="star" @click="setRating(rating + index)">☆</div>
                    </div>
                </div>
            </div>
            <button @click="submit">등록</button>        
        </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    components: { Icon },
    props: ["product"],
    // async fetch(){
    //     await this.$axios.get('/api' + '/board/' + this.product._id).then(result => this.coments = result.data)
    // },
    data(){
        return{
            coments: this.$axios.get(process.env.baseUrl + '/board/' + this.product._id).then(result => this.coments = result.data),
            review: "",
            rating: 0
        }
    },
    computed: {
        remainRating(){
            return 5 - this.rating
        },
    },
    methods: {
        setRating(value){
            this.rating = value
        },
        setFormat(createdAt){
            let date = createdAt.split('-')
            let year = date[0]
            let month = Number(date[1])
            date = date[2].split('T')
            let day = Number(date[0])
            date = date[1].split(':') 
            // 백엔드에서 시간 문제를 해결하지 못해서 임시 방편으로, 여기에 적기보다 한번 필터링해서 적용하는 편이 좋겠다.
            let hour = (date[0] > 12 ? date[0] - 12 : date[0]) + 9
            let minute = date[1]

            let format = month + "월 " + day + "일 " + hour + "시 " + minute + "분"
            return format
        },
        async submit() {    
            await this.$axios.post(process.env.baseUrl + '/board/' + this.product._id, {"ratio" : this.rating, "content": this.review})
            this.rerenderComents()
        },
        async deleteContent(id) {
            await this.$axios.delete(process.env.baseUrl + '/board/' + id)
            this.rerenderComents()
        },
        rerenderComents() {
            this.components = this.$axios.get(process.env.baseUrl + '/board/' + this.product._id).then(result => this.coments = result.data)
        }
    }
}   
</script>

<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        .table{
            margin-block: 2em;
            width: 100%;
            .content-box {
                margin-bottom: 2.4em;
                .content-info {
                    margin-bottom: 0.8em; gap: 1.2em; align-items: center;
                    .content-date {
                        color: gray; font-size: small;
                    }
                }
                .content {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .close {
                        box-sizing: border-box;
                        padding-inline: 2em;
                    }
                }
            }
            .row{
                .tag{
                    width: 15%;
                    border-left: 5px solid lightgray;
                    margin-left: 1em;
                    margin-bottom: 1em;
                    padding-inline: 1em;
                    /* text-align: center; */
                }
            }
            hr{
                border-top: 1px solid lightgray;
                margin-block: 1em;
            }
            .input-container{
                gap: 0.5em;
                
                textarea {
                    font-family: inherit;
                    font-size: inherit;
                    resize: none;
                    width: 80%;
                    margin-inline: 0.8em;
                    padding-inline: 0.8em;
                    padding-block: 0.4em;
                    box-sizing: border-box;
                }
                .star-container{
                    width: 30%;
                    .stars {
                        /* margin-block: 0.4em; */
                        color: rebeccapurple;
                        .star {
                            font-size: 28px;
                        }

                    }
                    input{
                        height: 2em; width: 2em;
                        margin-top: 1em;
                    }
                }
                input{
                    height: 5em;
                    width: 70%;
                    margin-right: 1em;
                    border: 1px solid lightgray;
                }
                button{
                    width: 20%;
                    background-color: rebeccapurple;
                    color: white;
                    border: none;
                }
            }
        }
    }
</style>