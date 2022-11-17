<template>
    <div>
        <form @submit.prevent="store.callAPI(store.categoryEndpoint[store.activeCategory])">
            <input v-model="store.query" type="text" placeholder="search...">
            <button type="submit" class="btn btn-danger"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
</template>

<script>
import {store} from '../store.js'

    export default {
        name: 'SearchBarComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>