<script>
  import { state } from './state.js'
  import SiteHeader from "./components/SiteHeader.vue"
  export default{
    name: "app",
    components:{
      SiteHeader
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
</template>

<style lang="scss">

</style>
