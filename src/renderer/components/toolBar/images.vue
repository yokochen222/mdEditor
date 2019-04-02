<template>
    <div class="tool-item upload" title="插入图片">
        <input  id="uploader" @change="selectFile" type="file" accept="image/*" class="upload-input">
        <label for="uploader">
            <i class='iconfont icon-tupian'></i>
        </label>
    </div>
</template>
<script>
import uploader from "@/utils/upload"
export default {
    methods:{
        uploadSuccess(url){
            let img=`![alt](${url})\n`
            this.$bus.$emit("insert",img)
        },
        async selectFile(e){
            const file=e.target.files[0]
			if((file.name.split('.').pop().toLowerCase())=="md"){
				console.log("md file")
			}else{
                const res=await uploader(file)
                this.$bus.$emit("insertImg",res.fileInfo.fileName,res.fileUrl)
			}
        }
    }
}
</script>
<style lang="less" scoped>
    .upload-input{
        display: none;
    }
</style>
