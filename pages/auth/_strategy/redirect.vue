<template>
</template>
// 이 페이지는 페이지에 들어가지 않고 next에서 api서버를 제공하는 것처럼
// nuxt에 있는 서버 쪽에 등록해야 한다.
// 찾아보니 보이지 않는다. 미들웨어가 있긴한데, url 자체를 담당하는 건 보이지 않는다.
<script>
export default {
    layout: 'auth',
    mounted() {
        const query = this.$route.fullPath.replace(this.$route.path,'')
        const strategy = this.$route.params.strategy
        // console.log(query)
        // 구글 콘솔의 리다이렉트 URL를 여기로 지정, 로그인 성공 시 붙는 코드과 상태 쿼리를
        // 백엔드에 작성된 패스포트(백엔드의 리다이렉트 주소도 구글 콘솔에 적힌대로 적는다.)
        // 와 연결해서 다시 보낸다. 받은 결과가 성공일 경우 이 페이지는 팝업으로 열어둔 상태이므로
        // 윈도우를 끈다.(이 작업은 1회만 동작하고 F5 새로고침 시 작동하지 않는다.)
        // 바로 백엔드로 콜백할 경우 구글쪽 로그인이라 접근하는 방법을 모르겠어서 한번 거쳤다.
        this.$axios.get('/api/auth/'+ strategy +'/callback' + query)
            .then( result => {  
                // 여기서 스토어를 쓰는 게 아니라, 스토어가 백엔드와 연결된 후,
                window.opener.sessionStorage.setItem("username", result.data.username)
                // this.$store.commit('acount/setUser', name)
                window.opener.location.href = '/' // redirect to home
            })
            .catch(err => console.error(err))
            .finally(function(){
                window.close()
            })
        // this.$store.commit('acount/setUser', 'asd')
        // console.log(this.$store.state.acount)
        // 페이지 새로고침으로 적용되서 뷰스토어가 나라감
    },
    beforeDestroy() {

    }
}
</script>

<style>

</style>