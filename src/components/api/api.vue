<template>
    <div class = "helpBox">
        <div class = "topBox" @click = "showChildItem()">API列表</div>
        <div class = "help">
            <div class = "leftBox">
                <div class = "title" @click='showAPI'>API列表</div>
                <div class = "active"  v-for="(value,index) in apiList">
                   
                    <div class = "item" @click ="showChildItem(index)">
                        <img  class = "icon" src="./plus.png" v-if="value.apiitem.length"/>
                        <img  class = "icon" src="./add.png" v-else/>
                         {{value.api.category_name}}
                    </div>
                    <ul class = "isActive">
                            <li  v-for="(item,itemIndex) in value.apiitem ">
                                <div class = "itemTop" >
                                    <p>{{item.title}}</p>
                                </div>
                                <p class = "itemBottom">{{item.content}}</p>
                            </li>
                    </ul>  
                </div>
            </div>
            <div class = "rightBox">
                <Loading v-if="apiList.length==0"></Loading>
                <div v-else>
                    <keep-alive>
                         <router-view :apiList="apiList" 
                                      :data="data" 
                                      :apiListIndex="apiListIndex">
                         </router-view>
                    </keep-alive>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from 'components/Loading/Loading'
    import {getAPIList,getListList,getParticularMessage} from 'ajax/api'
          // getAPIList  getListList  getParticularMessage
    export default {
    components :{
      Loading
    },
    data () {
        return {
            data:1,
            apiListIndex:0,
            apiList:[
                {
                    'apiitem':[{title:'title',content :'内容'}],
                    'api':'a'
                },

            ],

        }
       },
    mounted(){
        this._getList();
        this._getListList();
        this._getParticularMessage();
    },
    methods:{
     _getList(){
            getAPIList((res)=>{
               this.setAPITitle(res.data.result);
               console.log('1',res.data.result);
            },(err)=>{
                //请求失败
            });
      },
      // getAPIList  getListList  getParticularMessage
     _getListList(){
            let str = 'CC00001';
            getListList(str,(res)=>{
                console.log('2',res.data.result);
            },(err)=>{
                //请求失败
            });
      },
      _getParticularMessage(){
            let str = 'CC00004';
            getParticularMessage(str,(res)=>{
                 console.log('3',res.data.result);
            },(err)=>{
                //请求失败
            });
      },

      setAPITitle (arr) {
        var that     = this ;
         arr.forEach((item,index)=>{
            var  currentObj={};
            var apiitem = [];
            currentObj.api = item;
            currentObj.apiitem = apiitem;
            that.apiList.push(currentObj);
         })
          
      },
      showAPI(){ // 点击API列表
         this.$router.push({
          path: '/api'
        });
         console.log(this.currentData)
      },
      showChildItem(){ //点击父标签触发事件
         this.$router.push({
          path: '/api/item'
        });
      },
      gotoItemList(){// 点击li标签触发路由跳转
        this.$router.push({
            path: '/api/cont'
        });
      }
    }
    }
</script>

<style scoped>
    .helpBox{
        width:1200px;
        height:auto;
        margin:0 auto;
    }
    .topBox{
        width:100%;
        height:44px;
        line-height:44px;
        color:#666666;
        font-size:12px;
    }
    .help{
        width:1200px;
        height:auto;
        display: flex;
        justify-content: space-between;
    }
    .leftBox{
        width:196px;
        min-height:436px;
        background:#f9f9f9;
        font-size:14px;
        color:#333333;
    }
    .leftBox a{
        color:#333333;
    }
    .title{
        height:38px;
        line-height:38px;
        padding-left:21px;
        background:#e2231a;
        font-size:16px;
        color:#fff;
        font-weight:bold;
        margin-bottom:10px;
    }
    .title a{
        color:#fff;
    }
    .leftBox .item{
        height: 38px;
        line-height:38px;
        padding-left:21px;
    }
    .leftBox .active a{
        color:#e2231a;
    }
    .leftBox .active a:visited{
        color:#e2231a;
    }
    

    .rightBox{
        width:973px;
        height:auto;
    }
    .icon{
        margin-right:7px;
    }
    .itemCont{
        padding-left:37px;
        display:none;
    }

    .itemTop{
        display:flex;
        height: 20px;
        align-items: center;
        font-size:12px;
        color:#e2231a;
    }
    .itemTop a{
        color:#e2231a;
    }
    .itemTop span{
        width:3px;
        height:3px;
        background:#e2231a;
        margin-right:10px;
    }
    .itemBottom{
        padding-left:13px;
        line-height:20px;
        font-size:12px;
        color:#e2231a;
    }
    .isActive{
        padding-left:37px;
        display:block;
    }
</style>