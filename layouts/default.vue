<template>
    <div class="template">
        <div class="layout">
                <Head/>
                <Navi/>
                <Nuxt/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .template{
        display: flex;
        /* border: 1px solid; */
        /* padding: 0.2em; */
        flex-direction: column;
        align-items: center;    
    }
    .layout{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* margin: 10e; */
        /* padding: 1em; */
        width: 100%;
        /* gap: em; */
        @media (min-width: 1024px) {max-width: 1024px;}
        
    }
</style>