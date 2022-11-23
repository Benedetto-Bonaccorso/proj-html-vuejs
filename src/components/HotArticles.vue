<script>
import {state} from "../state.js"
    export default{
        name: "HotArticles",
        data(){
            return{
                state,
            }
        }
    }
</script>

<template>
    <div id="hotArticles">
        <div class="container">
            <div class="row">

                <div v-for="article in state.hotArticles" class="col-4 pb-4 position-relative article-img-wrapper">
                    <img class="article-img" :src="state.path+article.img" alt="">
                    <div class="article-info position-absolute">

                    </div>
                    <div class="article-info position-absolute">
                        <h6 class="article-category text-white">{{article.categories[0]}}</h6>
                        <h4 class="article-name text-white">{{article.title}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>