<template>

</template>

<script>
export default {
    layout: "auth",
    mounted() {
        this.$auth.loginWith(this.$route.params.strategy, { params: { prompt: "select_account" } })
    }
}
</script>

<style>

</style>