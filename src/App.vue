<script>
  import { state } from './state.js'
  import SiteHeader from "./components/SiteHeader.vue"
  import SiteMain from './components/SiteMain.vue'
  export default{
    name: "app",
    components:{
      SiteHeader,
      SiteMain
    },
    data(){
      return{
        state
      }
    },
    mounted(){

    }
  }
</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>

<style lang="scss">

</style>
