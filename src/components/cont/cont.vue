<template>
    <div>
        <h3 class = "h3">
            <span>基础</span>查询促销列表信息
        </h3>
        <div class = "list">
            <p class = "title" @click = "open(0)"><span>APP功能描述</span><img class = "img"  src = "./down.png">
            </p>
            <div :class = "[isHidden1 ? isShow : noShow]" >
                <p class = "cont"  v-pre>
                    public statc void main () {
                            
                    }
                </p>
            </div>

        </div>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        methods:{
           
        }
    }
</script>

<style scoped>
    .h3{
        font-size:14px;
        color:#666;
        font-weight:bold; 
        height:38px;
        line-height:38px;
        margin-bottom:24px;
    }
    .h3 span{
        background:#90c424;
        color:#fff;
        margin-right:10px;
        padding:3px;
    }
    .list{
        width:973px;
        height:auto;
    } 
    .list p{
        width:100%;
        display:flex;
        font-size:14px;
        font-family: "宋体";
    }
    .list .title{
        justify-content: space-between;
        background:#f5f5f5;
        color:#999999;
        padding:0 17px;
        height:30px;
        align-items: center;
        margin-top:5px;
        cursor: pointer;
    }
    .list .cont{
        padding:25px 0 25px 42px;
        color:#666666;
    }
    .tableBox{
        padding-left:42px;
        padding-right:39px;
        padding-top:20px;
    }
    .list .cont1{
        width:100%;
        display:grid;
        padding-left:42px;
        grid-template-columns: 130px 140px 150px 408px;
        font-size:12px;
        font-family: "宋体";
        color:#666666;
        line-height:40px;
        border-bottom:1px solid #f2f2f2;
    }
    .list .cont2{
        display:grid;
        padding-left:42px;
        grid-template-columns: 130px 140px 150px 408px;
        padding-top:12px;
        padding-bottom:12px;
        line-height:16px;
        color:#666666;
        border-bottom:1px solid #f2f2f2;
    }
    .list .cont3{
        padding-left:42px;
        line-height:24px;
        color:#666666;
    }
    .cont4{
        padding-left:14px;
    }
    .tableBox2{
        padding:20px 0;
    }
    .hidden{
        display:none;
    }
    .isShow{
        display:block;
    }
</style>