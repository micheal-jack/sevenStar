<template>
	    <div class = "header">
      <div class = "headerBox">
        <a class = "logoBox" href="#">
        	<img src = "./logo.png"/>
        	<span class = "border"></span>
        	<span class = "openTxt">开放平台</span>
        </a>
        <ul class = "nav">
            <router-link to="/banner" >
              <li>首页</li>
            </router-link>
            <router-link to="/api"   >
              <li>API</li>
            </router-link>
            <router-link to="/help" >
              <li>帮助</li>
            </router-link>
        </ul>
      </div>
    </div>
</template>
<script type="text/javascript">
	export default {
  }
</script>

<style>
.header{
    width:100%;
    height:74px;
    background:#fff;
    border-bottom:4px solid #e53d35;
  }

  .headerBox{
      width:1200px;
      height:74px;
      margin:0 auto;
      display:flex;
      align-items: center;
  }
  .logoBox{
      height:34px;
      display:flex;
      align-items: center;
      margin-right:94px;
  }
  .border{
      display:inline-block;
      width:1px;
      height:31px;
      background:#f0918c;
      margin:0 10px 0 20px;
  }
  .openTxt{
      color:#595757;
      font-size:16px;
  }
  .nav{
      display:flex;
      height:74px;
      align-items: center;
  }
  .nav a {
    display: inline-block;
  }
  .nav li{
     /*  height:34px; */
      line-height:16px;
      margin-right:50px;
  }
  .nav li {
      display:block;
      font-size:16px;
      color:#f0918c;
      width:100%;
      height:100%;
      
  }
  .nav .active {
      color:#e2231a;
  }
.router-link-active li{
  color:#e2231a;
} 
</style>