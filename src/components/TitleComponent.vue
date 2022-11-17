<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="title faces-wrapper">
            <div class="front-face">
                <img :src="store.getCoverImage(title.poster_path)" alt="">
            </div>
            <div class="back-face">
                <h3>{{store.activeCategory == 0 ? title.title : title.name}}</h3>
                <p>{{store.activeCategory == 0 ? title.original_title : title.original_name}}</p>
                <img :src="store.getCountryFlag(title.original_language)" alt="">
                <div class="stars">
                    <span>Rating: </span>
                    <i v-for="star in (Math.round(title.vote_average / 2))" class="fa-solid fa-star"></i>
                    <span v-if="title.vote_average == 0">N/C</span>
                </div>
                <p class="mt-4">Synopsis:</p>
                <div>{{title.overview}}</div>
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
@use '../assets/styles/partials/variables' as *;
    .title{
        background-color: $red-special;
        color: white;
        box-shadow: 0px 0px 10px 4px $red-special;
        position: relative;
        transform-style: preserve-3d;
        cursor: pointer;
        transition: transform 1s ease-in-out;

        &:hover{
            transform: rotateY(-180deg);
        }

        .front-face{
            backface-visibility: hidden;

            width: 100%;
            height: 500px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .back-face{
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotateY(180deg);
            padding: 20px;
            overflow-y: auto;

            img{
                height: 15px;
                width: 25px
            }
            .stars{
                color: $white-text;
                margin: 10px 0;
                i{
                    color: gold
                }
            }
        }
    }
</style>