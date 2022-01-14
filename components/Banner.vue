<template>
     <div class="banner">
            <div class="image-slider">
                <!-- <div>ASD</div> -->
                <div class="image-container" :style="styleState">
                    <div class="image"/>
                    <div class="image2"/>
                </div>
                    <!-- <img class="image" src="~assets/images/banner.jpg"> -->
            </div>
            <div class="titleText">
                <h1 style="line-height:0; margin:0.5em;" class="">DESIGN YOUR IDENTITY</h1>
                <p class="">옷은 그 사람의 정체성이다.</p>
            </div>
            <div class="buttons">
                <div class="button" @click="setPrev">← PREV</div>
                <div class="button" @click="setNext">NEXT →</div>
            </div>
        </div>
</template>

<script>
    export default {
        mounted(){
            setInterval(this.toggleBanner,10000)
        },
        data(){
            return{
                slideValue : 0
            }
        },
        methods:{
            setNext(){
                this.slideValue != -100 ? this.slideValue -= 100 : "";
            },
            setPrev(){
                this.slideValue != 0 ? this.slideValue += 100 : "";
            },
            toggleBanner(){
                this.slideValue != -100 ? this.slideValue -=100 : this.slideValue = 0;
            }
        },
        computed : {
            styleState(){
                return {
                    "left" : this.slideValue + "%"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.slide-action{
    left: -100px;
}
.image-slider{
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: center;

    z-index: -1;
    overflow: hidden;

    .image-container{
        position: relative;
        /* left: -100%; */
        transition: 1s;
        height: 100%;
        width: 200%;
        display: flex;
        flex-direction: row;
    }
    .image{
        /* border: 1px solid red; */
        height: 100%;
        width: 50%;
        background-image: url("~assets/images/banner.jpg");
        background-size: cover;
    }
    .image2{
        height: 100%;
        width: 50%;
        background-image: url("~assets/images/banner2.jpg");
        background-size: cover;
        background-position: center;
        
    }
}
.banner{
        position: relative;
        height: 40vh;
        width: 100%;  
        .buttons{
            position: absolute;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: row;
            .button{
                height: 3em;
                width: 6em;
                border: 1px solid rgb(182, 182, 182);
                background-color: white;
                display: grid;
                place-items: center;
                &:hover{
                    background-color: rgb(230, 230, 230);
                }
            }
        }
    }
.titleText{
        color: white;
        height: 100%;
        width: 100%;
        display: flex;
            flex-direction: column;
        @media(min-width: 768px){
            flex-direction: row;
        }
        align-items: center;
        justify-content:center;
        .position1{
            position: relative;
            left: 5em;
            top: 2em;
        }
    }
</style>