import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    categoryEndpoint: ['search/movie', 'search/tv'],
    popularEndpoint: ['movie/popular', 'tv/popular'],
    query: '',
    baseImgURL: 'https://image.tmdb.org/t/p/w342/',
    loading: false,
    activeEndpoint: '',
    titleList: [],

    flagsAPIurl: 'https://countryflagsapi.com/png/',


    callAPI(endpoint){
        this.loading = true;
        this.activeEndpoint = endpoint;

        let myFilter = {
            params: {
                api_key: 'a8049b8c9e734e7c0f349c01d64a7f91',
                query: this.query
            }
        }

        let apiurl = this.apiURL + endpoint;

        axios.get(apiurl, myFilter).then((res)=>{
            this.titleList = [...res.data.results];
            console.log(this.titleList)
        })
    },

    getCountryFlag(country){
        country == 'uk'? country = 'gb': '';
        country == 'en'? country = 'us': '';

        const flagAPI = this.flagsAPIurl + country

        return flagAPI;
    }
})