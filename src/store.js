import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    categoryEndpoint: ['search/movie', 'search/tv'],
    popularEndpoint: ['movie/popular', 'tv/popular'],
    query: '',
    baseImgURL: 'https://image.tmdb.org/t/p/w342',
    loading: false,
    activeEndpoint: '',
    titleList: [],
    activeCategory: 0,

    flagsAPIurl: 'https://countryflagsapi.com/png/',


    callAPI(endpoint){
        this.loading = true;
        this.activeEndpoint = endpoint;
        if(this.popularEndpoint.indexOf(endpoint) == 0 || this.categoryEndpoint.indexOf(endpoint) == 0){
            this.activeCategory = 0;
        }else{
            this.activeCategory = 1;
        }

        let myFilter = {
            params: {
                api_key: 'a8049b8c9e734e7c0f349c01d64a7f91',
                query: this.query
            }
        }

        let apiurl = this.apiURL + endpoint;

        axios.get(apiurl, myFilter).then((res)=>{
            this.titleList = [...res.data.results];
        })
    },

    getCountryFlag(country){
        country == 'uk'? country = 'gb': '';
        country == 'en'? country = 'us': '';
        country == 'ja'? country = 'jp': '';
        country == 'el'? country = 'gr': '';
        country == 'cs'? country = 'cz': '';
        country == 'ko'? country = 'kr': '';

        const flagAPI = this.flagsAPIurl + country

        return flagAPI;
    },

    getCoverImage(hash){
        const imgURL = this.baseImgURL + hash;

        return imgURL
    }
})