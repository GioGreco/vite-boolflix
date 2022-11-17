<template>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="title faces-wrapper">
                <div class="front-face">
                    <img v-if="title.poster_path != null" :src="store.getCoverImage(title.poster_path)" alt="">
                    <img v-else src="../../public/img/not-found.jpeg" alt="cover not found backdrop img">
                </div>
                <div class="back-face">
                    <div class="back-top">
                        <h3 class="m-0">{{store.activeCategory == 0 ? title.title : title.name}}</h3>
                        <p class="m-0">{{store.activeCategory == 0 ? title.original_title : title.original_name}}</p>
                    </div>
                    <div class="back-bottom">
                        <img :src="store.getCountryFlag(title.original_language)" alt="">
                        <div class="stars">
                            <span>Rating: </span>
                            <i v-for="star in (Math.round(title.vote_average / 2))" class="fa-solid fa-star"></i>
                            <i v-for="star in (5 - (Math.round(title.vote_average / 2)))" class="fa-regular fa-star"></i>
                            <span v-if="title.vote_average == 0">N/C</span>
                        </div>
                        <div class="genres">
                            <span>Genres:</span>
                            <span class="mx-1" v-for="item in title.genre_ids">{{item}}</span>
                        </div>
                        <div class="cast">
                            <span>Cast:</span>
                            <span class="mx-1" v-for="item in store.titleCastList[currentTitle]">{{item}}</span>
                        </div>
                        <p class="mt-4">Synopsis:</p>
                        <div>{{title.overview}}</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {store} from '../store';

    export default {
        name: 'TitleComponent',
        props: {
            title: Object,
            currentTitle: Number
        },
        data(){
            return{
                store,
            }
        }, 
        mounted(){
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
            height: 400px;
            img{
                width: 100%;
                height: 100%;
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

            .back-top{
                height: 90px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                text-align: center;
               
            }
            .back-bottom{
                padding: 35px;
                background-color: black;
                box-shadow: inset 0 0 15px 10px $red-special;
            }
        }
    }
</style>