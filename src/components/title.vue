<template>
    <div class="header" :style="{'background-color':bg}">
        <div class="imgDiv" @click="goBack" >
            <image class="backImg" :src="backurl"></image>
        </div>
        <text class="title">{{title}}</text>
        <text class="homepage" v-if="show" @click="goHome">主页</text>
    </div>
</template>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        height: 120px;
        width: 750px;
        padding-top: 30px;
        /*border-bottom-width: 1px;*/
        /*border-bottom-style: solid;*/
        /*border-bottom-color: rgb(229, 229, 229);*/
        /* background-color: #e3392f; */
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .imgDiv {
        height: 50px;
        width: 50px;
        left: 30;
        justify-content: center;
        align-items: center;
    }


    .backImg {
        height: 50px;
        width: 50px;
    }

    .title {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 38px;
        color: #070707;
    }
    .homepage{
        font-size: 30px;
        right: 30px;
        color: #070707;
    }
</style>
<script>

    const modal = weex.requireModule('modal')

    export default {
        props: [
            "title",
            "show",
            "bg"
        ],
        data() {
            return {
                backurl: this.$store.state.imgBaseUrl + "nav_back.png"
            }
        },
        methods: {
        
        }
    }
</script>