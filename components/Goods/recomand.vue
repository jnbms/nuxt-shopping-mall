<template>
<div class="column container">
    <div class="section">
        <h2>Related products</h2>
        <p>연관된 상품</p>
    </div>
    <div class="image-container">
        <div v-for="product in recommandProducts" :key="product._id" class="image-card">
            <img class="image" :src="`${baseUrl}/images/clothes/${product.sort}/${product.name}.jpg`"/>
            <div class="textbox">
            <h2 style="margin: 0;">{{product.name}}</h2>
            <div>{{product.price}} 원</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props : ["product"],
    data() {
        return {
            recommandProducts: [],
            baseUrl: process.env.baseUrl
        }
    },
    async fetch() {
        // const {sort, category, _id} = this.product
        let data
        await this.$axios.get(process.env.baseUrl + '/' + 'clothes' + '/' +  this.product.sort)
            .then(result => data = result.data)
            data = data.filter(product => product._id !== this.product._id)
            let nums = []
            Array.from({length: 4}, (_, i) => {
                var num
                do {
                    num = Math.floor(Math.random() * data.length)
                } while(nums.some(eletment => eletment == num))
                nums.push(num)
            })
            nums.map(num => this.recommandProducts.push(data[num]))
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        box-sizing: border-box;
        padding-inline: 1em;
        .section{
            text-align: center;
            margin-bottom: 1em;
        }
        .image-container{
            width: 100%;
            display: grid;
            @media (min-width: 768px){
                grid-template-columns: repeat(3, 1fr);

            }
            @media (min-width: 1024px) {
                grid-template-columns: repeat(4, 1fr);

            }
            grid-template-columns: repeat(2, 1fr);
            gap: 1em;
            .image-card {
                border: 1px solid lightgray;
                width: 100%;
                .image {
                    /* height: 100%; */
                    width: 100%;
                    height: 35vh;
                    object-fit: cover;
                    /* border: 1px solid red; */
                }
                .textbox{
                    /* border: 1px solid; */
                    text-align: right;
                    box-sizing: border-box;
                    padding: 1em;
                    /* height: 10vh; */
                }
            }
            
        }
    }
</style>