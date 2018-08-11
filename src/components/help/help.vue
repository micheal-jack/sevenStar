<template>
    <div class = "help">
        <div class = "leftBox">
            <div class = "title">帮助</div>
            <p class = "active">开放平台合作协议</p>
            <p>开放平台申请流程</p>
        </div>
        <div class = "rightBox">
            <h3>开放平台合作协议</h3>
            <p class = "p1">在使用七乐康开放平台服务之前，您应当认真阅读并遵守本协议的全部内容。请您务必审慎阅读、充分理解各条款的内容，特别是以粗体下划线标注的条款，包括但不限于免除或者限制七乐康责任的条款、对服务商权利进行限制的条款、争议解决和法律适用条款等。如果您对本协议的条款有疑问的，请通过七乐康客服渠道进行询问，七乐康将向您解释条款内容。如果您不同意本协议的任意内容，或者无法准确理解七乐康对条款的解释，请不要进行任何后续操作。否则，该等后续操作将表示您已接受了以下所述的条款和条件，同意受本协议约束。届时您不应以未阅读本协议的内容或者未获得七乐康对您问询的解答等理由，主张本协议全部或部分地无效，或要求全部或部分地撤销本协议。</p>
            <h3 class = "h3">七乐康合作伙伴开发协议</h3>
            <p class = "p2">第一条、立约背景<br/>
            1.1、为了规范七乐康开放平台合作伙伴(以下简称“服务商”或“您”)通过开放平台进行的等各项行为，包括但不限于通过开放平台调用应用数据接口（即API），明确服务商的权利义务，营造规范、有序、安全的开放平台环境，保障服务商及用户的合法权益，拟定本协议。</p>
            <p class = "p2">第二条、签约主体<br/>
            2.1、本协议由广州七乐康药业连锁有限公司（以下简称“甲方”）、某某某技术有限公司（以下简称“乙方”，甲方和乙方以下合称“七乐康”）与服务商签署。</p>
        </div>
	</div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .help{
        width:1200px;
        height:auto;
        margin:43px auto 0;
        display: flex;
        justify-content: space-between;
    }
    .leftBox{
        width:196px;
        height:436px;
        background:#f9f9f9;
        font-size:14px;
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
    .leftBox p{
        height: 38px;
        line-height:38px;
        text-align:center;
    }
    .leftBox .active{
        color:#e2231a;
    }
    .rightBox{
        width:973px;
        height:auto;
    }
    .rightBox h3{
        font-size:16px;
        color:#666666;
        font-weight:bold; 
        height:38px;
        line-height:38px;
        margin-bottom:24px;
    }
    .rightBox .p1{
        font-size:14px;
        color:#999999;
        line-height:23px;
        text-indent:28px;
    }
    .rightBox .h3{
        font-weight: normal;
        margin-top:20px;
        margin-bottom:0;
    }
    .rightBox .p2{
        font-size:14px;
        color:#999999;
        line-height:24px;
        margin-top:24px;
    }
</style>