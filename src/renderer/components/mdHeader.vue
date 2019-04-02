<template>
    <div class="md-header">
        <div class="brand-ico">
            <img src="@/assets/img/brand.svg"/>
        </div>
        <mdHeaderMenu/>
        <div class="md-header-title" v-text="titles" :title="title"></div>
        <div class="win-controll-warp">
            <winControll/>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
import mdHeaderMenu from "@/components/mdHeaderMenu"
import winControll from "@/components/winControll"
import {getFilePathInfo} from "@/utils/NotePad"
export default {
    components:{
        mdHeaderMenu,
        winControll
    },
    computed:{
        ...mapGetters("Editor",["title"]),
        titles(){
            if(this.title){
                return  getFilePathInfo(this.title).fullName +" - mdEditor"
            }
            return "mdEditor"
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
        display: flex;
        padding-right: 130px;
        .brand-ico{
            width: 50px;
            text-align: center;
            padding: 5px;
            img{
                width: 24px;
            }
        }
        .md-header-title{
            font-size: 14px;
            max-width: 360px;
            padding: 0 15px;
            overflow: hidden;
            margin: 0 auto;
        }
        .win-controll-warp{
            position: absolute;
            right: 0px;
        }
    }
</style>
