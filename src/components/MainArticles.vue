<script>
import { state } from '../state';

    export default{
        name: "MainArticles",
        data(){
            return{
                state,
                currentPage: 1,
                maxPages: 2
            }
        },
        methods:{
            pageUp(){
                if(this.currentPage < this.maxPages){
                    this.currentPage++
                }
            },
            pageDown(){
                if(this.currentPage > 1){
                    this.currentPage--
                }
            }
        }
    }
</script>

<template>
    
    <div id="mainArticles">
        <div class="container">
            <div class="row">
                <div class="col-9">

                    <div v-if="currentPage == 1" v-for="(article, i) in state.articles.slice(0, 5)" class="main-article">
                        <img class="main-article-img" :src="state.path+article.img" :alt="article.title">
                        <div class="main-article-body d-flex my-4">
                            <div class="article-date me-4 my-4 d-flex flex-column align-items-center">
                                <p class="article-day p-4 mb-0">
                                    {{article.date.slice(-7, -5)}}
                                </p>
                                <p class="article-month px-2 w-100 text-center">
                                    {{article.date.slice(0, 3)}}
                                </p>
                            </div>
                            <div class="main-article-info">
                                <h3>{{article.title}}</h3>
                                <p class="text-gray w-75">
                                    {{article.content}}
                                </p>
                                <div class="main-article-interactions d-flex justify-content-between">
                                    <div class="main-article-interaction-left">
                                        <i class="fa-regular fa-user ms-3 me-2"></i>
                                        <a href="#" class="text-decoration-none">{{article.authorName}}</a>
                                        <i class="fa-regular fa-folder ms-3 me-2"></i>
                                        <a v-for="category in article.categories" href="#" class="text-decoration-none">{{category}}, </a>
                                        <i class="fa-regular fa-comments ms-3 me-2"></i>
                                        <a href="#" class="text-decoration-none">{{article.comments}} comments</a>
                                    </div>
                                    <div class="main-article-interaction-right">
                                        <a href="#" class="read-more">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="currentPage == 2" v-for="(article, i) in state.articles.slice(6, 10)" class="main-article">
                        <img class="main-article-img" :src="state.path+article.img" :alt="article.title">
                        <div class="main-article-body d-flex my-4">
                            <div class="article-date me-4 my-4 d-flex flex-column align-items-center">
                                <p class="article-day p-4 mb-0">
                                    {{article.date.slice(-7, -5)}}
                                </p>
                                <p class="article-month px-2 w-100 text-center">
                                    {{article.date.slice(0, 3)}}
                                </p>
                            </div>
                            <div class="main-article-info">
                                <h3>{{article.title}}</h3>
                                <p class="text-gray w-75">
                                    {{article.content}}
                                </p>
                                <div class="main-article-interactions d-flex justify-content-between">
                                    <div class="main-article-interaction-left">
                                        <i class="fa-regular fa-user ms-3 me-2"></i>
                                        <a href="#" class="text-decoration-none">{{article.authorName}}</a>
                                        <i class="fa-regular fa-folder ms-3 me-2"></i>
                                        <a v-for="category in article.categories" href="#" class="text-decoration-none">{{category}}, </a>
                                        <i class="fa-regular fa-comments ms-3 me-2"></i>
                                        <a href="#" class="text-decoration-none">{{article.comments}} comments</a>
                                    </div>
                                    <div class="main-article-interaction-right">
                                        <a href="#" class="read-more">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-3">

                    <h4 class="my-4">
                        LATEST FROM TWITTER
                    </h4>
                    <div class="tweet d-flex my-4">
                        <div class="twitter-logo me-2">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div class="tweet-content">
                            <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia.</p>
                            <a href="#" class="text-decoration-none m-0">Lorem ipsum dolor sit.</a>
                        </div>
                    </div>
                    <div class="tweet d-flex">
                        <div class="twitter-logo me-2">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div class="tweet-content">
                            <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia.</p>
                            <a href="#" class="text-decoration-none m-0">Lorem ipsum dolor sit.</a>
                        </div>
                    </div>

                    <h4 class="my-4">
                        PHOTOS FROM INSTAGRAM
                    </h4>
                    <div class="photoMosaic d-flex flex-wrap">
                        <img src="../assets/blog-20.jpg" alt="">
                        <img src="../assets/blog-13.jpg" alt="">
                        <img src="../assets/blog-16.jpg" alt="">
                        <img src="../assets/blog-23.jpg" alt="">
                        <img src="../assets/blog-29.jpg" alt="">
                        <img src="../assets/blog-40.jpg" alt="">
                    </div>
                    <h4 class="my-4">
                        TAGS
                    </h4>
                    <div class="tags-displayer font-small">
                        <p class="badge rounded-pill tag mx-1">DESIGN</p>
                        <p class="badge rounded-pill tag mx-1">SPORT</p>
                        <p class="badge rounded-pill tag mx-1">POLITICS</p>
                        <p class="badge rounded-pill tag mx-1">PETS</p>
                        <p class="badge rounded-pill tag mx-1">FAMILY</p>
                    </div>

                    <h4 class="my-4">
                        FIND US ON FACEBOOK
                    </h4>
                    <div class="mid-page-link ps-4 py-1">
                        <a href="#" class="text-decoration-none">Okler Themes</a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="currentPage == 1" class="page-buttons">
            <button class="page-button inactive-button" v-on:click="pageDown"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="page-button active-button" v-on:click="currentPage=1">1</button>
            <button class="page-button inactive-button" v-on:click="currentPage=2">2</button>
            <button class="page-button inactive-button" v-on:click="pageUp"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div v-if="currentPage == 2" class="page-buttons">
            <button class="page-button inactive-button" v-on:click="pageDown"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="page-button inactive-button" v-on:click="currentPage=1">1</button>
            <button class="page-button active-button" v-on:click="currentPage=2">2</button>
            <button class="page-button inactive-button" v-on:click="pageUp"><i class="fa-solid fa-chevron-right"></i></button>
        </div>

    </div>

</template>
