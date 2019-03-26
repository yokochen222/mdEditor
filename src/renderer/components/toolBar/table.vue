<template>
    <div class="tool-item upload" title="插入表格" @click="clicked">
        <i class='iconfont icon-biaoge'></i>
    </div>
</template>
<script>
import uploader from "@/utils/upload"
export default {
    methods:{
       clicked(){
           const tableTPL=`\n|标题|标题|标题|标题|\n|-|-|-|-|\n|内容|内容|内容|内容|\n`
           this.$bus.$emit("insert",tableTPL)
       }
    }
}
</script>
<style lang="less" scoped>
    .upload-input{
        display: none;
    }
</style>
