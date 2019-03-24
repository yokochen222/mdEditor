<template>
    <div class="md-header">
        <ul class="md-header-button-group">
            <li>
                <Poptip placement="bottom-start" theme="dark" popper-class="file-poptip">
                    <div class="header-button">文件</div>
                    <div slot="content" class="header-button-content">
                        <p class="header-list-button" @click="openMdFile">打开文件</p>
                        <p class="header-list-button">保存文件</p>
                        <p class="header-list-button">另存为...</p>
                    </div>
                </Poptip>
            </li>
            <li>
                <div class="header-button">设置</div>
            </li>
        </ul>
    </div>
</template>
<script>
import {openMdFile} from "@/utils/mdTools"
export default {
    props:{
        value:{
            typt:Boolean,
            default:true
        }
    },
    methods:{
        openMdFile(){
            openMdFile()
        }
    }
}
</script>

<style lang="less" scoped>
    .md-header{
        height: 30px;
        line-height: 30px;
        background: #ececec;
        -webkit-user-select: none;
        -webkit-app-region: drag;
        
        .md-header-button-group{
            display: flex;
            .header-button{
                padding: 0 8px;
                -webkit-app-region: no-drag;
                cursor: pointer;
                &:hover{
                    background: #ccc;
                }
            }
        }
    }
</style>
