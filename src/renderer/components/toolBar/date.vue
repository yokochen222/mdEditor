<template>
    <div class="tool-item upload" title="插入日期" @click="clicked">
        <i class='iconfont icon-ic_calendar'></i>
    </div>
</template>
<script>
import uploader from "@/utils/upload"
export default {
    methods:{
        clicked(){
            this.$bus.$emit("insert",this.getNowFormatDate())
        },
        getNowFormatDate() {
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒
            var clock = year + "-";
            if(month < 10)
                clock += "0";
            clock += month + "-";
            if(day < 10)
                clock += "0";
                clock += day + " ";
            
            if(hh < 10)
                clock += "0";
                clock += hh + ":";
            if (mm < 10) clock += '0'; 
                clock += mm + ":"; 
            if (ss < 10) clock += '0'; 
                clock += ss; 
            return(clock); 
        }
    }
}
</script>
<style lang="less" scoped>
    .upload-input{
        display: none;
    }
</style>
