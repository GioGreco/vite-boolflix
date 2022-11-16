<template>
  <HeaderComponent/>
  <main>
    <TitleListComponent/>
  </main>
</template>

<script>
import {store} from './store.js';

import HeaderComponent from './components/HeaderComponent.vue';
import TitleListComponent from './components/TitleListComponent.vue'

  export default {
    components: {
      HeaderComponent,
      TitleListComponent
    },
    data(){
      return{
        store,
      }
    },
    created(){
      store.callAPI(store.popularEndpoint[0])
    }
  }
</script>

<style lang="scss" scoped>

</style>
