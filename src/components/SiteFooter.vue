<script>
    import PageBottom from './PageBottom.vue';
    export default{
        name: "SiteFooter",
        components: {
            PageBottom
        },

    }
</script>
<template>
    <div id="pageFooter" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h4 class="text-white">
                        ABOUT THE BLOG
                    </h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sint cupiditate veniam beatae enim dolorum tempora fugit, assumenda quis cum nihil, ipsam totam ipsum? Nam molestias quos excepturi laboriosam vitae.
                    </p>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sint cupiditate veniam beatae enim dolorum tempora fugit, assumenda quis cum nihil, ipsam totam ipsum? Nam molestias quos excepturi laboriosam vitae.
                    </p>
                </div>
                <div class="col-3">
                    <h4 class="text-white">
                        RECENT POSTS
                    </h4>
                    <div class="recent-post d-flex">
                        <img src="../assets/29415304_166583630713703_1032667922171953152_n.jpg" alt="" class="post-pfp me-4">
                        <div class="recent-post-info">
                            <p class="text-white">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p class="text-muted">
                                Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <h4 class="text-white">
                        RECENT COMMENTS
                    </h4>
                    <div class="recent-comment text-white my-2">
                        <div class="recent-comment-body d-flex">
                            <i class="fa-solid fa-chevron-right pe-2"></i>
                            <p>
                                <span class="text-bold">John Doe</span>
                                commented on
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </p>
                        </div>
                        <p class="text-muted">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    <div class="recent-comment text-white my-2">
                        <div class="recent-comment-body d-flex">
                            <i class="fa-solid fa-chevron-right pe-2"></i>
                            <p>
                                <span class="text-bold">John Doe</span>
                                commented on
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </p>
                        </div>
                        <p class="text-muted">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                </div>
                <div class="col-2">
                    <h4 class="text-white">CATEGORIES</h4>
                    <div class="categories d-flex flex-wrap text-white">
                        <div class="category">
                            GADGETS
                        </div>
                        <div class="category">
                            PHOTOGRAPHY
                        </div>
                        <div class="category">
                            LIFESTYLE
                        </div>
                        <div class="category">
                            FASHION
                        </div>
                        <div class="category">
                            RECIPES
                        </div>
                        <div class="category">
                            TRAVEL
                        </div>
                        <div class="category">
                            BUSINESS
                        </div>
                        <div class="category">
                            ARCHITECTURE
                        </div>
                        <div class="category">
                            REVIEWS
                        </div>
                        <div class="category">
                            SPORTS
                        </div>
                        <div class="category">
                            VIDEOS
                        </div>
                        <div class="category">
                            TECHNOLOGY
                        </div>
                        <div class="category">
                            DESIGN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PageBottom />
</template>
