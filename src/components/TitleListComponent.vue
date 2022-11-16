<template>
    <div class="row m-0 p-5 g-4">
        <TitleComponent v-for="(item,index) in store.titleList" :key="item.id" :title="item"/>
    </div>
</template>

<script>
import {store} from '../store.js'

import TitleComponent from './TitleComponent.vue';

    export default {
        name: 'TitleListComponent',
        components:{
            TitleComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>