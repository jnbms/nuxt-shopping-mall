<template>
<div class="mid-container">
    <!-- <div>Hello MID</div> -->
    <Button text="<" color=""/>
    <Button text="1" color=""/>
    <Button text="2" color=""/>
    <Button text="3" color=""/>
    <Button text=">" color=""/>
</div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },

}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        /* align-items: center; */
        /* width: 100%; */
        /* border: 1px solid; */
    }
</style>