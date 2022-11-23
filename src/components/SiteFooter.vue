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
    <div id="pageFooter" class="mt-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h4 class="text-white">
                        ABOUT THE BLOG
                    </h4>
                    <p class="text-gray">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sint cupiditate veniam beatae enim dolorum tempora fugit, assumenda quis cum nihil, ipsam totam ipsum? Nam molestias quos excepturi laboriosam vitae.
                    </p>
                    <p class="text-gray">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sint cupiditate veniam beatae enim dolorum tempora fugit, assumenda quis cum nihil, ipsam totam ipsum? Nam molestias quos excepturi laboriosam vitae.
                    </p>
                </div>
                <div class="col-3">
                    <h4 class="text-white">
                        RECENT POSTS
                    </h4>
                    <div class="recent-post d-flex my-2">
                        <img src="../assets/29415304_166583630713703_1032667922171953152_n.jpg" alt="" class="post-pfp me-4">
                        <div class="recent-post-info">
                            <p class="text-white">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p class="text-gray">
                                Lorem, ipsum dolor.
                            </p>
                        </div>
                    </div>
                    <div class="recent-post d-flex my-2">
                        <img src="../assets/30087804_253872848488989_8792603541668626432_n.jpg" alt="" class="post-pfp me-4">
                        <div class="recent-post-info">
                            <p class="text-white">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p class="text-gray">
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
                            <i class="fa-solid fa-chevron-right text-color-blue pe-2 my-1"></i>
                            <p>
                                <span class="text-bold">John Doe</span>
                                commented on
                                <a href="#" class="text-decoration-none text-color-blue">Lorem ipsum dolor sit amet.</a>
                            </p>
                        </div>
                        <p class="text-gray">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    <div class="recent-comment text-white my-2">
                        <div class="recent-comment-body d-flex">
                            <i class="fa-solid fa-chevron-right text-color-blue pe-2 my-1"></i>
                            <p>
                                <span class="text-bold">John Doe</span>
                                commented on
                                <a href="#" class="text-decoration-none text-color-blue">Lorem ipsum dolor sit amet.</a>
                            </p>
                        </div>
                        <p class="text-gray">
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                </div>
                <div class="col-2">
                    <h4 class="text-white">CATEGORIES</h4>
                    <div class="categories d-flex flex-wrap text-white">
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            GADGETS
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            PHOTOGRAPHY
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            LIFESTYLE
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            FASHION
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            RECIPES
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            TRAVEL
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            BUSINESS
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            ARCHITECTURE
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            REVIEWS
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            SPORTS
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            VIDEOS
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            TECHNOLOGY
                            </a>
                        </div>
                        <div class="category">
                            <a href="#" class="text-decoration-none text-white">
                            DESIGN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PageBottom />
</template>
