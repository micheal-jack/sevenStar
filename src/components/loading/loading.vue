<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">正在载入...</p>
  </div>
</template>
<script >
  export default {

  }
</script>
<style >

  .loading{
  	/* width: 100%; */
    text-align: center;
    padding: 80px;
  }
   .loading  img{
		width: 30px;
		height: 30px;
   }
    .loading .desc{
    	line-height: 20px;
      font-size: 12px;
      color: #ccc;
    }
      
</style>
