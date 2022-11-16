<template>
    <div>
        <form @submit.prevent="store.callAPI(store.categoryEndpoint[0])">
            <input v-model="store.query" type="text" placeholder="cerca...">
            <button type="submit" class="btn btn-danger">Cerca</button>
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