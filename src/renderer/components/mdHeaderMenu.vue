<template>
    <ul class="md-header-button-group">
        <li>
            <Poptip 
                placement="bottom-start" 
                trigger="hover" 
                theme="dark" 
                popper-class="file-poptip"
                padding="0"
            >
                <div class="header-button">文件</div>
                <ol slot="content" class="header-button-content">
                    <dl class="header-list-button" @click="saveNewDoc">
                        <span>新建文件</span>
                        <strong>Ctrl + O</strong>
                    </dl>
                    <dl class="header-list-button" @click="pickMDfile">
                        <span>打开文件</span>
                        <strong>Ctrl + N</strong>
                    </dl>
                    <dl class="header-list-button" @click="saveContent">
                        <span>保存文件</span>
                        <strong>Ctrl + S</strong>
                    </dl>
                    <!-- <dl class="header-list-button">
                        <span>另存为...</span>
                        <strong>Ctrl Shift + S</strong>
                    </dl> -->
                </ol>
            </Poptip>
        </li>
        <li>
            <Poptip 
                placement="bottom-start" 
                trigger="hover" 
                theme="dark" 
                popper-class="file-poptip"
                padding="0"
            >
                <div class="header-button">设置</div>
                <ol slot="content" class="header-button-content">
                    <dl class="header-list-button"  @click="changeReadMeModal">
                        <span>使用说明</span>
                        <strong>Ctrl + H</strong>
                    </dl>
                    <dl class="header-list-button"  @click="changeStorageModal">
                        <span>存储管理</span>
                        <strong>Ctrl + M</strong>
                    </dl>
                    <dl class="header-list-button">
                        <span>检查更新</span>
                    </dl>
                    <dl class="header-list-button"  @click="changeShowDrawer">
                        <span>存储设置</span>
                    </dl>
                </ol>
            </Poptip>
        </li>
        <mdSetting v-model="showDrawer"/>

        <Modal v-model="readMeModal" fullscreen title="使用说明 （按ESC返回）" :footer-hide="true">
			<readMe/>
		</Modal>
        <Modal v-model="storageModal" fullscreen title="文件管理 （按ESC返回）" :footer-hide="true">
			<storage/>
		</Modal>
    </ul>
</template>
<script>
import {pickMDfile,saveNewDoc} from "@/utils/NotePad"
import mdSetting from "./mdSetting"
import readMe from "./readMe"
import storage from "./storage"

export default {
    components:{
        mdSetting,
        readMe,
        storage
    },
    data(){
        return {
            showDrawer:false,
            readMeModal:false,
            storageModal:false
        }
    },
    methods:{
        pickMDfile(){
            pickMDfile().then((res)=>{
                this.$router.push({
                    path:"/editor",
                    query:{
                        fileName:res.fullName,
                        path:res.path
                    }
                })
            })
        },
        saveNewDoc(){
            saveNewDoc().then((res)=>{
                this.$router.push({
                    path:"/editor",
                    query:{
                        fileName:res.fullName,
                        path:res.path
                    }
                })
            })
        },
        jump(path){
            this.$router.push(path)
        },
        saveContent(){
            this.$bus.$emit("saveContent")
        },
        handleKeydown(e){
            const keyCode = e.keyCode || e.which || e.charCode
            const ctrlKey = e.ctrlKey || e.metaKey
            const shiftKey = e.shiftKey
            
            if(ctrlKey && keyCode == 78) {//n
                this.saveNewDoc()
                e.preventDefault()
                return false;
            }else if(ctrlKey && keyCode == 79){//o
                this.pickMDfile()
                e.preventDefault()
                return false;
            }else if(ctrlKey&&keyCode==72){//h
                this.changeReadMeModal()
                e.preventDefault()
                return false;
            }else if(ctrlKey&&keyCode==72){//h
                this.changeReadMeModal()
                e.preventDefault()
                return false;
            }else if(ctrlKey&&keyCode==77){//m
                this.changeStorageModal()
                e.preventDefault()
                return false;
            }
        },
        changeShowDrawer(){
            this.showDrawer=!this.showDrawer
        },
        changeStorageModal(){
            this.storageModal=!this.storageModal
        },
        changeReadMeModal(){
            this.readMeModal=!this.readMeModal
        }
    },
    mounted(){
        window.addEventListener("keydown",this.handleKeydown)
    },
    beforeDestroy(){
        window.removeEventListener("keydown",this.handleKeydown)
    }
}
</script>
<style lang="less" scoped>
.md-header-button-group{
    display: flex;
    overflow: hidden;
    .header-button{
        padding: 0 10px;
        -webkit-app-region: no-drag;
        cursor: pointer;
        &:hover{
            background: #ccc;
        }
    }
    .header-button-content{
        .header-list-button{
            span{
                float: left;
            }
            strong{
                float: right;
            }
        }
    }
}
</style>
