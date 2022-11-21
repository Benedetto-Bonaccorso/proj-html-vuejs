<script>
    import HeaderBanner from "./HeaderBanner.vue"
    export default{
        name: "SiteHeader",
        components: {
            HeaderBanner
        },

    }
</script>
<template>
    <HeaderBanner />
    <div class="border-bottom-5">
        <div class="container">
            <a href="#" class="">
                <img class="py-4 logo" src="../assets/logo-default-slim.png" alt="">
            </a>
        </div>
    </div>
    <div class="container d-flex justify-content-between fw-bold pt-4">
        <div class="top-links d-flex">
            <a href="#" class="text-black text-decoration-none active py-1 pe-4"><p>HOME</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>ELEMENTS</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>FEATURES</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>PAGES</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>PORTFOLIO</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>BLOG</p></a>
            <a href="#" class="text-black text-decoration-none px-4"><p>SHOP</p></a>
        </div>
        <div class="searchToggle">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</template>
<script>

</script>