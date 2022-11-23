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
        state,
      }
    },
    computed: {
      filteredHotArticles(){
        return this.state.slice(0,this.state.maxHotArticles)
      }
    },
    mounted(){

      for(let i = 0; i < this.state.maxHotArticles; i++){
        this.state.hotArticles.push(this.state.articles[i])
      }

      /*
      for(let i = 0; i < this.state.maxRecentArticles; i++){
        this.state.recentArticlesTemporaryArray.push(this.state.articles[i])
      }
      */

      // sorting articles my month

      this.state.recentArticlesTemporaryArray = this.state.articles.sort((a, b) =>  Number(b.date.slice(-7, -5)) - Number(a.date.slice(-7, -5)))

      // Only selecting articles from 2019

      this.state.recentArticlesTemporaryArray.forEach(article => {
        if(article.date.slice(-4) == 2019 && this.state.recentArticles.length < this.state.maxRecentArticles){
          this.state.recentArticles.push(article)

        }
      });
      
      //sorting the articles by most popular (using likes)

      this.state.popularArticlesTemporaryArray = this.state.articles.sort((a, b) =>  a.likes - b.likes)

      //only taking the top 5 most liked and putting them in an array

      for(let i = this.state.popularArticlesTemporaryArray.length - 1;
       i > this.state.popularArticlesTemporaryArray.length - this.state.maxPopularArticles - 1 ; i--){
        this.state.popularArticles.push(this.state.popularArticlesTemporaryArray[i])
      }

      //sorting posts by most recent

      

      //randomly choosing an article to feature on the front page

      this.state.featuredPostRng = Math.floor(Math.random()*this.state.articles.length +1)
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
