<template>
    <div>
        <div>{{onSummitText}}</div>
        <div>{{onChangeText}}</div>
        <!-- <div>{{qwe[0]['name']}}</div> -->
            <input v-model="onSummitText" type="text" placeholder="text summit"/>

    </div>
</template>

<script>

export default {
    async asyncData({$axios, store}){
        let zxc = store.state.counter.count
        // let qwe = await $axios.get('/api/clothes').then(result => result.data)
        console.log('rendering')
        return {
            // 데이터 바인딩을 통해서 변경은 된다.
            onSummitText : "asdf"
        }
    },
    data(){
        return {
            onChangeText: ""
        }
    },
    methods: {
        onSummit(){
            console.log('summit')
        }
    }
}
</script>

<style>

</style>