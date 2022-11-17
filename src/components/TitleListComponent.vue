<template>
        <TransitionGroup name="titlesFX" tag="div" class="row m-0 p-5 g-4">
            <TitleComponent v-for="(item,index) in store.titleList" :key="index" :title="item" :currentTitle="index"/>
        </TransitionGroup>
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
    .row{
        background: radial-gradient(circle, rgba(190,19,37,0.7763480392156863) 0%, rgba(0,0,0,0.8) 80%);
    }

    //ANIMAZIONI

    .titlesFX-enter-from{
        opacity: 0;
        transform: scale(.5);
    }

    .titlesFX-enter-to{
        opacity: 1;
        transform: scale(1);
    }

    .titlesFX-enter-active{
        transition: opacity .5s, transform .5s;
    }
</style>