<template>
  <HeaderComponent/>
</template>

<script>
import {store} from './store.js';

import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: {
      HeaderComponent
    },
    data(){
      return{
        store,

      }
    },
    created(){
      store.callAPI(store.popularEndpoint[1])
    }
  }
</script>

<style lang="scss" scoped>

</style>
