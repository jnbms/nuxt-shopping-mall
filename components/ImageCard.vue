<template>
  <nuxt-link :to="`/goods/${id}`">
    <div class="card column">
      <img :src="image"/>
      <div class="content">
          <div class="textbox">
            <h2>{{product}}</h2>
            <div>{{discription}}</div>
            <p>{{price}}</p>
          </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
 props: ["id","image","product","discription","price"]
}
</script>

<style lang="scss" scoped>
    .card{
      position: relative;
      height: 20em;
      /* width: 10em; */
        &:hover{
        filter: contrast(90%);
        cursor: pointer;
        /* transform: scaleX(2); */
      }
      img{
      border: 1px solid #e5e5e5;
      height: 100%;
      width: 100%;
      object-fit: cover;
    
      }
      .content{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        border: 1px solid #e5e5e5;
        color: white;
        height: 100%;
        width: 100%;
        .textbox{
          text-align: right;
          /* border: 1px solid red; */
          padding-right: 1em;
          padding-bottom: 0.5em;
        }
      }
    }
    
</style>