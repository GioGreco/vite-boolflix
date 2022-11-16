import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    categoryEndpoint: ['search/movie', 'search/tv'],
    popularEndpoint: ['movie/popular', 'tv/popular'],
    apiKEY: '?api_key=a8049b8c9e734e7c0f349c01d64a7f91',
    query: '',
    baseImgURL: 'https://image.tmdb.org/t/p/w342/',
    loading: false,


    callAPI(endpoint){
        this.loading = true;

        let myFilter = {
            params: {
                api_key: 'a8049b8c9e734e7c0f349c01d64a7f91',
                query: this.query
            }
        }

        let apiurl = this.apiURL + endpoint;

        axios.get(apiurl, myFilter).then((res)=>{
            console.log(res.data.results)
        })
    }
})