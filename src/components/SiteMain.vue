<script>
    import HotArticles from "./HotArticles.vue"
    import PostDisplay from "./PostDisplay.vue";
    import FullWidthButtons from "./FullWidthButtons.vue";
    import MainArticles from "./MainArticles.vue";
    export default{
        name: "SiteMain",
        components: {
            HotArticles,
            PostDisplay,
            FullWidthButtons,
            MainArticles,
        },

    }
</script>
<template>
    <div id="siteMain">
        <HotArticles />
        <PostDisplay />
        <FullWidthButtons />
        <MainArticles />
    </div>
</template>
<script>

</script>