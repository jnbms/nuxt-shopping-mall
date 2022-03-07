<template>
  <div class="column container">
      <div class="section">
        <h2>Related products</h2>
        <p>연관된 상품</p>
      </div>
      <div class="row image-container">
          
        <div class="image-card">
            <nuxt-img class="image" src="fashion-model01.jpg"/>
            <div class="textbox">
            <h2 style="margin: 0;">패션 이름</h2>
            <div>32800원</div>
            </div>
        </div>
          
        <div class="image-card">
            <nuxt-img class="image" src="fashion-model02.jpg"/>
            <div class="textbox">
            <h2 style="margin: 0;">패션 이름</h2>
            <div>32800원</div>
            </div>
        </div>

        <div class="image-card">
            <nuxt-img class="image" src="fashion-model03.jpg"/>
            <div class="textbox">
            <h2 style="margin: 0;">패션 이름</h2>
            <div>32800원</div>
            </div>
        </div>

        <div class="image-card">
            <nuxt-img class="image" src="fashion-model04.jpg"/>
            <div class="textbox">
            <h2 style="margin: 0;">패션 이름</h2>
            <div>32800원</div>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {

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