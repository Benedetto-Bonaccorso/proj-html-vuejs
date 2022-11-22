<script>
import { state } from "../state.js"
    export default{
        name: "PostDisplay",
        data(){
            return{
                state
            }
        },
    }
</script>

<template>
    <div id="postDisplay">

        <div class="container">
            <div class="row">
                <div class="col-4">

                    <h5 class="fs-bold py-4">POPULAR POSTS</h5>

                    <div v-for="article in state.popularArticles" class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" :src="state.path+article.img" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">{{article.title}}</h6>
                            <p class="text-muted text-small m-0">{{article.date.substr(-8)}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">

                    <h5 class="fs-bold py-4">RECENT POSTS</h5>

                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">Titolo Articolo</h6>
                            <p class="text-muted text-small m-0">Data Articolo</p>
                        </div>
                    </div>
                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">Titolo Articolo</h6>
                            <p class="text-muted text-small m-0">Data Articolo</p>
                        </div>
                    </div>
                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">Titolo Articolo</h6>
                            <p class="text-muted text-small m-0">Data Articolo</p>
                        </div>
                    </div>
                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">Titolo Articolo</h6>
                            <p class="text-muted text-small m-0">Data Articolo</p>
                        </div>
                    </div>
                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">Titolo Articolo</h6>
                            <p class="text-muted text-small m-0">Data Articolo</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">

                    <h5 class="fs-bold py-4">FEATURED POSTS</h5>
                    <div class="pb-4 position-relative">
                    <img class="article-img" :src="state.path+state.articles[state.featuredPostRng].img" alt="">
                    <div class="article-info position-absolute">

                    </div>
                    <div class="article-info position-absolute">
                        <h6 class="article-category text-white">{{state.articles[state.featuredPostRng].categories[0]}}</h6>
                        <h4 class="article-name text-white">{{state.articles[state.featuredPostRng].title}}</h4>
                    </div>
                </div>
                
                    <h5 class="fs-bold py-4">FEATURED AUTHOR</h5> 
                    <div class="article-card d-flex align-items-center py-2">
                        <img class="article-card-img-big" src="../assets/blog-40.jpg" alt="">
                        <div class="article-card-info">
                            <h6 class="m-0">{{state.articles[state.featuredPostRng].authorName}}</h6>
                            <p class="text-muted text-small m-0">{{state.articles[state.featuredPostRng].authorQuote}}</p>
                        </div>
</div>
                </div>
            </div>
        </div>
    </div>
</template>