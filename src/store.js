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
    titleCastList: [],
    activeCategory: 0,

    genreFilter: {
        params: {
            api_key: '49513c8494c3b9a0b063220206dc74c8',
        }
    },

    callAPI(endpoint){
        this.loading = true;
        this.activeEndpoint = endpoint;
        this.titleCastList = [];
        if(this.popularEndpoint.indexOf(endpoint) == 0 || this.categoryEndpoint.indexOf(endpoint) == 0){
            this.activeCategory = 0;
        }else{
            this.activeCategory = 1;
        }

        let myFilter = {
            params: {
                api_key: '49513c8494c3b9a0b063220206dc74c8',
                query: this.query
            }
        }

        let apiurl = this.apiURL + endpoint;

        axios.get(apiurl, myFilter).then((res)=>{
            this.titleList = [...res.data.results];
            console.log(this.titleList);
            let titleIDs = [];
            this.titleList.forEach((item) => {
            titleIDs.push(item.id);
            });
            console.log(titleIDs);

            titleIDs.forEach((item,index) => {
                let creditCategory = '';
                this.activeCategory == 0? creditCategory = 'movie' : creditCategory = 'tv';
                let creditsEndpoint = `${creditCategory}/${item}/credits`;
                let creditURL = this.apiURL + creditsEndpoint;
                axios.get(creditURL, {params:{api_key: '49513c8494c3b9a0b063220206dc74c8'}}).then((res)=>{
                    console.log(res.data.cast);

                    let titleCast = [];
                    let i = 0;
                    while(i < 5 && i < res.data.cast.length){
                        titleCast.push(res.data.cast[i].name);
                        i++;
                    }
                    // for(let i = 0; i < 5; i++){
                    //     titleCast.push(res.data.cast[i].name);
                    // }
                    console.log(titleCast);
                    this.titleCastList.push(titleCast);
                    console.log(this.titleCastList);
                })
            })
        })

        this.getGenres();
    },
    // RICERCA BANDIERE
    flagsAPIurl: 'https://countryflagsapi.com/png/',
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

    // RICERCA IMMAGINI COPERTINA
    getCoverImage(hash){
        const imgURL = this.baseImgURL + hash;

        return imgURL
    },

    genresList: [],
    genresEndpoint: ['genre/movie/list', 'genre/tv/list'],
    getGenres(){
        let genreURL = this.apiURL + this.genresEndpoint[this.activeCategory];
        axios.get(genreURL, this.genreFilter).then((res)=>{
            this.genresList = [...res.data.genres];
            
            console.log(this.genresList);
            // setTimeout(()=>{
            //     let filtGenre = this.genresList.filter(genre => genre.id == id);
            //     console.log(filtGenre);
            //     let parsed = JSON.parse(JSON.stringify(filtGenre));
            //     console.log(parsed[0].name);
            //     return this.parsed[0].name
            // }, 500)
            // let filtGenre = this.genresList.filter(genre => genre.id == id);
            // console.log(filtGenre);
            // let parsed = JSON.parse(JSON.stringify(filtGenre));
            // console.log(parsed[0].name);
            // return parsed[0].name
        })
    },
    parseGenre(id){
        // let parsed = [];
        // setTimeout(()=>{
        //     let filtGenre = this.genresList.filter(genre => genre.id == id);
        //     console.log(filtGenre);
        //     parsed = [...JSON.parse(JSON.stringify(filtGenre))];
        //     console.log(parsed[0].name);
        //     return parsed[0].name
        // }, 500)

        // return parsed[0].name
        let filtGenre = this.genresList.filter(genre => genre.id == id);
        let parsed = JSON.parse(JSON.stringify(filtGenre));
        
        console.log(parsed[0].name)

        return parsed[0].name
    }
})