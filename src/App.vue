<template>
  <div id="app">
    <Header></Header>
     <keep-alive>
        <router-view></router-view>
     </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from 'components/header/header'
  import Footer from 'components/footer/footer'
  
 
  export default {
    components :{
      Header,Footer
    }
  }
</script>

<style>
  @import "assets/style/reset.css";
</style>
