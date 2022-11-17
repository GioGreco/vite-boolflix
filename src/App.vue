<template>
  <HeaderComponent/>
  <main>
    <CategorySelectorComponent/>
    <TitleListComponent/>
  </main>
</template>

<script>
import axios from 'axios';
import {store} from './store.js';

import HeaderComponent from './components/HeaderComponent.vue';
import TitleListComponent from './components/TitleListComponent.vue';
import CategorySelectorComponent from './components/CategorySelectorComponent.vue';

  export default {
    components: {
    HeaderComponent,
    TitleListComponent,
    CategorySelectorComponent
    },
    data(){
      return{
        store,
      }
    },
    created(){
      store.callAPI(store.popularEndpoint[store.activeCategory]);
    }
  }
</script>

<style lang="scss" scoped>

</style>
