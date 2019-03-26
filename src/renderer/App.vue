<template>
    <div id="app">
        <md-header/>
        <div class="main-layout">
            <div class="source-manager-warp">
                <sourceManager/>
            </div>
            <div class="main-view">
                <winTab/>
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import mdHeader from "@/components/mdHeader"
    import sourceManager from "@/components/sourceManager"
    import winTab from "@/components/winTab"
    export default {
        name: 'mdeditor',
        components:{
            mdHeader,
            sourceManager,
            winTab
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
            .source-manager-warp{
                width: @source-manager-width;
                position: absolute;
                top:@header-height;
                bottom: 0;
                border-right: 1px solid @border-color;
            }
            .main-view{
                position: absolute;
                top:@header-height + 4px;
                bottom: 0;
                left: @source-manager-width;
                right: 0;
            }
        }
    }
</style>
