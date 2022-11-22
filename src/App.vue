<script>
  import { state } from './state.js'
  import SiteHeader from "./components/SiteHeader.vue"
  import SiteMain from './components/SiteMain.vue'
  import SiteFooter from "./components/SiteFooter.vue"
  export default{
    name: "app",
    components:{
      SiteHeader,
      SiteMain,
      SiteFooter,
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
  <SiteFooter />
</template>

<style lang="scss">

</style>
