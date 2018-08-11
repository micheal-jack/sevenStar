<template>
	 <div class = "footer">
      <div class = "footerBox">
        <p>Copyright ©2013 电信与信息服务业务经营许可证100798号  企业法人营业执照  京ICP备11031139号  京公网安备110108006045</p>
        <p>客服邮箱：文明办网文明上网举报电话：010-82615762  违法不良信息举报中心</p>
      </div>
    </div>
</template>
<script>
	export default {

	}
</script>
<style>
	.footer{
    /*margin-top:236px;*/
    width:100%;
    height:90px;
    border-top:1px solid #f2f2f2;
}
.footerBox{
    width:1200px;
    height:90px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.footerBox p{
    font-size:12px;
    color:#bfbfbf;
    line-height:26px;
}
</style>