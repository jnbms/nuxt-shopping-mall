<template>
    <button :style="style"><slot/></button>
</template>

<style lang="scss" scoped>
    button{
        height: 2em;
        padding-inline: 1em;
        background-color: white;
        border: 1px solid lightgray;
        border-style: none;
        &:hover{
            cursor: pointer;
            background-color: rgb(247, 247, 247);
        }
        &.primary{
            color: white;
            background-color: rebeccapurple;
            /* height: 4em; */
        }
        &.secondary{
            border: 1px solid rebeccapurple;
            color: rebeccapurple;
            background-color: white;
        }
        /* height: 4em; */
        
    }
</style>

<script>
export default {
    props: ["text","color"],
    computed: {
        style(){
            return "background-color:" + this.color;
        }
    },
}
</script>