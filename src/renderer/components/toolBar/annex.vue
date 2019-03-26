<template>
    <div class="tool-item upload" title="插入附件">
        <input  id="uploaderAnnex" @change="selectFile" type="file" class="upload-input">
        <label for="uploaderAnnex">
            <i class='iconfont icon-fujian'></i>
        </label>
    </div>
</template>
<script>
import uploader from "@/utils/upload"
export default {
    methods:{
        uploadSuccess(res){
            let annex=`[${res.fileInfo.fileName}](${res.fileUrl}) \n`
            this.$bus.$emit("insert",annex)
        },
        async selectFile(e){
            const file=e.target.files[0]
            if(!file){
                return 
            }
			if((file.name.split('.').pop().toLowerCase())=="md"){
				console.log("md file")
			}else{
                const res=await uploader(file)
                this.uploadSuccess(res)
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
