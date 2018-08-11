<template>
    <div>
        <h3 class = "h3">订单API</h3>
        <div class = "list">
            <p class = "title" >
                <span>API列表</span>
                <span>类型</span>
                <span>描述</span>
            </p>
            <p class = "cont" v-for="(item,index) in describeList" >
                <span>{{item.method}}</span>
                <span>{{apiListIndex}}</span>
                <span>{{item.interface}}</span>
            </p>
        </div>
	</div> 
</template>

<script>
    export default {
        props:[
            'apiList',
            'data',
            'apiListIndex'
        ],
        data(){
            return {
                describeList:[
                    {method:'1',type:'2',interface:'3'}
                ]
            }
        },
        mounted(){
            this.changeStyle();
            console.log('index',this.apiListIndex)
        },
        methods:{
            changeStyle(){
                var that = this;
                var arr  = this.apiList; 
                console.log('this is a ',arr)
                arr.forEach((item,index)=>{
                     console.log('this is a ',item)
                     var obj = {};
                    obj.method    = item.category_name;
                    obj.type      = item.type;
                    obj.interface = item.category_desc;
                    that.describeList.push(obj);
                })
            },
           

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
    .list{
        width:973px;
        height:auto;
    } 
    .list p{
        width:100%;
        display:grid;
        padding-left:42px;
        grid-template-columns: 197px 170px 410px;
        font-size:12px;
        font-family: "宋体";
    }
    .list .title{
        background:#f5f5f5;
        color:#999999;
        height:30px;
        line-height:30px;
    }
    .list .cont{
        color:#666666;
        line-height:40px;
        border-bottom:1px solid #f2f2f2;
    }
    .list .cont2{
        padding-top:12px;
        padding-bottom:12px;
        line-height:16px;
        color:#666666;
        border-bottom:1px solid #f2f2f2;
    }
</style>