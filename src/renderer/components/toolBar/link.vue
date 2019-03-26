<template>
    <div class="tool-item upload" title="插入链接" @click="clicked">
        <i class='iconfont icon-ai-link'></i>
    </div>
</template>
<script>
import uploader from "@/utils/upload"
export default {
    methods:{
        clicked(){
			this.$bus.$emit("insert",`[链接标题](http://地址)`)
        }
    }
}
</script>
<style lang="less" scoped>
    .upload-input{
        display: none;
    }
</style>
