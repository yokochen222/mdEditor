<template>
    <div id="app">
        <md-header/>
        <div class="main-layout">
            <div class="main-view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import mdHeader from "@/components/mdHeader"
    import sourceManager from "@/components/sourceManager"
    export default {
        name: 'mdeditor',
        components:{
            mdHeader,
            sourceManager
        }
    }
</script>

<style lang="less" scoped>
    #app{
        @header-height:30px;
        @source-manager-width:240px;
        @border-color:#eee;
        position: relative;
        .main-layout{
            .main-view{
                // position: absolute;
                // top:@header-height + 4px;
                // bottom: 0;
                // left: @source-manager-width;
                // right: 0;
            }
        }
    }
</style>
