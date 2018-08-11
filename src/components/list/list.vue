<template>
    <div>
        <h3 class = "h3">API列表>订单API</h3>
        <div class = "list">
            <span class = "circle"></span>
            <p class = "p2">订单API</p>
        </div>
        <p class = "p1">提供订单的获取、查询功能。</p>
        <div class = "list">
            <span class = "circle"></span>
            <p class = "p2">商品API</p>  
        </div>
        <p class = "p1">提供商品的获取、添加、查询功能。</p>
        <div class = "list">
            <span class = "circle"></span>
            <p class = "p2">类目API</p>   
        </div>
        <p class = "p1">提供商品类目的获取、添加、查询功能。</p> 
	</div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    /* .rightBox{
        width:973px;
        height:auto;
    } */
    .rightBox h3{
        font-size:14px;
        color:#333333;
        font-weight:bold; 
        height:38px;
        line-height:38px;
        margin-bottom:24px;
    }
    .rightBox .p1{
        font-size:12px;
        color:#999999;
        line-height:30px;
        padding-left:16px;
        margin-bottom:10px;
    }
    .rightBox .h3{
        font-weight: normal;
        margin-bottom:20px;
    }
    .rightBox .p2{
        font-size:14px;
        color:#333333;
        line-height:24px;
    }
    .list{
        display:flex;
        height: 24px;
        align-items: center;

    }
    .circle{
        display:block;
        width:5px;
        height:5px;
        border-radius:50%;
        background:#90c424;
        margin-right:12px;
    }
</style>