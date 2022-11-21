<script>
    import HotArticles from "./HotArticles.vue"
    import PostDisplay from "./PostDisplay.vue";
    import FullWidthButtons from "./FullWidthButtons.vue";
    export default{
        name: "SiteMain",
        components: {
            HotArticles,
            PostDisplay,
            FullWidthButtons,
        },

    }
</script>
<template>
    <div id="siteMain">
        <HotArticles />
        <PostDisplay />
        <FullWidthButtons />
    </div>
</template>
<script>

</script>