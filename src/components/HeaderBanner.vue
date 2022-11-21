<script>
    export default{
        name: "HeaderBanner",
        data(){
            return{
                headerMessage: "Everything about Lifestyle, Travel and Gadgets"
            }
        }
    }
</script>

<template>
    
    <div class="headerBanner">
        <div class="container d-flex align-items-center p-1">
            <a class="text-light text-decoration-none me-3 text-small">{{headerMessage}}</a>
            <a href="#" class="text-white text-decoration-none m-2">SIGN IN</a>
            <a href="#" class="text-white text-decoration-none m-2">ABOUT US</a>
            <a href="#" class="text-white text-decoration-none m-2">CONTACT US</a>
            <a href="#" class="text-white text-decoration-none m-2">BUY NOW</a>
        </div>
    </div>

</template>
