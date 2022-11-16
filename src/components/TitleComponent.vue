<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="title">
            <p>{{title.title}}</p>
            <p>{{title.original_title}}</p>
            <img :src="store.getCountryFlag(title.original_language)" alt="">
            <div class="stars">
                <i v-for="star in (Math.round(title.vote_average / 2))" class="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store';

    export default {
        name: 'TitleComponent',
        props: {
            title: Object
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        padding: 20px;
        background-color: black;
        color: white;

        img{
            height: 15px;
            width: 25px
        }
        .stars{
            color: gold;
        }
    }
</style>