<script>
    export default{
        name: "FullWidthButtons",
        data(){
            return{
                buttonPages: 2,
                currentButtons: 1
            }
        },
        methods:{
            currentButtonsUp(){
                if(this.currentButtons < this.buttonPages){
                    this.currentButtons++
                }
            },
            currentButtonsDown(){
                if(this.currentButtons > 1){
                    this.currentButtons--
                }
            }
        }
    }
</script>

<template>
    
    <div id="fullWidthButtons" class="d-flex align-items-center px-4 my-5">
        <i class="fa-solid fa-angle-left fs-1" v-on:click="currentButtonsDown()"></i>
        <div v-if="currentButtons == 1" class="container d-flex align-items-center justify-content-evenly p-4">
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">GADGETS</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">PHOTOGRAPHY</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">LIFESTYLE</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">FASHION</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">RECIPES</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">TRAVEL</a>
        </div>
        <div v-if="currentButtons == 2" class="container d-flex align-items-center justify-content-evenly p-4">
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">TECHNOLOGY</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">FAMILY</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">PETS</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">POLITICS</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">ENVIRONMENT</a>
            <a href="#" class="text-white text-decoration-none bg-gray py-3 px-4">CELEBRITIES</a>
        </div>
        <i class="fa-solid fa-angle-right fs-1" v-on:click="currentButtonsUp()"></i>
    </div>

</template>
