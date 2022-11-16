<template>
    <header>
        <h1>
            Boolflix
        </h1>
        <SearchBarComponent/>
    </header>
</template>

<script>
import SearchBarComponent from './SearchBarComponent.vue';

    export default {
        name: 'HeaderComponent',
        components: {
            SearchBarComponent
        }
    }
</script>

<style lang="scss">
@use '../assets/styles/partials/mixins.scss' as *;

header{
    @include dflex;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    h1{
        color: red;
        text-transform: uppercase;
    }
    input{
        padding: 5px;
        border-radius: 10px;
        margin: 0 10px;
        background-color: transparent;
        border: none;
        color: grey
    }
}
    
</style>