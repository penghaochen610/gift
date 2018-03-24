<template>
  <div @clickbackitem="goBack">
    <!--主界面-->
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created(){
    }
  }
</script>
