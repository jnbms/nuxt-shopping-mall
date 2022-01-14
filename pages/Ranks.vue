<template>
    <div class="column">
        <div class="row">
            <div class="main-container">
                <div>
                    <div>CSS의 FLEX 말고</div>
                    <div>제대로 FLEX 해보자!</div>
                    <nuxt-link to="/sail" class="aggro">세일 바로가기</nuxt-link>
                </div>
            </div>
            <div class="sidebar column">
                이번주 랭킹
                월별 랭킹
                연간 랭킹
            </div>
             <div class="sidebar">
                <div>
                    <div>품목</div>
                    <div>브랜드</div>
                </div>
                <div>
                    인기
                    <div>데님팬츠</div>
                    <div>
                        데님 팬츠 (9,453)
                        캔버스/단화 (6,239)
                        러닝화/피트니스화 (2,632)
                        슈트 팬츠/슬랙스 (6,968)
                        트레이닝/조거 팬츠 (13,643)
                        맨투맨/스웨트셔츠 (28,875)
                        후드 티셔츠 (18,233)
                        니트/스웨터 (13,809)
                        플리스/뽀글이 (3,862)
                        겨울 싱글 코트 (1,824)
                        롱패딩/롱헤비 아우터 (1,048)
                        숏패딩/숏헤비 아우터 (5,871)
                    </div>
                </div>
            </div>
        </div>
        <div>
            이번주 순위
        </div>
    <div>

    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .row{
        width: 100%;
        /* width: 1080px; */
    }
    .sidebar{
        border: 1px solid lightgray;
        /* height: 70vh; */
        /* width: 60vh; */
    }
    .main-container{
        margin-top: 0em;
        border: 1px solid lightgray;
        /* height: 70vh; */
        width: 80vh;
        background-image: url("~/assets/images/flex.jpg");
        /* background-size: 20; */
        color: white;
        display: grid;
        place-items: center;
        font-size: 2.5em;
        background-size: cover;
        /* background-position: center; */
        transition: 1s;
        
        &:hover{
            background-size: 200%;
            background-position: center;
        }
        
        .aggro{
            color: white;
            text-decoration: underline;
            font-weight: bold;
            &:hover{
                color: yellow;
            }
        }
    }
</style>