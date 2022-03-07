<template>
    <div class="column">
        <div class="button"
            :style="{color: color, backgroundColor: backgroundColor}"
            @click="login"><slot/></div>
        <!-- <div class="button" @click="logout">구글 로그인</div> -->
    </div>
</template>

<script>
export default {
    props: ['strategy','color','backgroundColor'],
    methods : {
        login(){
            var popupWidth = 450
            var popupHeight = 650
            var popupX = (window.innerWidth/2) - (popupWidth/2)
            var popupY = (window.innerHeight/2) - (popupHeight/2)
            window.open(
                '/auth/' + this.strategy,
                '신상마켓 로그인',
                'width='+popupWidth+',height='+popupHeight+',left='+popupX+',top='+popupY,
                )

        },
    }
}
</script>

<style lang="scss" scoped>
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: darkgray;
        margin: .4em;
        font-size: small;
    }
}
.button{
    background-color: transparent;
    /* border: 1px solid darkgray; */
    /* height: 8%; */
    /* background-color: rebeccapurple; */
    width: 100%;
    height: 3.2em;
    /* color: red; */
    /* border: 1px solid black; */
    /* color: white; */
    /* background-color: #19CE60; */
    display: grid;
    place-items: center;
    &:hover {
        background-color: rgb(240, 240, 240);
    }
}
</style>