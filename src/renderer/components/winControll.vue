<template>
    <div class="md-win-controll">
        <i @click="sendWinEvents('hide')" class="iconfont icon-minimum"></i>
        <!-- <i @click="sendWinEvents('max')" class="iconfont icon-zhifangkuang" v-if="!full"></i>
        <i @click="sendWinEvents('min')" class="iconfont icon-zuidahua" v-else></i> -->
        <i @click="sendWinEvents('close')" class="iconfont icon-baseline-close-px"></i>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    computed:{
        full(){
            return this.$remote.getCurrentWindow().isMaximized()
        },
        hide(){
            return this.$remote.getCurrentWindow().isMinimized()
        }
    },
    methods:{
        sendWinEvents(type){
            this.$ipc.send("changeWindow",type)
        }
    },
    mounted(){
        this.$ipc.on("changedWindow",(events,data)=>{
            console.log(data)
        })
        
    }
}
</script>
<style lang="less" scoped>
    .md-win-controll{
        display: flex;
        -webkit-app-region: no-drag;
        .iconfont{
            font-size: 16px;
            display: block;
            vertical-align: middle;
            padding: 0 15px;
            -webkit-app-region: no-drag;
            color: #333;
            &:hover{
                background: #ccc;
            }
        }
        .icon-zhifangkuang,.icon-zuidahua{
            font-size: 12px;
        }
        .icon-baseline-close-px{
            &:hover{
                background: #d71526;
                color: #fff;
            }
        }
    }
</style>