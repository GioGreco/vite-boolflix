import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    categoryEndpoint: ['search/movie', 'search/tv'],
    popularEndpoint: ['movie/popular', 'tv/popular'],
    query: '',
    baseImgURL: 'https://image.tmdb.org/t/p/w342',
    titleList: [],
    titleCastList: [],
    titleGenreList: [],
    activeCategory: 0,


    callAPI(endpoint){
        this.getGenres();
        this.titleCastList = [];
        this.titleGenreList = [];
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
        //CHIAMATA A 'TMDB API' + raccolta degli id dei film/serie nell'array 'titleIDs'
        axios.get(apiurl, myFilter).then((res)=>{
            this.titleList = [...res.data.results];
            let titleIDs = [];
            this.titleList.forEach((item) => {
            titleIDs.push(item.id);
            });

            //RECUPERO DEL CAST: chiamo nuovamente l'api (endpoint diverso) per ogni id di film/serie, raccolgo i vari cast sotto forma di array in un altro array 'titleCastList'. Nel template ciclo poi su questo array per stampare attore per attore.
            titleIDs.forEach((item) => {
                let creditCategory = '';
                this.activeCategory == 0? creditCategory = 'movie' : creditCategory = 'tv';
                let creditsEndpoint = `${creditCategory}/${item}/credits`;
                let creditURL = this.apiURL + creditsEndpoint;
                axios.get(creditURL, {params:{api_key: '49513c8494c3b9a0b063220206dc74c8'}}).then((res)=>{
                    let titleCast = [];
                    let i = 0;
                    while(i < 5 && i < res.data.cast.length){
                        titleCast.push(res.data.cast[i].name);
                        i++;
                    }
                    this.titleCastList.push(titleCast);
                })
            })

            //CONVERSIONE DEI GENERI DA ID A NOME: 
            let parsedList = [];
            this.titleList.forEach((item) => {
                let parsed = [];
                item.genre_ids.forEach(item => {
                    let filtGenre = this.genresList.filter(genre => genre.id == item);
                    parsed.push(JSON.parse(JSON.stringify(filtGenre)));
                })
                parsedList.push(parsed);
            })
            parsedList.forEach(item => {
                let spreaded = [].concat(...item)
                this.titleGenreList.push(spreaded);
            })
        })
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

    //CONSERVO LA LISTA DEI GENERI IN UN ARRAY
    genresList: [],
    genresEndpoint: ['genre/movie/list', 'genre/tv/list'],
    getGenres(){
        let genreURL = this.apiURL + this.genresEndpoint[this.activeCategory];
        axios.get(genreURL, {params:{api_key: '49513c8494c3b9a0b063220206dc74c8'}}).then((res)=>{
            this.genresList = [...res.data.genres];
            
            console.log(this.genresList);
        })
    }
})