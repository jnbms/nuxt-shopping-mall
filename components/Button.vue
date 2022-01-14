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
            background-color: rgb(247, 247, 247);
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
    }
}
</script>