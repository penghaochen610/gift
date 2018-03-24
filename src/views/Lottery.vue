<template>
    <div class="Bg">
        <title :title="Title" :show="Show" :bg="TitleBarBg"></title>
        <scroller >
            <div class="gap"></div>
            <text>{{flag}}</text>
            <div class="prizeBox">
                <div class="prizeItem" v-for="item in prizeList" :key="item.id" ref="pice" @click="lottery(item.id)">
                    <image class="prizeImage" :src="Gift" v-if="prizeIndex==item.id"/>
                    <image class="prizeImage" :src="item.url" v-if="prizeIndex!=item.id"/>
                    <text>{{item.text}}</text>
                </div>
            </div>
           
        </scroller>
    </div>
</template>
<style src="../static/css/style.css">
    .a{
        align-items: center;
        justify-content:center;
    }
</style>
<style scoped>
    .Bg {
        background-color: #f4f5f9;
        flex: 1;
    }
    .prizeBox{
        flex-direction: row;
        flex-wrap: wrap;
        
    }
    .prizeItem{
        width:240px;
        height: 240px;
        align-items: center;
        justify-content:center;
    }
    .prizeImage{
        width: 180px;
        height: 180px;
    }
</style>
<script>

    import Title from '../components/titleR.vue'
    const modal = weex.requireModule('modal')
    export default {
        components: {
            Title
        },
        mounted(){
            this.init();
        },
        data() {
            return {
                Title: "抽奖",
                Show: true,
                TitleBarBg: "#e3392f",

                Gift:this.$store.state.imgBaseUrl + "borderSelect.png",//选中图片
                NoGift:this.$store.state.imgBaseUrl + "border.png",//默认图片

                intervalTimer:"",
                timeOutTimer:"",
                flag:true,//是否允许点抽奖
                prizeIndex:0,//当前选中单位
                giftStatus:0,//后台返回中奖单位
                prizeList:[
                    {"id":"0","text":"一等奖",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"1","text":"二等奖",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"2","text":"三等奖",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"3","text":"无",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"4","text":"",url:this.$store.state.imgBaseUrl + "prizeBtnIng.png"},
                    {"id":"5","text":"二等奖",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"6","text":"三等奖",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"7","text":"无",url:this.$store.state.imgBaseUrl + "border.png"},
                    {"id":"8","text":"无",url:this.$store.state.imgBaseUrl + "border.png"}
                ]

            }
        },
        methods:{
            //初始化
            init(){
                this.flag=true;
                this.prizeIndex=0;
            },
            //点击抽奖按钮
            lottery(index){
                if(!this.flag){
                    return;
                }
                if(index=="4"){
                    // this.init(); 
                    this.start();
                }
            },
            //开始抽奖
            start(){ 
                //-----测试
                this.giftStatus=Math.ceil(Math.random()*9)-1
                console.log("中奖位置："+this.giftStatus+"不能是4");
                if(this.giftStatus==4) this.giftStatus=5;
                //-----
                this.flag=false; 
                this.cartoon();
                this.intervalTimer=setInterval((data)=>{
                    this.cartoon();
                },100)
                this.timeOutTimer=setTimeout((data)=>{
                    clearInterval(this.intervalTimer);
                    this.slowDown()
                    // this.stop();
                    // this.getGift();
                },4000)
            },
            //停止抽奖
            stop(){
                clearInterval(this.intervalTimer);
                clearTimeout(this.timeOutTimer);
            },
            //抽奖动画
            cartoon(){
                // this.prizeListNew[this.prizeIndex].url=this.$store.state.imgBaseUrl + "borderSelect.png";
                switch (this.prizeIndex) {
                        case 0:this.prizeIndex=1;break;
                        case 1:this.prizeIndex=2;break;
                        case 2:this.prizeIndex=5;break;
                        case 3:this.prizeIndex=0;break;
                        case 5:this.prizeIndex=8;break;
                        case 6:this.prizeIndex=3;break;
                        case 7:this.prizeIndex=6;break;
                        case 8:this.prizeIndex=7;break;
                    }
            },
            //根据中奖位置降速停止
            slowDown(speed){
                if(!speed) speed=100;
                this.stop();
                if(speed>=400){
                    if(this.prizeIndex==this.giftStatus){
                         this.stop();
                         this.getGift();
                         return;
                    }
                }
                this.intervalTimer=setInterval((data)=>{
                    this.cartoon();
                },speed)
                this.timeOutTimer=setTimeout((data)=>{
                    if(speed>=400){
                        this.slowDown(speed+20)
                    }else{
                        this.slowDown(speed+80)
                    }
                   
                },900)
                
            },
            //获奖情况
            getGift(){
                modal.alert({
                    message: `恭喜你获得${this.prizeList[this.giftStatus].text}!`,
                    okTitle : '确认'
                },()=>{
                    this.flag=true;//允许再次抽奖
                })
            }
        }
    }
</script>