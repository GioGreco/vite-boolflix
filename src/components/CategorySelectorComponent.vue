<template>
    <div class="select-category">
        <span :class="{active : store.activeCategory == 0}" @click="store.callAPI(store.popularEndpoint[0])">Movies</span>
        <span :class="{active : store.activeCategory == 1}" @click="store.callAPI(store.popularEndpoint[1])">TV Series</span>
    </div>
</template>

<script>
import {store} from '../store.js';

    export default {
        name: 'CategorySelectorComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;

    .select-category{
        @include dflex;
        justify-content: center;
        padding: 25px;
        background-color: rgba(0, 0, 0, 0.8);;

        span{
            margin: 0 5px;
            font-size: 1.5rem;
            text-transform: uppercase;
            cursor: pointer;
            color: $white-text;
            display: block;
            padding: 5px;
            background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 100%, $red-special 120%);

            &.active{
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 30%, $red-special 150%);
                transition: background-image 1s;
            }
        }
    }
</style>